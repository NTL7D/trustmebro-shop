/*
  Warnings:

  - You are about to drop the `cartdetail` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropIndex
DROP INDEX `Cart_userId_key` ON `cart`;

-- AlterTable
ALTER TABLE `cart` MODIFY `userId` INTEGER NULL;

-- DropTable
DROP TABLE `cartdetail`;

-- CreateTable
CREATE TABLE `Order` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `quantity` INTEGER NOT NULL,
    `price` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updateAt` DATETIME(3) NOT NULL,
    `cartId` INTEGER NULL,
    `productsId` INTEGER NULL,

    INDEX `Order_cartId_idx`(`cartId`),
    INDEX `Order_productsId_idx`(`productsId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE INDEX `Cart_userId_idx` ON `Cart`(`userId`);
