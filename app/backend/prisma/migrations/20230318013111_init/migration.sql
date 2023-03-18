-- CreateTable
CREATE TABLE `Points` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `name` VARCHAR(200) NOT NULL,
    `xCoordinate` INTEGER NOT NULL,
    `yCoordinate` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Parameters` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `parameter` VARCHAR(200) NOT NULL,
    `unity` VARCHAR(191) NOT NULL,
    `value` DOUBLE NOT NULL,
    `sampling` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Parameters` ADD CONSTRAINT `Parameters_id_fkey` FOREIGN KEY (`id`) REFERENCES `Points`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
