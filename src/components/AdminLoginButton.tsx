'use client';

import Link from 'next/link';

export default function AdminLoginButton() {
  return (
    <Link
      href="/admin/login"
      className="fixed bottom-6 right-6 bg-gray-800 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-gray-700 transition-colors z-50 text-sm font-medium"
    >
      🔐 Admin Login
    </Link>
  );
}
