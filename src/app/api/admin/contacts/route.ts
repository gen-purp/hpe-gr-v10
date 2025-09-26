import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // For now, we'll return mock data with the test record we created
    // In production, you'd query the contact_submissions table using Supabase client
    const mockContacts = [
      {
        id: 'c1c4fa3d-cf0c-4977-8757-d8e8dd65abca',
        name: 'Test User',
        email: 'test@example.com',
        phone: '(555) 123-4567',
        service: 'Residential Electrical',
        message: 'This is a test contact submission',
        status: 'new',
        created_at: '2025-09-26T21:09:15.053424+00:00'
      },
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
