/*
  Warnings:

  - You are about to drop the column `updateAt` on the `cart` table. All the data in the column will be lost.
  - You are about to alter the column `status` on the `cart` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(0))` to `Enum(EnumId(1))`.
  - You are about to drop the column `cartId` on the `order` table. All the data in the column will be lost.
  - You are about to drop the column `productsId` on the `order` table. All the data in the column will be lost.
  - Added the required column `quantity` to the `Cart` table without a default value. This is not possible if the table is not empty.
  - Added the required column `total` to the `Cart` table without a default value. This is not possible if the table is not empty.
  - Added the required column `total` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Order_cartId_idx` ON `order`;

-- DropIndex
DROP INDEX `Order_productsId_idx` ON `order`;

-- AlterTable
ALTER TABLE `cart` DROP COLUMN `updateAt`,
    ADD COLUMN `orderId` INTEGER NULL,
    ADD COLUMN `productsId` INTEGER NULL,
    ADD COLUMN `quantity` INTEGER NOT NULL,
    ADD COLUMN `total` INTEGER NOT NULL,
    MODIFY `status` ENUM('cart', 'later', 'ordered', 'cancelled') NOT NULL;

-- AlterTable
ALTER TABLE `order` DROP COLUMN `cartId`,
    DROP COLUMN `productsId`,
    ADD COLUMN `createAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `total` INTEGER NOT NULL,
    ADD COLUMN `userId` INTEGER NULL;

-- CreateIndex
CREATE INDEX `Cart_productsId_idx` ON `Cart`(`productsId`);

-- CreateIndex
CREATE INDEX `Cart_orderId_idx` ON `Cart`(`orderId`);

-- CreateIndex
CREATE INDEX `Order_userId_idx` ON `Order`(`userId`);
