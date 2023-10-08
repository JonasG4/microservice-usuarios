import { Controller } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UsuariosMSG } from 'src/common/constantes';

@Controller()
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @MessagePattern(UsuariosMSG.CREATE)
  async create(@Payload() payload: any) {
    const passwordHashed = await this.usuariosService.hashPassword(
      payload.clave,
    );
    return await this.usuariosService.create({
      ...payload,
      clave: passwordHashed,
    });
  }

  @MessagePattern(UsuariosMSG.FIND_ALL)
  async findAll() {
    return await this.usuariosService.findAll();
  }

  @MessagePattern(UsuariosMSG.FIND_ONE)
  async findOne(@Payload() id: number) {
    return await this.usuariosService.findOne(id);
  }

  @MessagePattern(UsuariosMSG.UPDATE)
  async update(@Payload() payload: any) {
    return await this.usuariosService.update(
      payload.id_usuario,
      payload.usuariosDTO,
    );
  }

  @MessagePattern(UsuariosMSG.DELETE)
  async delete(@Payload() id: number) {
    return await this.usuariosService.delete(id);
  }

  @MessagePattern(UsuariosMSG.CHANGE_PASSWORD)
  async changePassword(@Payload() payload: any) {
    const passwordHashed = await this.usuariosService.hashPassword(
      payload.clave,
    );
    return await this.usuariosService.changePassword(
      payload.id_usuario,
      passwordHashed,
    );
  }

  @MessagePattern(UsuariosMSG.FIND_BY_EMAIL)
  async findByEmail(@Payload() correo_electronico: string) {
    return await this.usuariosService.findByEmail(correo_electronico);
  }

  @MessagePattern(UsuariosMSG.FIND_BY_USERNAME)
  async findByUsername(@Payload() username: string) {
    return await this.usuariosService.findByUsername(username);
  }

  @MessagePattern(UsuariosMSG.VALIDATE_USER)
  async validateUser(@Payload() payload: any) {
    const user = await this.usuariosService.findByUsername(payload.usuario);
    if (!user) return null;

    const isMatchPassword = await this.usuariosService.validatePassword(
      payload.clave,
      user.clave,
    );

    if (user && isMatchPassword) return user;

    return null;
  }
}
