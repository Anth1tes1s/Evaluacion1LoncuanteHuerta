import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service'; // Asegúrate de que la ruta sea correcta
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email!: string;
  password!: string;

  constructor(
    private router: Router,
    private authService: AuthService, // Inyecta el AuthService
    private alertController: AlertController
  ) {}

  async login() {
    // Verifica si el usuario existe
    const usuarioExiste = this.authService.verificarUsuario(this.email, this.password);

    if (usuarioExiste) {
      const alert = await this.alertController.create({
        header: 'Éxito',
        message: 'Usuario ingresado correctamente.',
        buttons: ['OK']
      });
      await alert.present();
      this.router.navigateByUrl('/indexusuario'); // Redirige al index de usuarios
    } else {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Ingreso de datos incorrectos, inténtelo nuevamente.',
        buttons: ['OK']
      });
      await alert.present();
    }
  }
}
