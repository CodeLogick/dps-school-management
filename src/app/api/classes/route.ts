import { db } from '@/lib/db';
import { classes, users, teacherAssignments } from '@/db/schema';
import { eq } from 'drizzle-orm';

export async function GET() {
  try {
    // Fetch all classes
    const allClasses = await db.select().from(classes);

    // For each class, fetch the teacher name and subjects
    const classesWithDetails = await Promise.all(
      allClasses.map(async (classItem) => {
        let classTeacherName = 'Unassigned';
        let subjects: string[] = [];

        // Fetch class teacher name if assigned
        if (classItem.classTeacherId) {
          const teacher = await db
            .select()
            .from(users)
            .where(eq(users.id, classItem.classTeacherId))
            .limit(1);

          if (teacher.length > 0) {
            classTeacherName = `${teacher[0].firstName} ${teacher[0].lastName}`;
          }
        }

        // Fetch subjects assigned to this class
        const assignments = await db
          .select({ subject: teacherAssignments.subject })
          .from(teacherAssignments)
          .where(eq(teacherAssignments.classId, classItem.id));

        subjects = [...new Set(assignments.map((a) => a.subject))];

        return {
          id: classItem.id,
          className: classItem.className,
          section: classItem.section,
          classTeacher: classTeacherName,
          strength: classItem.totalStrength || 0,
          subjects,
        };
      })
    );

    return Response.json(classesWithDetails);
  } catch (error) {
    console.error('Error fetching classes:', error);
    return Response.json(
      { error: 'Failed to fetch classes' },
      { status: 500 }
    );
  }
}
