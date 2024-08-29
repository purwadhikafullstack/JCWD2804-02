/*
  Warnings:

  - You are about to drop the column `superAdminId` on the `Store` table. All the data in the column will be lost.
  - You are about to drop the column `superAdminId` on the `StoreAdmin` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `Store` DROP FOREIGN KEY `Store_superAdminId_fkey`;

-- DropForeignKey
ALTER TABLE `StoreAdmin` DROP FOREIGN KEY `StoreAdmin_superAdminId_fkey`;

-- AlterTable
ALTER TABLE `Store` DROP COLUMN `superAdminId`;

-- AlterTable
ALTER TABLE `StoreAdmin` DROP COLUMN `superAdminId`;
