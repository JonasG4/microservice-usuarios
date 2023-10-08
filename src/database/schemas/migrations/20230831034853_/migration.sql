/*
  Warnings:

  - You are about to drop the `jrv_centro_votacion` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `id_centro_votacion` to the `junta_receptora_votos` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `jrv_centro_votacion` DROP FOREIGN KEY `jrv_centro_votacion_id_centro_votacion_fkey`;

-- DropForeignKey
ALTER TABLE `jrv_centro_votacion` DROP FOREIGN KEY `jrv_centro_votacion_id_jrv_fkey`;

-- AlterTable
ALTER TABLE `junta_receptora_votos` ADD COLUMN `id_centro_votacion` INTEGER NOT NULL;

-- DropTable
DROP TABLE `jrv_centro_votacion`;

-- AddForeignKey
ALTER TABLE `junta_receptora_votos` ADD CONSTRAINT `junta_receptora_votos_id_centro_votacion_fkey` FOREIGN KEY (`id_centro_votacion`) REFERENCES `centros_votacion`(`id_centro_votacion`) ON DELETE RESTRICT ON UPDATE CASCADE;
