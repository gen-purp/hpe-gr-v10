import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // For now, we'll return mock data since we need to set up proper Supabase client
    // In production, you'd query the contact_submissions table
    const mockContacts = [
      {
        id: '1',
        name: 'John Smith',
        email: 'john.smith@email.com',
        phone: '(555) 123-4567',
        service: 'Residential Electrical',
        message: 'Need help with outlet installation in my kitchen.',
        status: 'new',
        created_at: new Date().toISOString()
      },
      {
        id: '2',
        name: 'Sarah Johnson',
        email: 'sarah.j@email.com',
        phone: '(555) 987-6543',
        service: 'Commercial Electrical',
        message: 'Looking for lighting upgrade for our office building.',
        status: 'in_progress',
        created_at: new Date(Date.now() - 86400000).toISOString() // 1 day ago
      },
      {
        id: '3',
        name: 'Mike Davis',
        email: 'mike.davis@email.com',
        phone: '(555) 456-7890',
        service: 'Emergency Service',
        message: 'Power outage in our building, need urgent help.',
        status: 'completed',
        created_at: new Date(Date.now() - 172800000).toISOString() // 2 days ago
      }
    ];

    return NextResponse.json({
      success: true,
      contacts: mockContacts
    });

  } catch (error) {
    console.error('Fetch contacts error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
