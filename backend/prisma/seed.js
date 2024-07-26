import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Crear roles
  const roles = [
    'Team Leader',
    'Project Manager',
    'Front-end',
    'Back-end',
    'UX UI',
    'DevOps',
    'QA tester',
    'Mobile dev',
    'No code devs',
    'Data analyst',
    'Data engineer',
    'Data scientist',
    'ETL developer',
  ];

  const rolePromises = roles.map((role) =>
    prisma.role.create({ data: { name: role } }),
  );
  const createdRoles = await Promise.all(rolePromises);

  // Crear habilidades
  const skills = [
    'JavaScript',
    'TypeScript',
    'React.js',
    'Java',
    'Figma',
    'Express.js',
    'Nest.js',
    'Prisma.io',
    'PostgreSQL',
    'MySQL',
    'Empatía',
    'Adaptabilidad',
  ];

  const skillPromises = skills.map((skill) =>
    prisma.skill.create({ data: { name: skill } }),
  );
  const createdSkills = await Promise.all(skillPromises);

  // Crear empresa
  const company = await prisma.company.create({
    data: {
      name: 'projet',
      calendar: {
        create: {
          name: 'projet-calendar',
        },
      },
    },
  });

  // Crear usuarios
  const users = [
    {
      username: 'usuario1',
      email: 'usuario1@example.com',
      password: 'password',
      name: 'Usuario',
      lastName: 'Uno',
      companyId: company.id,
    },
    {
      username: 'usuario2',
      email: 'usuario2@example.com',
      password: 'password',
      name: 'Usuario',
      lastName: 'Dos',
      companyId: company.id,
    },
    {
      username: 'usuario3',
      email: 'usuario3@example.com',
      password: 'password',
      name: 'Usuario',
      lastName: 'Tres',
      companyId: company.id,
    },
  ];

  const userPromises = users.map((user) => prisma.user.create({ data: user }));
  const createdUsers = await Promise.all(userPromises);

  // Crear proyectos
  const projects = ['proyecto1', 'proyecto2', 'proyecto3'];

  const projectPromises = projects.map((project) =>
    prisma.project.create({ data: { name: project, companyId: company.id } }),
  );
  const createdProjects = await Promise.all(projectPromises);

  // Crear calendarios
  const calendars = ['sprint 1', 'sprint 2', 'sprint 3', 'demoday', 'otros'];

  const calendarPromises = calendars.map((calendar) =>
    prisma.calendar.create({ data: { name: calendar } }),
  );
  const createdCalendars = await Promise.all(calendarPromises);

  // Crear reuniones
  const meetings = ['daily', 'otros'];

  const meetingPromises = meetings.map((meeting) =>
    prisma.meeting.create({
      data: { name: meeting, link: '', dateTime: new Date() },
    }),
  );
  const createdMeetings = await Promise.all(meetingPromises);

  // Crear tareas
  const tasks = ['tarea1', 'tarea2', 'tarea3'];

  const taskPromises = tasks.map((task) =>
    prisma.task.create({
      data: { name: task, projectId: createdProjects[0].id },
    }),
  );
  const createdTasks = await Promise.all(taskPromises);

  // Crear hitos
  const milestones = ['hito1', 'hito2', 'hito3', 'hito4'];

  const milestonePromises = milestones.map((milestone) =>
    prisma.milestone.create({
      data: {
        name: milestone,
        projectId: createdProjects[0].id,
        targetDate: new Date(),
      },
    }),
  );
  const createdMilestones = await Promise.all(milestonePromises);

  // Asignar habilidades a usuarios
  const userSkillPromises = createdUsers.map((user) =>
    createdSkills.map((skill) =>
      prisma.userSkill.create({
        data: { userId: user.id, skillId: skill.id, level: 'Intermediate' },
      }),
    ),
  );
  await Promise.all(userSkillPromises.flat());

  // Asignar roles a usuarios en proyectos
  const userProjectRoleAssignments = [
    {
      userId: createdUsers[0].id,
      projectId: createdProjects[0].id,
      roleName: 'Front-end',
    },
    {
      userId: createdUsers[1].id,
      projectId: createdProjects[1].id,
      roleName: 'Back-end',
    },
    {
      userId: createdUsers[2].id,
      projectId: createdProjects[2].id,
      roleName: 'Project Manager',
    },
    {
      userId: createdUsers[0].id,
      projectId: createdProjects[1].id,
      roleName: 'UX UI',
    },
    {
      userId: createdUsers[1].id,
      projectId: createdProjects[2].id,
      roleName: 'QA tester',
    },
    {
      userId: createdUsers[2].id,
      projectId: createdProjects[0].id,
      roleName: 'Data analyst',
    },
  ];

  const userProjectRolePromises = userProjectRoleAssignments.map(
    ({ userId, projectId, roleName }) => {
      const role = createdRoles.find((role) => role.name === roleName);
      return prisma.userProject.create({
        data: { userId, projectId, roleId: role.id },
      });
    },
  );

  await Promise.all(userProjectRolePromises);

  console.log('Seed data created successfully');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
