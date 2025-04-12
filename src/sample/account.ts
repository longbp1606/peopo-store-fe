export interface Account {
  username: string;
  password: string;
  role: 'admin' | 'user' | 'guest';
}

export const accounts: Account[] = [
  {
    username: 'admin@email.com',
    password: 'Admin@123',
    role: 'admin'
  },
  {
    username: 'john_doe',
    password: 'password123',
    role: 'user'
  },
  {
    username: 'jane_smith',
    password: 'pass456',
    role: 'user'
  },
  {
    username: 'guest_user',
    password: 'guest789',
    role: 'guest'
  },
  {
    username: 'tech_lead',
    password: 'secure321',
    role: 'admin'
  }
];
