import { Component } from '@angular/core';
import { AuthService } from '../../validacion/auth.service'; // Importar el servicio
import { NavController } from '@ionic/angular'; // Para la navegación entre páginas

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage {

  username: string = '';
  password: string | null = ''; // Variable para almacenar la contraseña recuperada

  constructor(private authService: AuthService, private navCtrl: NavController) {}

  // Método para obtener la contraseña
  retrievePassword() {
    this.password = this.authService.getPassword(this.username);
  }

  // Método para volver al login
  goToLogin() {
    this.navCtrl.navigateBack('/login');
  }
}
