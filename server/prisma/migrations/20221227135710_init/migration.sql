/*
  Warnings:

  - You are about to drop the column `total` on the `cart` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId]` on the table `Cart` will be added. If there are existing duplicate values, this will fail.
  - Made the column `userId` on table `cart` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `cart` DROP COLUMN `total`,
    MODIFY `userId` INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Cart_userId_key` ON `Cart`(`userId`);
