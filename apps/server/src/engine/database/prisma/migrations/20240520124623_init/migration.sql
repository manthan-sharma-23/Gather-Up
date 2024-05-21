-- AlterTable
ALTER TABLE "Community" ADD COLUMN     "communityCalenderId" TEXT;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "userCalenderId" TEXT;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_userCalenderId_fkey" FOREIGN KEY ("userCalenderId") REFERENCES "UserCalender"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Community" ADD CONSTRAINT "Community_communityCalenderId_fkey" FOREIGN KEY ("communityCalenderId") REFERENCES "CommunityCalender"("id") ON DELETE SET NULL ON UPDATE CASCADE;
