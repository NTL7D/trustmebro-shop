/*
  Warnings:

  - A unique constraint covering the columns `[publicId]` on the table `Upload` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[url]` on the table `Upload` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Upload_publicId_key` ON `Upload`(`publicId`);

-- CreateIndex
CREATE UNIQUE INDEX `Upload_url_key` ON `Upload`(`url`);
