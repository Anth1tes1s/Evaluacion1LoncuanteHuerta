import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Datos pre-creados del usuario
  private user = {
    username: 'elpapu',
    password: '123'
  };

  constructor() { }

  // Método para validar el usuario
  validateUser(username: string, password: string): boolean {
    return this.user.username === username && this.user.password === password;
  }

  // Método para obtener la contraseña asociada al nombre de usuario
  getPassword(username: string): string | null {
    if (this.user.username === username) {
      return this.user.password;
    }
    return null;
  }
}
