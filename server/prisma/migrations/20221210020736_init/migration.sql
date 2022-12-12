/*
  Warnings:

  - You are about to drop the column `localPath` on the `upload` table. All the data in the column will be lost.
  - You are about to drop the column `productId` on the `upload` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `Upload_productId_idx` ON `upload`;

-- AlterTable
ALTER TABLE `upload` DROP COLUMN `localPath`,
    DROP COLUMN `productId`,
    ADD COLUMN `createAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
