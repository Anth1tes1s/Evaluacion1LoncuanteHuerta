import { AfterViewInit, Component, ElementRef, OnInit, ViewChild  } from '@angular/core';
import { AnimationController, IonTitle, ToastController, NavController} from '@ionic/angular';
import { NavigationExtras, Router } from '@angular/router';
import { AuthService } from '../validacion/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit, AfterViewInit {
  @ViewChild(IonTitle, { read: ElementRef})
  ionTitleRef!: ElementRef<HTMLIonTitleElement>
  username: string = '';
  password: string = '';

  constructor(
    private toastController: ToastController,
    private navCtrl: NavController,
    private animationController: AnimationController,
    private router: Router,
    private loginService: AuthService
  ) {
    this.username = ':v'
    this.password = '';
   }
  ngOnInit() {
  }
  ngAfterViewInit(): void {
    this.tituloanimacion();
  }
  tituloanimacion(){
    this.animationController
      .create()
      .addElement(this.ionTitleRef.nativeElement)
      .duration(1600)
      .fromTo('transform', 'scale(0.2)', 'scale(1)')
      .fromTo('color', 'white', '#477DFF')
      .fromTo('opacity', '0.2', '1')
      .play()
  }

  // Método para validar el login (mantén el código de validación aquí)
  async validateUser(){
    console.log("Ejecutando validacion PAGE!")

    if (this.loginService.validateUser(this.username, this.password)) {
      this.mensaje('Usuario correcto', 'success')
      const extras: NavigationExtras = {
        state: {
          username: this.username
        }
      }

      this.router.navigate(['/inicio'], extras)
    } else {
      this.mensaje('Usuario incorrecto', 'danger')
    }
  }
   // Mensaje ajustes
  async mensaje(message: string, color: string){
    const toast = await this.toastController.create({
      duration: 3000,
      message: message,
      position: 'bottom',
      color: color
    });
    toast.present();
  }
    

  // Método para redirigir al "Recuperar Contraseña"
  goToResetPassword() {
    this.navCtrl.navigateForward('/reset-password');
  }
}
