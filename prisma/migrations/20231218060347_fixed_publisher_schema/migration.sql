/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Publisher` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `Publisher` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[phone]` on the table `Publisher` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Publisher_name_key` ON `Publisher`(`name`);

-- CreateIndex
CREATE UNIQUE INDEX `Publisher_email_key` ON `Publisher`(`email`);

-- CreateIndex
CREATE UNIQUE INDEX `Publisher_phone_key` ON `Publisher`(`phone`);
