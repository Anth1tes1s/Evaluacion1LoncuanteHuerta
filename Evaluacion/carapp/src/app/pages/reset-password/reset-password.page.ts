import { Component } from '@angular/core';
import { AuthService } from '../auth.service';  // Asegúrate de que la ruta sea correcta
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage {
  email!: string;
  nuevaContraseña!: string;
  codigoEnviado = false;

  constructor(
    private authService: AuthService,
    private alertController: AlertController
  ) {}

  async enviarSolicitud() {
    const usuarioExiste = this.authService.usuarioRegistrado(this.email);
    
    if (usuarioExiste) {
      const alert = await this.alertController.create({
        header: 'Éxito',
        message: 'Se ha enviado una solicitud para restablecer la contraseña. Ingresa tu nueva contraseña.',
        buttons: ['OK']
      });
      await alert.present();
      this.codigoEnviado = true; 
    } else {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'El correo ingresado no está registrado.',
        buttons: ['OK']
      });
      await alert.present();
    }
  }

  async cambiarContraseña() {
    
    const exito = this.authService.registrarUsuario(this.email, this.nuevaContraseña); 

    if (exito) {
      const alert = await this.alertController.create({
        header: 'Éxito',
        message: 'Tu contraseña ha sido actualizada correctamente.',
        buttons: ['OK']
      });
      await alert.present();
      this.codigoEnviado = false; 
    } else {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'No se pudo cambiar la contraseña. Intenta nuevamente.',
        buttons: ['OK']
      });
      await alert.present();
    }
  }
}
