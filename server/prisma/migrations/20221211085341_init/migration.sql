/*
  Warnings:

  - A unique constraint covering the columns `[uploadId]` on the table `Product` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `product` ADD COLUMN `uploadId` INTEGER NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Product_uploadId_key` ON `Product`(`uploadId`);
