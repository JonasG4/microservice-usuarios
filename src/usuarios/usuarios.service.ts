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
        id_persona_natural: true,
        usuario: true,
        correo_electronico: true,
        clave: false,
        estado: true,
        PersonaNatural: {
          select: {
            nombres: true,
            apellidos: true,
            dui: true,
            genero: true,
          },
        },
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

  async findOne(id: number): Promise<any> {
    return await this.model.usuarios.findFirst({
      where: {
        id_usuario: id,
      },
      select: {
        id_usuario: true,
        usuario: true,
        correo_electronico: true,
        PersonaNatural: {
          select: {
            nombres: true,
            apellidos: true,
            dui: true,
            genero: true,
          },
        },
        Rol: {
          select: {
            id_rol: true,
            nombre: true,
          },
        },
        clave: false,
        estado: true,
        creado_en: true,
        modificado_en: true,
      },
    });
  }

  async update(id: number, usuario: Prisma.usuariosUpdateInput): Promise<any> {
    return await this.model.usuarios.update({
      where: {
        id_usuario: id,
      },
      data: usuario,
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

  async findByEmail(email: string) {
    return await this.model.usuarios.findFirst({
      where: {
        correo_electronico: email,
      },
      include: {
        Rol: true,
        PersonaNatural: true,
      },
    });
  }

  async findByUsername(username: string) {
    return await this.model.usuarios.findFirst({
      where: {
        usuario: username,
      },
      include: {
        Rol: true,
        PersonaNatural: true,
      },
    });
  }
}
