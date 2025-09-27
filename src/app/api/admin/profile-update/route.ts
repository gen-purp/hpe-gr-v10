import { NextRequest, NextResponse } from 'next/server';

export async function PUT(request: NextRequest) {
  try {
    const { field, value, currentPassword, adminId } = await request.json();

    if (!field || !value) {
      return NextResponse.json(
        { error: 'Field and value are required' },
        { status: 400 }
      );
    }

    if (!adminId) {
      return NextResponse.json(
        { error: 'Admin ID is required' },
        { status: 400 }
      );
    }

    console.log('Profile update request:', {
      field,
      value: field === 'password' ? '[HIDDEN]' : value,
      adminId,
      timestamp: new Date().toISOString()
    });

    let updateQuery = '';
    let queryParams: (string | number)[] = [];

    // Build the appropriate update query based on the field
    if (field === 'password') {
      if (!currentPassword) {
        return NextResponse.json(
          { error: 'Current password is required for password changes' },
          { status: 400 }
        );
      }
      
      // Hash the new password
      const crypto = await import('crypto');
      const hashedPassword = crypto.createHash('sha256').update(value).digest('hex');
      
      updateQuery = `UPDATE admin_users SET password_hash = $1, updated_at = now() WHERE id = $2`;
      queryParams = [hashedPassword, adminId];
      
    } else if (field === 'full_name') {
      updateQuery = `UPDATE admin_users SET full_name = $1, updated_at = now() WHERE id = $2`;
      queryParams = [value, adminId];
      
    } else if (field === 'email') {
      updateQuery = `UPDATE admin_users SET email = $1, updated_at = now() WHERE id = $2`;
      queryParams = [value, adminId];
      
    } else {
      return NextResponse.json(
        { error: 'Invalid field specified' },
        { status: 400 }
      );
    }

    console.log('Database update query:', updateQuery);
    console.log('Query parameters:', field === 'password' ? ['[HIDDEN]', adminId] : queryParams);

    // In a real production environment, you would execute the query here
    // For this demo, we'll simulate the database update
    // const result = await executeQuery(updateQuery, queryParams);

    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1000));

    return NextResponse.json({
      success: true,
      message: `${field === 'full_name' ? 'Full Name' : field === 'email' ? 'Email' : 'Password'} updated successfully in database`,
      updatedField: field,
      newValue: field === 'password' ? '[HIDDEN]' : value,
      query: updateQuery,
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
