import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export async function GET() {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://bfplxzqbwthmnqynkzbe.supabase.co';
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJmcGx4enFid3RobW5xeW5remJlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc0MzU1MjgsImV4cCI6MjA0MzAxMTUyOH0.gHqUPgEJPeYQHfHD-a_NkBbGqOvKgUqIYWKGqTYdFDw';
    
    console.log('Testing direct database update...');
    console.log('URL:', supabaseUrl);
    console.log('Key type:', supabaseKey.includes('service_role') ? 'Service Role' : 'Anon');
    
    const supabase = createClient(supabaseUrl, supabaseKey);
    
    // Test updating the admin user
    const testEmail = `test-${Date.now()}@example.com`;
    const adminId = '04333436-56fe-46ec-9b34-3012c4c69e73';
    
    console.log('Updating admin user with test email:', testEmail);
    
    const { data, error } = await supabase
      .from('admin_users')
      .update({ 
        email: testEmail,
        updated_at: new Date().toISOString()
      })
      .eq('id', adminId)
      .select();
    
    if (error) {
      console.error('Database update error:', error);
      return NextResponse.json({
        success: false,
        error: error.message,
        details: error
      });
    }
    
    console.log('Database update successful:', data);
    
    // Verify the update
    const { data: verifyData, error: verifyError } = await supabase
      .from('admin_users')
      .select('email, updated_at')
      .eq('id', adminId)
      .single();
    
    if (verifyError) {
      console.error('Verification error:', verifyError);
    }
    
    return NextResponse.json({
      success: true,
      message: 'Database update test successful',
      updatedData: data,
      verification: verifyData,
      testEmail: testEmail
    });
    
  } catch (error) {
    console.error('Test error:', error);
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}
