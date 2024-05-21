/*
  Warnings:

  - You are about to drop the column `eventParticipantId` on the `EventComment` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "EventComment" DROP CONSTRAINT "EventComment_eventParticipantId_fkey";

-- AlterTable
ALTER TABLE "Event" ADD COLUMN     "communiCalenderId" TEXT,
ADD COLUMN     "userCalenderId" TEXT;

-- AlterTable
ALTER TABLE "EventComment" DROP COLUMN "eventParticipantId";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "mergedCalendarId" INTEGER;

-- CreateTable
CREATE TABLE "UserCalender" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "mergedCalendarId" INTEGER,

    CONSTRAINT "UserCalender_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CommunityCalender" (
    "id" TEXT NOT NULL,
    "communityId" TEXT NOT NULL,
    "mergedCalendarId" INTEGER,

    CONSTRAINT "CommunityCalender_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MergedCalendar" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "MergedCalendar_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_mergedCalendarId_fkey" FOREIGN KEY ("mergedCalendarId") REFERENCES "MergedCalendar"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_userCalenderId_fkey" FOREIGN KEY ("userCalenderId") REFERENCES "UserCalender"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_communiCalenderId_fkey" FOREIGN KEY ("communiCalenderId") REFERENCES "CommunityCalender"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserCalender" ADD CONSTRAINT "UserCalender_mergedCalendarId_fkey" FOREIGN KEY ("mergedCalendarId") REFERENCES "MergedCalendar"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CommunityCalender" ADD CONSTRAINT "CommunityCalender_mergedCalendarId_fkey" FOREIGN KEY ("mergedCalendarId") REFERENCES "MergedCalendar"("id") ON DELETE SET NULL ON UPDATE CASCADE;
