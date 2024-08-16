/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `StoreAdmin` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `SuperAdmin` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `storeadmin` MODIFY `email` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `superadmin` MODIFY `email` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `user` MODIFY `email` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `StoreAdmin_email_key` ON `StoreAdmin`(`email`);

-- CreateIndex
CREATE UNIQUE INDEX `SuperAdmin_email_key` ON `SuperAdmin`(`email`);

-- CreateIndex
CREATE UNIQUE INDEX `User_email_key` ON `User`(`email`);
