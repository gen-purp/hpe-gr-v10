import { NextRequest, NextResponse } from 'next/server';

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    
    console.log('=== PROFILE UPDATE DEBUG ===');
    console.log('Request received:', body);
    console.log('Timestamp:', new Date().toISOString());
    console.log('===========================');
    
    return NextResponse.json({
      success: true,
      message: 'Debug endpoint working',
      receivedData: body,
      timestamp: new Date().toISOString()
    });
    
  } catch (error) {
    console.error('Debug error:', error);
    return NextResponse.json({
      success: false,
      error: error.message
    });
  }
}
