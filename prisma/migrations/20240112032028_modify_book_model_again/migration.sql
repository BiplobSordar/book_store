-- DropForeignKey
ALTER TABLE `Book` DROP FOREIGN KEY `Book_publisherId_fkey`;

-- AlterTable
ALTER TABLE `Book` MODIFY `title` VARCHAR(300) NOT NULL,
    MODIFY `cover` VARCHAR(200) NULL,
    MODIFY `description` VARCHAR(1200) NULL;

-- AddForeignKey
ALTER TABLE `Book` ADD CONSTRAINT `Book_publisherId_fkey` FOREIGN KEY (`publisherId`) REFERENCES `Publisher`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
