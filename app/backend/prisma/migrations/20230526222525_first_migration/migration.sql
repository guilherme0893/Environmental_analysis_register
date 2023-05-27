-- CreateTable
CREATE TABLE `Points` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(200) NOT NULL,
    `xCoordinate` INTEGER NOT NULL,
    `yCoordinate` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Points_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Parameters` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `parameter` VARCHAR(200) NOT NULL,
    `unity` VARCHAR(191) NOT NULL,
    `limit` DOUBLE NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PointParameters` (
    `pointParameterId` INTEGER NOT NULL,
    `pointId` INTEGER NOT NULL,
    `parameterId` INTEGER NOT NULL,
    `value` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`pointParameterId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Parameters` ADD CONSTRAINT `Parameters_id_fkey` FOREIGN KEY (`id`) REFERENCES `Points`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PointParameters` ADD CONSTRAINT `PointParameters_parameterId_fkey` FOREIGN KEY (`parameterId`) REFERENCES `Points`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PointParameters` ADD CONSTRAINT `PointParameters_pointId_fkey` FOREIGN KEY (`pointId`) REFERENCES `Parameters`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
