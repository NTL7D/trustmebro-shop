/*
  Warnings:

  - You are about to drop the column `productsId` on the `cart` table. All the data in the column will be lost.
  - You are about to drop the column `quantity` on the `cart` table. All the data in the column will be lost.
  - You are about to drop the `payment` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `adress` to the `Cart` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `Cart` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Cart` table without a default value. This is not possible if the table is not empty.
  - Added the required column `total` to the `Cart` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updateAt` to the `Cart` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Cart_productsId_idx` ON `cart`;

-- DropIndex
DROP INDEX `Cart_userId_idx` ON `cart`;

-- AlterTable
ALTER TABLE `cart` DROP COLUMN `productsId`,
    DROP COLUMN `quantity`,
    ADD COLUMN `adress` VARCHAR(255) NOT NULL,
    ADD COLUMN `createAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `email` VARCHAR(191) NOT NULL,
    ADD COLUMN `name` VARCHAR(191) NOT NULL,
    ADD COLUMN `total` INTEGER NOT NULL,
    ADD COLUMN `updateAt` DATETIME(3) NOT NULL;

-- DropTable
DROP TABLE `payment`;

-- CreateTable
CREATE TABLE `Item` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `quantity` INTEGER NOT NULL DEFAULT 1,
    `price` INTEGER NOT NULL,
    `createAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updateAt` DATETIME(3) NOT NULL,
    `productsId` INTEGER NULL,
    `cartId` INTEGER NULL,

    INDEX `Item_productsId_idx`(`productsId`),
    INDEX `Item_cartId_idx`(`cartId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
