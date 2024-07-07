import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Crear usuarios
  const user1 = await prisma.user.create({
    data: {
      username: 'user1',
      email: 'user1@example.com',
      password: 'password1',
      name: 'John',
      lastName: 'Doe',
      role: 'admin',
      technologies: 'JavaScript, TypeScript',
      tools: 'VSCode, Git',
      location: 'USA',
      timezone: 'PST',
    },
  })

  const user2 = await prisma.user.create({
    data: {
      username: 'user2',
      email: 'user2@example.com',
      password: 'password2',
      name: 'Jane',
      lastName: 'Smith',
      role: 'developer',
      technologies: 'Java, Spring Boot',
      tools: 'IntelliJ, Git',
      location: 'Canada',
      timezone: 'EST',
    },
  })

  // Crear proyectos
  const project1 = await prisma.project.create({
    data: {
      name: 'Project 1',
      description: 'Description for project 1',
      ownerId: user1.id,
      technologies: 'JavaScript, React',
      type: 'Web Application',
      duration: '6 months',
    },
  })

  // Crear miembros del proyecto
  await prisma.projectMember.create({
    data: {
      projectId: project1.id,
      userId: user2.id,
      role: 'contributor',
    },
  })

  // Crear reuniones
  await prisma.meeting.create({
    data: {
      projectId: project1.id,
      title: 'Kickoff Meeting',
      meeting_date: new Date('2023-01-01T10:00:00Z'),
    },
  })

  console.log('Seeding finished.')
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
