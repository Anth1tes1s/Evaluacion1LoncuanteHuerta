import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usuariosRegistrados = [
    { email: 'usuario1@example.com', password: '123456' },
    { email: 'usuario2@example.com', password: 'abcdef' }
  ];

  constructor() { }

  verificarUsuario(email: string, password: string): boolean {
    return this.usuariosRegistrados.some(
      usuario => usuario.email === email && usuario.password === password
    );
  }

  usuarioRegistrado(email: string): string {
    const existe = this.usuariosRegistrados.some(usuario => usuario.email === email);
    return existe ? 'El usuario ya está registrado.' : 'El usuario no está registrado.';
  }

  registrarUsuario(email: string, password: string): boolean {
    const existe = this.usuariosRegistrados.some(usuario => usuario.email === email);
    if (!existe) {
      this.usuariosRegistrados.push({ email, password });
      return true;
    }
    return false;
  }

  recuperarPassword(email: string): boolean {
    return this.usuariosRegistrados.some(usuario => usuario.email === email);
  }
}
