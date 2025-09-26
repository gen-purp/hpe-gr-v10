// Shared contact submissions store
// In production, this would be replaced with a proper database

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
  status: 'new' | 'in_progress' | 'completed' | 'closed';
  created_at: string;
}

// In-memory store for contact submissions
const contactSubmissions: ContactSubmission[] = [
  // Sample data
  {
    id: 'sample_1',
    name: 'John Smith',
    email: 'john.smith@email.com',
    phone: '(555) 123-4567',
    service: 'Residential Electrical',
    message: 'Need help with outlet installation in my kitchen.',
    status: 'new',
    created_at: new Date().toISOString()
  },
  {
    id: 'sample_2',
    name: 'Sarah Johnson',
    email: 'sarah.j@email.com',
    phone: '(555) 987-6543',
    service: 'Commercial Electrical',
    message: 'Looking for lighting upgrade for our office building.',
    status: 'in_progress',
    created_at: new Date(Date.now() - 86400000).toISOString() // 1 day ago
  },
  {
    id: 'sample_3',
    name: 'Mike Davis',
    email: 'mike.davis@email.com',
    phone: '(555) 456-7890',
    service: 'Emergency Service',
    message: 'Power outage in our building, need urgent help.',
    status: 'completed',
    created_at: new Date(Date.now() - 172800000).toISOString() // 2 days ago
  }
];

export function getAllContacts(): ContactSubmission[] {
  return contactSubmissions;
}

export function addContact(contact: ContactSubmission): void {
  contactSubmissions.push(contact);
}

export function updateContactStatus(id: string, status: ContactSubmission['status']): boolean {
  const contact = contactSubmissions.find(c => c.id === id);
  if (contact) {
    contact.status = status;
    return true;
  }
  return false;
}

export function deleteContact(id: string): boolean {
  const index = contactSubmissions.findIndex(c => c.id === id);
  if (index !== -1) {
    contactSubmissions.splice(index, 1);
    return true;
  }
  return false;
}
