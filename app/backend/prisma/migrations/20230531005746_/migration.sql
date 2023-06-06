/*
  Warnings:

  - You are about to alter the column `value` on the `PointParameters` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- AlterTable
ALTER TABLE `PointParameters` MODIFY `value` INTEGER NOT NULL;
