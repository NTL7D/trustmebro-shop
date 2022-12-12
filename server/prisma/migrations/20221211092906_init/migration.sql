/*
  Warnings:

  - You are about to drop the column `uploadId` on the `product` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[imageId]` on the table `Product` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX `Product_uploadId_idx` ON `product`;

-- AlterTable
ALTER TABLE `product` DROP COLUMN `uploadId`,
    ADD COLUMN `imageId` INTEGER NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Product_imageId_key` ON `Product`(`imageId`);
