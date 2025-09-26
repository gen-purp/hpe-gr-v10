import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://bfplxzqbwthmnqynkzbe.supabase.co';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJmcGx4enFid3RobW5xeW5remJlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg4OTA2NDAsImV4cCI6MjA3NDQ2NjY0MH0.1mdrL4neDaIaNkZZx4HuZPEU1GYAc11jBBsT9iKJ9sM';

const supabase = createClient(supabaseUrl, supabaseKey);

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, service, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Insert the contact submission into the database
    const { data, error } = await supabase
      .from('contact_submissions')
      .insert([
        {
          name,
          email,
          phone: phone || null,
          service: service || null,
          message,
          status: 'new'
        }
      ])
      .select()
      .single();

    if (error) {
      console.error('Database error:', error);
      return NextResponse.json(
        { error: 'Failed to save contact submission' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      id: data.id,
      message: 'Contact form submitted successfully'
    });

  } catch (error) {
    console.error('Contact submission error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
