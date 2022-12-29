/*
  Warnings:

  - You are about to drop the column `adress` on the `cart` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `cart` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `cart` table. All the data in the column will be lost.
  - You are about to drop the column `total` on the `cart` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `cart` DROP COLUMN `adress`,
    DROP COLUMN `email`,
    DROP COLUMN `name`,
    DROP COLUMN `total`,
    ADD COLUMN `status` BOOLEAN NOT NULL DEFAULT false;

-- CreateTable
CREATE TABLE `Payment` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `adress` VARCHAR(255) NOT NULL,
    `total` INTEGER NOT NULL,
    `cartId` INTEGER NOT NULL,

    UNIQUE INDEX `Payment_cartId_key`(`cartId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
