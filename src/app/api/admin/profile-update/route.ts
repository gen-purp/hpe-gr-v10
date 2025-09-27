import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client with service role key for admin operations
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://bfplxzqbwthmnqynkzbe.supabase.co';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJmcGx4enFid3RobW5xeW5remJlIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyNzQzNTUyOCwiZXhwIjoyMDQzMDExNTI4fQ.YourServiceRoleKeyHere';

let supabase: ReturnType<typeof createClient> | null = null;

try {
  supabase = createClient(supabaseUrl, supabaseServiceKey);
} catch (error) {
  console.error('Failed to initialize Supabase client:', error);
}

export async function PUT(request: NextRequest) {
  try {
    console.log('=== PROFILE UPDATE API CALLED ===');
    console.log('Timestamp:', new Date().toISOString());
    console.log('Supabase client available:', !!supabase);
    console.log('===============================');
    
    if (!supabase) {
      console.log('ERROR: Supabase client not available');
      return NextResponse.json(
        { error: 'Database connection not available' },
        { status: 500 }
      );
    }

    const { field, value, currentPassword, adminId } = await request.json();

    if (!field || !value) {
      return NextResponse.json(
        { error: 'Field and value are required' },
        { status: 400 }
      );
    }

    if (!adminId) {
      return NextResponse.json(
        { error: 'Admin ID is required' },
        { status: 400 }
      );
    }

    console.log('Profile update request:', {
      field,
      value: field === 'password' ? '[HIDDEN]' : value,
      adminId,
      timestamp: new Date().toISOString()
    });

    const updateData: Record<string, string> = { updated_at: new Date().toISOString() };

    // Build the appropriate update data based on the field
    if (field === 'password') {
      if (!currentPassword) {
        return NextResponse.json(
          { error: 'Current password is required for password changes' },
          { status: 400 }
        );
      }
      
      // Hash the new password
      const crypto = await import('crypto');
      const hashedPassword = crypto.createHash('sha256').update(value).digest('hex');
      
      updateData.password_hash = hashedPassword;
      
    } else if (field === 'full_name') {
      updateData.full_name = value;
      
    } else if (field === 'email') {
      updateData.email = value;
      
    } else {
      return NextResponse.json(
        { error: 'Invalid field specified' },
        { status: 400 }
      );
    }

    console.log('Updating database with:', field === 'password' ? { ...updateData, password_hash: '[HIDDEN]' } : updateData);
    console.log('Supabase client status:', supabase ? 'Connected' : 'Not connected');
    console.log('Supabase URL:', supabaseUrl);

    // Execute the database update
    const { data, error } = await supabase
      .from('admin_users')
      .update(updateData)
      .eq('id', adminId)
      .select();

    if (error) {
      console.error('Database update error:', error);
      return NextResponse.json(
        { error: 'Failed to update database' },
        { status: 500 }
      );
    }

    console.log('Database update successful:', data);

    return NextResponse.json({
      success: true,
      message: `${field === 'full_name' ? 'Full Name' : field === 'email' ? 'Email' : 'Password'} updated successfully in database`,
      updatedField: field,
      newValue: field === 'password' ? '[HIDDEN]' : value,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Profile update error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
