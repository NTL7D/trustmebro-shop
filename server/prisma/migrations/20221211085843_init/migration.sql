-- DropIndex
DROP INDEX `Product_uploadId_key` ON `product`;

-- CreateIndex
CREATE INDEX `Product_uploadId_idx` ON `Product`(`uploadId`);
