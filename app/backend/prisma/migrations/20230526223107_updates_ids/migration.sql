/*
  Warnings:

  - The primary key for the `PointParameters` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `pointParameterId` on the `PointParameters` table. All the data in the column will be lost.
  - Added the required column `id` to the `PointParameters` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `PointParameters` DROP PRIMARY KEY,
    DROP COLUMN `pointParameterId`,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);
