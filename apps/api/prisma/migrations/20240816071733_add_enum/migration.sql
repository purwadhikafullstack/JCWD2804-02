/*
  Warnings:

  - You are about to alter the column `email` on the `user` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(50)`.

*/
-- DropIndex
DROP INDEX `User_email_key` ON `user`;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `role` ENUM('SUPERADMIN', 'STOREADMIN', 'USER') NOT NULL DEFAULT 'USER',
    MODIFY `email` VARCHAR(50) NOT NULL;
