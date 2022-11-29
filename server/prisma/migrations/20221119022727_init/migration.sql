/*
  Warnings:

  - You are about to drop the column `productId` on the `category` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `category` DROP FOREIGN KEY `Category_productId_fkey`;

-- AlterTable
ALTER TABLE `category` DROP COLUMN `productId`;

-- AlterTable
ALTER TABLE `product` ADD COLUMN `categoryId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Product` ADD CONSTRAINT `Product_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `Category`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
