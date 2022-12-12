/*
  Warnings:

  - You are about to drop the column `image` on the `product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `product` DROP COLUMN `image`,
    ADD COLUMN `uploadId` INTEGER NULL;

-- CreateIndex
CREATE INDEX `Product_uploadId_idx` ON `Product`(`uploadId`);
