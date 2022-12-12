/*
  Warnings:

  - You are about to drop the column `productId` on the `upload` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `Upload_productId_idx` ON `upload`;

-- AlterTable
ALTER TABLE `product` ADD COLUMN `uploadId` INTEGER NULL;

-- AlterTable
ALTER TABLE `upload` DROP COLUMN `productId`;

-- CreateIndex
CREATE INDEX `Product_uploadId_idx` ON `Product`(`uploadId`);
