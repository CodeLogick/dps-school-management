import { db } from '@/lib/db';
import { users, students, teachers, classes } from '@/db/schema';
import bcryptjs from 'bcryptjs';

async function seed() {
  console.log('🌱 Seeding database...');

  try {
    // Create Admin User
    await db
      .insert(users)
      .values({
        email: 'admin@dpsinternational.com',
        password: 'admin123',
        role: 'admin',
        firstName: 'Admin',
        lastName: 'User',
        isActive: true,
      })
      .onConflictDoNothing();

    // Create Teacher User
    await db
      .insert(users)
      .values({
        email: 'teacher@dpsinternational.com',
        password: 'admin123',
        role: 'teacher',
        firstName: 'John',
        lastName: 'Teacher',
        isActive: true,
      })
      .onConflictDoNothing();

    // Create Student User
    await db
      .insert(users)
      .values({
        email: 'student@dpsinternational.com',
        password: 'admin123',
        role: 'student',
        firstName: 'Arjun',
        lastName: 'Student',
        isActive: true,
      })
      .onConflictDoNothing();

    // Create Classes
    await db
      .insert(classes)
      .values([
        {
          className: '10-A',
          section: 'A',
          totalStrength: 35,
        },
        {
          className: '10-B',
          section: 'B',
          totalStrength: 38,
        },
        {
          className: '11-A',
          section: 'A',
          totalStrength: 32,
        },
      ])
      .onConflictDoNothing();

    console.log('✅ Database seeded successfully!');
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
}

seed();