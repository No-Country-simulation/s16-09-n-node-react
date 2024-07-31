/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Calendar` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Document` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Meeting` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Milestone` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `shiftId` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Task` table. All the data in the column will be lost.
  - You are about to drop the column `taskStatusId` on the `Task` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `CalendarToEvent` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CalendarToMeeting` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CompanyToDocument` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CompanyToProject` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CompanyToUser` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ProjectToUserProject` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `RoleToUserProject` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Shift` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TaskStatus` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TaskToUser` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[name]` on the table `Role` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `Skill` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[username]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId,projectId]` on the table `UserProject` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId,skillId]` on the table `UserSkill` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `companyId` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `statusId` to the `Task` table without a default value. This is not possible if the table is not empty.
  - Made the column `projectId` on table `Task` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `companyId` to the `User` table without a default value. This is not possible if the table is not empty.
  - Made the column `roleId` on table `UserProject` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "CalendarToEvent" DROP CONSTRAINT "CalendarToEvent_calendarId_fkey";

-- DropForeignKey
ALTER TABLE "CalendarToEvent" DROP CONSTRAINT "CalendarToEvent_eventId_fkey";

-- DropForeignKey
ALTER TABLE "CalendarToMeeting" DROP CONSTRAINT "CalendarToMeeting_calendarId_fkey";

-- DropForeignKey
ALTER TABLE "CalendarToMeeting" DROP CONSTRAINT "CalendarToMeeting_meetingId_fkey";

-- DropForeignKey
ALTER TABLE "CompanyToDocument" DROP CONSTRAINT "CompanyToDocument_companyId_fkey";

-- DropForeignKey
ALTER TABLE "CompanyToDocument" DROP CONSTRAINT "CompanyToDocument_documentId_fkey";

-- DropForeignKey
ALTER TABLE "CompanyToProject" DROP CONSTRAINT "CompanyToProject_companyId_fkey";

-- DropForeignKey
ALTER TABLE "CompanyToProject" DROP CONSTRAINT "CompanyToProject_projectId_fkey";

-- DropForeignKey
ALTER TABLE "CompanyToUser" DROP CONSTRAINT "CompanyToUser_companyId_fkey";

-- DropForeignKey
ALTER TABLE "CompanyToUser" DROP CONSTRAINT "CompanyToUser_userId_fkey";

-- DropForeignKey
ALTER TABLE "Meeting" DROP CONSTRAINT "Meeting_calendarId_fkey";

-- DropForeignKey
ALTER TABLE "Project" DROP CONSTRAINT "Project_shiftId_fkey";

-- DropForeignKey
ALTER TABLE "ProjectToUserProject" DROP CONSTRAINT "ProjectToUserProject_projectId_fkey";

-- DropForeignKey
ALTER TABLE "ProjectToUserProject" DROP CONSTRAINT "ProjectToUserProject_userProjectId_fkey";

-- DropForeignKey
ALTER TABLE "RoleToUserProject" DROP CONSTRAINT "RoleToUserProject_roleId_fkey";

-- DropForeignKey
ALTER TABLE "RoleToUserProject" DROP CONSTRAINT "RoleToUserProject_userProjectId_fkey";

-- DropForeignKey
ALTER TABLE "Task" DROP CONSTRAINT "Task_projectId_fkey";

-- DropForeignKey
ALTER TABLE "Task" DROP CONSTRAINT "Task_taskStatusId_fkey";

-- DropForeignKey
ALTER TABLE "TaskToUser" DROP CONSTRAINT "TaskToUser_taskId_fkey";

-- DropForeignKey
ALTER TABLE "TaskToUser" DROP CONSTRAINT "TaskToUser_userId_fkey";

-- DropForeignKey
ALTER TABLE "UserProject" DROP CONSTRAINT "UserProject_roleId_fkey";

-- AlterTable
ALTER TABLE "Calendar" DROP COLUMN "createdAt",
ADD COLUMN     "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "Company" DROP COLUMN "createdAt",
ADD COLUMN     "calendarId" TEXT,
ADD COLUMN     "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "Document" DROP COLUMN "createdAt",
ADD COLUMN     "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "Event" DROP COLUMN "createdAt",
ADD COLUMN     "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "Meeting" DROP COLUMN "createdAt",
ADD COLUMN     "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true,
ALTER COLUMN "description" DROP NOT NULL,
ALTER COLUMN "calendarId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Milestone" DROP COLUMN "createdAt",
ADD COLUMN     "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true,
ALTER COLUMN "description" DROP NOT NULL,
ALTER COLUMN "completed" SET DEFAULT false;

-- AlterTable
ALTER TABLE "Project" DROP COLUMN "createdAt",
DROP COLUMN "shiftId",
ADD COLUMN     "calendarId" TEXT,
ADD COLUMN     "companyId" TEXT NOT NULL,
ADD COLUMN     "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true,
ALTER COLUMN "description" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Role" ADD COLUMN     "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "Skill" ADD COLUMN     "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true,
ALTER COLUMN "level" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Task" DROP COLUMN "createdAt",
DROP COLUMN "taskStatusId",
ADD COLUMN     "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "statusId" TEXT NOT NULL,
ADD COLUMN     "userId" TEXT,
ALTER COLUMN "description" DROP NOT NULL,
ALTER COLUMN "dueDate" DROP NOT NULL,
ALTER COLUMN "projectId" SET NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "createdAt",
ADD COLUMN     "companyId" TEXT NOT NULL,
ADD COLUMN     "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true,
ALTER COLUMN "username" DROP NOT NULL,
ALTER COLUMN "isAdmin" SET DEFAULT false,
ALTER COLUMN "location" DROP NOT NULL,
ALTER COLUMN "timezone" DROP NOT NULL;

-- AlterTable
ALTER TABLE "UserProject" ADD COLUMN     "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true,
ALTER COLUMN "roleId" SET NOT NULL;

-- AlterTable
ALTER TABLE "UserSkill" ADD COLUMN     "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true,
ALTER COLUMN "level" DROP NOT NULL;

-- DropTable
DROP TABLE "CalendarToEvent";

-- DropTable
DROP TABLE "CalendarToMeeting";

-- DropTable
DROP TABLE "CompanyToDocument";

-- DropTable
DROP TABLE "CompanyToProject";

-- DropTable
DROP TABLE "CompanyToUser";

-- DropTable
DROP TABLE "ProjectToUserProject";

-- DropTable
DROP TABLE "RoleToUserProject";

-- DropTable
DROP TABLE "Shift";

-- DropTable
DROP TABLE "TaskStatus";

-- DropTable
DROP TABLE "TaskToUser";

-- CreateTable
CREATE TABLE "Status" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Status_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Status_name_key" ON "Status"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Role_name_key" ON "Role"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Skill_name_key" ON "Skill"("name");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "UserProject_userId_projectId_key" ON "UserProject"("userId", "projectId");

-- CreateIndex
CREATE UNIQUE INDEX "UserSkill_userId_skillId_key" ON "UserSkill"("userId", "skillId");

-- AddForeignKey
ALTER TABLE "Company" ADD CONSTRAINT "Company_calendarId_fkey" FOREIGN KEY ("calendarId") REFERENCES "Calendar"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Meeting" ADD CONSTRAINT "Meeting_calendarId_fkey" FOREIGN KEY ("calendarId") REFERENCES "Calendar"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_calendarId_fkey" FOREIGN KEY ("calendarId") REFERENCES "Calendar"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_statusId_fkey" FOREIGN KEY ("statusId") REFERENCES "Status"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserProject" ADD CONSTRAINT "UserProject_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
