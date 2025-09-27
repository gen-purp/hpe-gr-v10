import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export async function GET() {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://bfplxzqbwthmnqynkzbe.supabase.co';
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJmcGx4enFid3RobW5xeW5remJlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc0MzU1MjgsImV4cCI6MjA0MzAxMTUyOH0.gHqUPgEJPeYQHfHD-a_NkBbGqOvKgUqIYWKGqTYdFDw';
    
    console.log('Testing Supabase connection...');
    console.log('URL:', supabaseUrl);
    console.log('Key:', supabaseKey.substring(0, 20) + '...');
    
    const supabase = createClient(supabaseUrl, supabaseKey);
    
    // Test the connection by querying admin_users
    const { data, error } = await supabase
      .from('admin_users')
      .select('id, full_name, email')
      .limit(1);
    
    if (error) {
      console.error('Supabase test error:', error);
      return NextResponse.json({
        success: false,
        error: error.message,
        details: error
      });
    }
    
    console.log('Supabase test successful:', data);
    
    return NextResponse.json({
      success: true,
      message: 'Supabase connection working',
      data: data,
      url: supabaseUrl,
      keyLength: supabaseKey.length
    });
    
  } catch (error) {
    console.error('Test error:', error);
    return NextResponse.json({
      success: false,
      error: error.message
    });
  }
}
