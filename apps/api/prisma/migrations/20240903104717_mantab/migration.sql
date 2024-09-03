/*
  Warnings:

  - You are about to drop the column `categoryId` on the `Products` table. All the data in the column will be lost.
  - You are about to drop the column `storeId` on the `Products` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `Products` DROP FOREIGN KEY `Products_categoryId_fkey`;

-- DropForeignKey
ALTER TABLE `Products` DROP FOREIGN KEY `Products_storeId_fkey`;

-- AlterTable
ALTER TABLE `Products` DROP COLUMN `categoryId`,
    DROP COLUMN `storeId`;

-- CreateTable
CREATE TABLE `_ProductsToStore` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_ProductsToStore_AB_unique`(`A`, `B`),
    INDEX `_ProductsToStore_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_CategoryToProducts` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_CategoryToProducts_AB_unique`(`A`, `B`),
    INDEX `_CategoryToProducts_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_ProductsToStore` ADD CONSTRAINT `_ProductsToStore_A_fkey` FOREIGN KEY (`A`) REFERENCES `Products`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ProductsToStore` ADD CONSTRAINT `_ProductsToStore_B_fkey` FOREIGN KEY (`B`) REFERENCES `Store`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_CategoryToProducts` ADD CONSTRAINT `_CategoryToProducts_A_fkey` FOREIGN KEY (`A`) REFERENCES `Category`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_CategoryToProducts` ADD CONSTRAINT `_CategoryToProducts_B_fkey` FOREIGN KEY (`B`) REFERENCES `Products`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
