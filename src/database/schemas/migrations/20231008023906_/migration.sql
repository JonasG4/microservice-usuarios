/*
  Warnings:

  - You are about to drop the column `id_persona_natural` on the `jrv_miembros` table. All the data in the column will be lost.
  - Added the required column `id_persona_natural` to the `usuarios` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_rol` to the `usuarios` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `jrv_miembros` DROP FOREIGN KEY `jrv_miembros_id_persona_natural_fkey`;

-- AlterTable
ALTER TABLE `jrv_miembros` DROP COLUMN `id_persona_natural`;

-- AlterTable
ALTER TABLE `personas_naturales` MODIFY `fecha_nacimiento` DATE NOT NULL;

-- AlterTable
ALTER TABLE `usuarios` ADD COLUMN `id_persona_natural` INTEGER NOT NULL,
    ADD COLUMN `id_rol` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `usuarios` ADD CONSTRAINT `usuarios_id_persona_natural_fkey` FOREIGN KEY (`id_persona_natural`) REFERENCES `personas_naturales`(`id_persona_natural`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `usuarios` ADD CONSTRAINT `usuarios_id_rol_fkey` FOREIGN KEY (`id_rol`) REFERENCES `roles`(`id_rol`) ON DELETE RESTRICT ON UPDATE CASCADE;
