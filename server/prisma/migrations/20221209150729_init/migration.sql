/*
  Warnings:

  - Added the required column `publicId` to the `Upload` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `upload` ADD COLUMN `publicId` VARCHAR(191) NOT NULL;
