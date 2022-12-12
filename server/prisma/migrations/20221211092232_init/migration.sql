/*
  Warnings:

  - You are about to drop the column `categoryId` on the `product` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `Product_categoryId_idx` ON `product`;

-- AlterTable
ALTER TABLE `category` ADD COLUMN `productId` INTEGER NULL;

-- AlterTable
ALTER TABLE `product` DROP COLUMN `categoryId`;

-- CreateIndex
CREATE INDEX `Category_productId_idx` ON `Category`(`productId`);
