import { NextRequest, NextResponse } from 'next/server';
import { updateAdminProfile } from '@/actions/admin-actions';

export async function PUT(request: NextRequest) {
  try {
    const { field, value, adminId } = await request.json();

    console.log('Profile update request:', { field, value, adminId });

    // Use the server action to update the database
    const updateResult = await updateAdminProfile(adminId, field, value);

    if (updateResult.success) {
      return NextResponse.json({
        success: true,
        message: updateResult.message,
        updatedField: field,
        newValue: value,
        timestamp: new Date().toISOString()
      });
    } else {
      return NextResponse.json({
        success: false,
        error: updateResult.error || 'Failed to update database'
      }, { status: 500 });
    }

  } catch (error) {
    console.error('Profile update error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
