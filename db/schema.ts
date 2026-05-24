import {
  pgTable,
  serial,
  varchar,
  text,
  date,
  timestamp,
  boolean,
  integer,
  decimal,
} from 'drizzle-orm/pg-core';

// Users table
export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  email: varchar('email', { length: 255 }).unique().notNull(),
  password: varchar('password', { length: 255 }).notNull(),
  role: varchar('role', { length: 20 }).notNull(),
  firstName: varchar('first_name', { length: 100 }).notNull(),
  lastName: varchar('last_name', { length: 100 }).notNull(),
  phoneNumber: varchar('phone_number', { length: 20 }),
  profileImageUrl: text('profile_image_url'),
  dateOfBirth: date('date_of_birth'),
  gender: varchar('gender', { length: 20 }),
  isActive: boolean('is_active').default(true),
  lastLogin: timestamp('last_login'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

// Classes table
export const classes = pgTable('classes', {
  id: serial('id').primaryKey(),
  className: varchar('class_name', { length: 50 }).notNull().unique(),
  section: varchar('section', { length: 10 }).notNull(),
  classTeacherId: integer('class_teacher_id'),
  totalStrength: integer('total_strength').default(0),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

// Students table
export const students = pgTable('students', {
  id: serial('id').primaryKey(),
  userId: integer('user_id').notNull(),
  rollNumber: varchar('roll_number', { length: 50 }).notNull().unique(),
  classId: integer('class_id').notNull(),
  fatherName: varchar('father_name', { length: 100 }),
  motherName: varchar('mother_name', { length: 100 }),
  guardianPhone: varchar('guardian_phone', { length: 20 }),
  address: text('address'),
  enrollmentStatus: varchar('enrollment_status', { length: 20 }).default('active'),
  admissionDate: date('admission_date'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

// Teachers table
export const teachers = pgTable('teachers', {
  id: serial('id').primaryKey(),
  userId: integer('user_id').notNull(),
  employeeId: varchar('employee_id', { length: 50 }).notNull().unique(),
  qualifications: text('qualifications'),
  specializations: text('specializations'),
  monthlyPayroll: decimal('monthly_payroll', { precision: 10, scale: 2 }),
  joinDate: date('join_date'),
  department: varchar('department', { length: 100 }),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

// Teacher-Class-Subject assignment
export const teacherAssignments = pgTable('teacher_assignments', {
  id: serial('id').primaryKey(),
  teacherId: integer('teacher_id').notNull(),
  classId: integer('class_id').notNull(),
  subject: varchar('subject', { length: 100 }).notNull(),
  createdAt: timestamp('created_at').defaultNow(),
});

// Attendance table
export const attendance = pgTable('attendance', {
  id: serial('id').primaryKey(),
  studentId: integer('student_id').notNull(),
  teacherId: integer('teacher_id').notNull(),
  classId: integer('class_id').notNull(),
  subject: varchar('subject', { length: 100 }).notNull(),
  attendanceDate: date('attendance_date').notNull(),
  status: varchar('status', { length: 20 }).notNull(),
  remarks: text('remarks'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

// Marks/Grades table
export const marks = pgTable('marks', {
  id: serial('id').primaryKey(),
  studentId: integer('student_id').notNull(),
  teacherId: integer('teacher_id').notNull(),
  classId: integer('class_id').notNull(),
  subject: varchar('subject', { length: 100 }).notNull(),
  examType: varchar('exam_type', { length: 50 }).notNull(),
  marksObtained: decimal('marks_obtained', { precision: 5, scale: 2 }),
  totalMarks: decimal('total_marks', { precision: 5, scale: 2 }).default('100'),
  recordedDate: date('recorded_date'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

// Timetable
export const timetable = pgTable('timetable', {
  id: serial('id').primaryKey(),
  classId: integer('class_id').notNull(),
  dayOfWeek: varchar('day_of_week', { length: 20 }).notNull(),
  period: integer('period').notNull(),
  startTime: varchar('start_time', { length: 10 }).notNull(),
  endTime: varchar('end_time', { length: 10 }).notNull(),
  subject: varchar('subject', { length: 100 }).notNull(),
  teacherId: integer('teacher_id'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

// Announcements
export const announcements = pgTable('announcements', {
  id: serial('id').primaryKey(),
  title: varchar('title', { length: 255 }).notNull(),
  content: text('content').notNull(),
  createdBy: integer('created_by').notNull(),
  publishDate: date('publish_date').notNull(),
  expiryDate: date('expiry_date'),
  isActive: boolean('is_active').default(true),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});