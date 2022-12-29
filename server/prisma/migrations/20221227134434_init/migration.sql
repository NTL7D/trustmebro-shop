/*
  Warnings:

  - You are about to drop the `order` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `quantity` to the `Cart` table without a default value. This is not possible if the table is not empty.
  - Added the required column `total` to the `Cart` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `cart` ADD COLUMN `productsId` INTEGER NULL,
    ADD COLUMN `quantity` INTEGER NOT NULL,
    ADD COLUMN `total` INTEGER NOT NULL;

-- DropTable
DROP TABLE `order`;

-- CreateIndex
CREATE INDEX `Cart_productsId_idx` ON `Cart`(`productsId`);
