/*
  Warnings:

  - Added the required column `userTypeId` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "bookmarks" ADD COLUMN     "status" INTEGER NOT NULL DEFAULT 1;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "status" INTEGER NOT NULL DEFAULT 1,
ADD COLUMN     "userTypeId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "userTypes" (
    "id" SERIAL NOT NULL,
    "userType" TEXT NOT NULL,
    "status" INTEGER NOT NULL DEFAULT 1,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "userTypes_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_userTypeId_fkey" FOREIGN KEY ("userTypeId") REFERENCES "userTypes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
