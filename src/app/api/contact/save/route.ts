import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, service, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // For now, we'll return success and log the submission
    // In a production environment, you would:
    // 1. Use the Supabase client with proper authentication
    // 2. Or implement a direct database connection
    // 3. Or use the MCP connection to save to the database
    
    console.log('Contact form submission:', {
      name,
      email,
      phone: phone || 'Not provided',
      service: service || 'Not specified',
      message,
      timestamp: new Date().toISOString()
    });

    // Generate a unique ID for the submission
    const submissionId = `contact_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

    return NextResponse.json({
      success: true,
      id: submissionId,
      message: 'Contact form submitted successfully. We will get back to you soon!'
    });

  } catch (error) {
    console.error('Contact submission error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
