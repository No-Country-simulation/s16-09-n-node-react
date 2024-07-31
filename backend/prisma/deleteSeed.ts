import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Deleting all records...');
  await prisma.userProject.deleteMany({});
  console.log('Deleting all records of users project...');
  await prisma.task.deleteMany({});
  console.log('Deleting all records of tasks...');
  await prisma.milestone.deleteMany({});
  console.log('Deleting all records of milestones...');
  await prisma.meeting.deleteMany({});
  console.log('Deleting all records of meetings...');
  await prisma.event.deleteMany({});
  console.log('Deleting all records of events...');
  await prisma.calendar.deleteMany({});
  console.log('Deleting all records of calendars...');
  await prisma.document.deleteMany({});
  console.log('Deleting all records of documents...');
  await prisma.project.deleteMany({});
  console.log('Deleting all records of projects...');
  await prisma.role.deleteMany({});
  console.log('Deleting all records of roles...');
  await prisma.status.deleteMany({});
  console.log('Deleting all records of status...');
  await prisma.userSkill.deleteMany({});
  console.log('Deleting all records of userSkills...');
  await prisma.skill.deleteMany({});
  console.log('Deleting all records of skills...');
  await prisma.user.deleteMany({});
  console.log('Deleting all records of users...');
  await prisma.company.deleteMany({});
  console.log('Deleting all records of companies...');
  console.log('All records deleted successfully.');
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
