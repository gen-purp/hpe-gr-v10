import { NextResponse } from 'next/server';
import { getAllContacts } from '@/lib/contactStore';

export async function GET() {
  try {
    // Get all contact submissions from the shared store
    const contacts = getAllContacts();
    
    return NextResponse.json({
      success: true,
      contacts
    });

  } catch (error) {
    console.error('Fetch contacts error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
