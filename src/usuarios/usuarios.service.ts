import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { Prisma, usuarios } from '@prisma/client';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsuariosService {
  constructor(private readonly model: PrismaService) {}

  async create(usuario: Prisma.usuariosCreateInput): Promise<usuarios> {
    return await this.model.usuarios.create({
      data: usuario,
    });
  }

  async findAll(): Promise<any[]> {
    return await this.model.usuarios.findMany({
      select: {
        id_usuario: true,
        usuario: true,
        nombres: true,
        apellidos: true,
        dui: true,
        clave: false,
        estado: true,
        Rol: {
          select: {
            id_rol: true,
            nombre: true,
          },
        },
        creado_en: true,
        modificado_en: true,
      },
    });
  }

  async findOne(id: number, includePass: boolean = false): Promise<any> {
    return await this.model.usuarios.findFirst({
      where: {
        id_usuario: id,
      },
      select: {
        id_usuario: true,
        usuario: true,
        nombres: true,
        apellidos: true,
        dui: true,
        clave: includePass,
        estado: true,
        Rol: {
          select: {
            id_rol: true,
            nombre: true,
          },
        },
        creado_en: true,
        modificado_en: true,
      },
    });
  }

  async update(id: number, usuario: any): Promise<any> {
    return await this.model.usuarios.update({
      where: {
        id_usuario: id,
      },
      data: {
        nombres: usuario.nombres,
        apellidos: usuario.apellidos,
        dui: usuario.dui,
        usuario: usuario.usuario,
        estado: usuario.estado,
        Rol: {
          connect: {
            id_rol: usuario.id_rol,
          },
        },
      },
    });
  }

  async delete(id: number) {
    return await this.model.usuarios.delete({
      where: {
        id_usuario: id,
      },
    });
  }

  async changePassword(id: number, clave: string) {
    return await this.model.usuarios.update({
      where: {
        id_usuario: id,
      },
      data: {
        clave: clave,
      },
    });
  }

  async hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(process.env.HASH_SALT);
    return await bcrypt.hash(password, salt);
  }

  async validatePassword(
    password: string,
    passwordHashed: string,
  ): Promise<boolean> {
    return await bcrypt.compare(password, passwordHashed);
  }

  async findByUsername(username: string) {
    return await this.model.usuarios.findFirst({
      where: {
        usuario: username,
      },
      select: {
        id_usuario: true,
        usuario: true,
        nombres: true,
        apellidos: true,
        dui: true,
        clave: true,
        estado: true,
        Rol: {
          select: {
            id_rol: true,
            nombre: true,
          },
        },
        creado_en: true,
        modificado_en: true,
      },
    });
  }
}
