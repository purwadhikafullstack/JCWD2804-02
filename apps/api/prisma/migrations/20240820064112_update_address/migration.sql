/*
  Warnings:

  - Added the required column `cityId` to the `Address` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cityName` to the `Address` table without a default value. This is not possible if the table is not empty.
  - Added the required column `postalCode` to the `Address` table without a default value. This is not possible if the table is not empty.
  - Added the required column `province` to the `Address` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `address` ADD COLUMN `cityId` INTEGER NOT NULL,
    ADD COLUMN `cityName` VARCHAR(100) NOT NULL,
    ADD COLUMN `postalCode` VARCHAR(10) NOT NULL,
    ADD COLUMN `province` VARCHAR(100) NOT NULL;
