/*
  Warnings:

  - You are about to drop the column `uploadId` on the `product` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `Product_uploadId_idx` ON `product`;

-- AlterTable
ALTER TABLE `product` DROP COLUMN `uploadId`;

-- AlterTable
ALTER TABLE `upload` ADD COLUMN `productId` INTEGER NULL;

-- CreateIndex
CREATE INDEX `Upload_productId_idx` ON `Upload`(`productId`);
