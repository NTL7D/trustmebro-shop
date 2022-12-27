/*
  Warnings:

  - You are about to drop the column `orderId` on the `cart` table. All the data in the column will be lost.
  - You are about to drop the `payment` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `updateAt` to the `Cart` table without a default value. This is not possible if the table is not empty.
  - Made the column `userId` on table `cart` required. This step will fail if there are existing NULL values in that column.

*/
-- DropIndex
DROP INDEX `Cart_orderId_idx` ON `cart`;

-- AlterTable
ALTER TABLE `cart` DROP COLUMN `orderId`,
    ADD COLUMN `createAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updateAt` DATETIME(3) NOT NULL,
    MODIFY `userId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `order` ADD COLUMN `cartId` INTEGER NULL,
    ALTER COLUMN `quantity` DROP DEFAULT;

-- DropTable
DROP TABLE `payment`;

-- CreateIndex
CREATE INDEX `Order_cartId_idx` ON `Order`(`cartId`);
