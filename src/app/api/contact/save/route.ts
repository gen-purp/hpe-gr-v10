import { NextRequest, NextResponse } from 'next/server';
import { addContact } from '@/lib/contactStore';

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, service, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Create a new contact submission
    const newSubmission = {
      id: `contact_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      name,
      email,
      phone: phone || undefined,
      service: service || undefined,
      message,
      status: 'new' as const,
      created_at: new Date().toISOString()
    };

    // Add to our shared store
    addContact(newSubmission);
    
    console.log('Contact form submission saved:', newSubmission);

    return NextResponse.json({
      success: true,
      id: newSubmission.id,
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
