import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const DEMO_USERS = [
  {
    id: 1,
    email: 'admin@dpsinternational.com',
    password: 'admin123',
    firstName: 'Admin',
    lastName: 'User',
    role: 'admin',
    isActive: true,
  },
  {
    id: 2,
    email: 'teacher@dpsinternational.com',
    password: 'admin123',
    firstName: 'John',
    lastName: 'Teacher',
    role: 'teacher',
    isActive: true,
  },
  {
    id: 3,
    email: 'student@dpsinternational.com',
    password: 'admin123',
    firstName: 'Arjun',
    lastName: 'Student',
    role: 'student',
    isActive: true,
  },
];

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Email and password are required');
        }

        const user = DEMO_USERS.find(
          (u) => u.email.toLowerCase() === credentials.email.toLowerCase()
        );

        if (!user) {
          throw new Error('Invalid email or password');
        }

        if (credentials.password !== user.password) {
          throw new Error('Invalid email or password');
        }

        if (!user.isActive) {
          throw new Error('User account is inactive');
        }

        return {
          id: user.id.toString(),
          email: user.email,
          name: `${user.firstName} ${user.lastName}`,
          image: '/default-avatar.png',
          role: user.role,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = (user as any).role;
        token.id = (user as any).id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as any).role = token.role;
        (session.user as any).id = token.id;
      }
      return session;
    },
  },
  pages: {
    signIn: '/login',
  },
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60,
  },
  secret: process.env.NEXTAUTH_SECRET,
};