export interface User {
  id: string;
  email: string;
  password: string;
  name: string;
  role: "user" | "admin";
  avatar?: string;
  phone?: string;
  address?: string;
  createdAt: string;
}

// Mock users for testing - passwords are plain text for demo only
export const users: User[] = [
  {
    id: "1",
    email: "admin@athlexia.com",
    password: "admin123",
    name: "Admin User",
    role: "admin",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
    phone: "+91 9876543210",
    address: "123 Sports Complex, Ahmedabad",
    createdAt: "2024-01-01",
  },
  {
    id: "2",
    email: "user@athlexia.com",
    password: "user123",
    name: "John Athlete",
    role: "user",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    phone: "+91 9876543211",
    address: "456 Fitness Lane, Mumbai",
    createdAt: "2024-02-15",
  },
];

export const validateUser = (email: string, password: string): User | null => {
  const user = users.find(
    (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password
  );
  return user || null;
};

export const getUserByEmail = (email: string): User | undefined => {
  return users.find((u) => u.email.toLowerCase() === email.toLowerCase());
};
