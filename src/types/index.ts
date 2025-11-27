export interface User {
  id: number;
  email: string;
  name: string;
  profileImage?: string;
  bio?: string;
  college?: string;
  branch?: string;
  graduationYear?: number;
  isVerified: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  email: string;
  password: string;
  name: string;
  college: string;
  branch: string;
}

