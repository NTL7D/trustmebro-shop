/*
  Warnings:

  - You are about to drop the column `createAt` on the `cart` table. All the data in the column will be lost.
  - You are about to drop the column `orderId` on the `cart` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `cart` table. All the data in the column will be lost.
  - You are about to drop the column `productsId` on the `cart` table. All the data in the column will be lost.
  - You are about to drop the column `quantity` on the `cart` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `cart` table. All the data in the column will be lost.
  - You are about to drop the `order` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropIndex
DROP INDEX `Cart_orderId_idx` ON `cart`;

-- DropIndex
DROP INDEX `Cart_productsId_idx` ON `cart`;

-- AlterTable
ALTER TABLE `cart` DROP COLUMN `createAt`,
    DROP COLUMN `orderId`,
    DROP COLUMN `price`,
    DROP COLUMN `productsId`,
    DROP COLUMN `quantity`,
    DROP COLUMN `updatedAt`;

-- DropTable
DROP TABLE `order`;

-- CreateTable
CREATE TABLE `CartDetail` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `cartId` INTEGER NULL,
    `productsId` INTEGER NULL,
    `quantity` INTEGER NOT NULL,
    `price` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updateAt` DATETIME(3) NOT NULL,

    INDEX `CartDetail_cartId_idx`(`cartId`),
    INDEX `CartDetail_productsId_idx`(`productsId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Payment` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `cartId` INTEGER NULL,
    `status` BOOLEAN NOT NULL DEFAULT false,
    `userId` INTEGER NULL,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `adress` VARCHAR(191) NOT NULL,
    `total` INTEGER NOT NULL,
    `createAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `Payment_cartId_idx`(`cartId`),
    INDEX `Payment_userId_idx`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
