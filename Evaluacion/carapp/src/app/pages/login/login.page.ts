import { Component } from '@angular/core';
import { NavController } from '@ionic/angular'; // Para la navegación

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  username: string = '';
  password: string = '';

  constructor(private navCtrl: NavController) { }

  // Método para validar el login (mantén el código de validación aquí)
  validateLogin() {
    // Código de validación de usuario...
  }

  // Método para redirigir al "Recuperar Contraseña"
  goToResetPassword() {
    this.navCtrl.navigateForward('/reset-password');
  }
}
