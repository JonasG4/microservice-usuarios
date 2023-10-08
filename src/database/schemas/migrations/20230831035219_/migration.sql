/*
  Warnings:

  - You are about to drop the column `modificado` on the `jrv_miembros` table. All the data in the column will be lost.
  - You are about to drop the column `modificado` on the `junta_receptora_votos` table. All the data in the column will be lost.
  - You are about to drop the column `modificado_en` on the `personas_naturales` table. All the data in the column will be lost.
  - You are about to drop the column `modificado` on the `roles` table. All the data in the column will be lost.
  - Added the required column `modificado_en` to the `jrv_miembros` table without a default value. This is not possible if the table is not empty.
  - Added the required column `modificado_en` to the `junta_receptora_votos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `modificado_en` to the `roles` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `jrv_miembros` DROP COLUMN `modificado`,
    ADD COLUMN `modificado_en` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `junta_receptora_votos` DROP COLUMN `modificado`,
    ADD COLUMN `modificado_en` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `personas_naturales` DROP COLUMN `modificado_en`;

-- AlterTable
ALTER TABLE `roles` DROP COLUMN `modificado`,
    ADD COLUMN `modificado_en` DATETIME(3) NOT NULL;
