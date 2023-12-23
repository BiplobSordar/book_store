/*
  Warnings:

  - You are about to drop the `_AuthorToPublisher` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `_AuthorToPublisher`;

-- CreateTable
CREATE TABLE `Author_Publisher` (
    `authorId` VARCHAR(191) NOT NULL,
    `publisherId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`authorId`, `publisherId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Author_Publisher` ADD CONSTRAINT `Author_Publisher_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `Author`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Author_Publisher` ADD CONSTRAINT `Author_Publisher_publisherId_fkey` FOREIGN KEY (`publisherId`) REFERENCES `Publisher`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
