/*
  Warnings:

  - You are about to drop the column `status` on the `user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `user` DROP COLUMN `status`,
    MODIFY `name` VARCHAR(50) NULL,
    MODIFY `address` VARCHAR(60) NULL,
    MODIFY `phone` DOUBLE NULL,
    MODIFY `role` ENUM('SUPERADMIN', 'STOREADMIN', 'USER') NULL DEFAULT 'USER';
