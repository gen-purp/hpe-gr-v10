import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://bfplxzqbwthmnqynkzbe.supabase.co';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJmcGx4enFid3RobW5xeW5remJlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc0MzU1MjgsImV4cCI6MjA0MzAxMTUyOH0.gHqUPgEJPeYQHfHD-a_NkBbGqOvKgUqIYWKGqTYdFDw';

const supabase = createClient(supabaseUrl, supabaseServiceKey);

export async function PUT(request: NextRequest) {
  try {
    const { field, value, adminId } = await request.json();

    console.log('Real profile update request:', { field, value, adminId });

    // Build the update data
    const updateData: Record<string, string> = { updated_at: new Date().toISOString() };

    if (field === 'password') {
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

    const logData = field === 'password' ? { ...updateData, password_hash: '[HIDDEN]' } : updateData;
    console.log('Updating database with:', logData);

    // Execute the database update
    const { data, error } = await supabase
      .from('admin_users')
      .update(updateData)
      .eq('id', adminId)
      .select();

    if (error) {
      console.error('Database update error:', error);
      return NextResponse.json(
        { error: 'Failed to update database: ' + error.message },
        { status: 500 }
      );
    }

    console.log('Database update successful:', data);

    return NextResponse.json({
      success: true,
      message: `${field} updated successfully in database`,
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
