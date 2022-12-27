/*
  Warnings:

  - You are about to drop the column `DateAdd` on the `cart` table. All the data in the column will be lost.
  - You are about to drop the `cart_items` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE `cart` DROP COLUMN `DateAdd`,
    ADD COLUMN `orderId` INTEGER NULL,
    ADD COLUMN `status` ENUM('Ordered', 'Shipped') NOT NULL DEFAULT 'Ordered',
    MODIFY `userId` INTEGER NULL;

-- DropTable
DROP TABLE `cart_items`;

-- CreateTable
CREATE TABLE `Order` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `quantity` INTEGER NOT NULL DEFAULT 1,
    `productsId` INTEGER NULL,

    INDEX `Order_productsId_idx`(`productsId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Payment` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE INDEX `Cart_orderId_idx` ON `Cart`(`orderId`);
