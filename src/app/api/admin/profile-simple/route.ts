import { NextRequest, NextResponse } from 'next/server';

export async function PUT(request: NextRequest) {
  try {
    const { field, value, adminId } = await request.json();

    console.log('Simple profile update:', { field, value, adminId });

    // For now, just return success without database update
    // This will help us test if the API is being called
    return NextResponse.json({
      success: true,
      message: `${field} updated successfully (test mode)`,
      updatedField: field,
      newValue: value,
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
