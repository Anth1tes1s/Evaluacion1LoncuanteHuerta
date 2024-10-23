import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service'; // Asegúrate de la ruta correcta
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  nombre!: string;
  email!: string;
  password!: string;

  constructor(
    private authService: AuthService, // Inyecta el AuthService
    private router: Router,
    private alertController: AlertController
  ) { }

  ngOnInit() {}

  async register() {
    // Usa el método usuarioRegistrado para obtener el mensaje
    const mensaje = this.authService.usuarioRegistrado(this.email);

    if (mensaje === 'El usuario ya está registrado.') {
      const alert = await this.alertController.create({
        header: 'Error',
        message: mensaje,
        buttons: ['OK']
      });
      await alert.present();
    } else {
      // Registra al nuevo usuario
      this.authService.registrarUsuario(this.email, this.password);
      this.router.navigateByUrl('/indexusuario'); // Redirige al index de usuarios
    }
  }
}

