import { AfterViewInit, Component, ElementRef, OnInit, ViewChild  } from '@angular/core';
import { AnimationController, IonTitle } from '@ionic/angular';
import { NavController } from '@ionic/angular'; // Para la navegación

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
    private navCtrl: NavController,
    private animationController: AnimationController
  ) { }
  ngOnInit() {
  }
  ngAfterViewInit(): void {
    this.tituloanimacion();
  }
  tituloanimacion(){
    this.animationController
      .create()
      .addElement(this.ionTitleRef.nativeElement)
      .duration(2000)
      .fromTo('transform', 'scale(0.3)', 'scale(1.2)')
      .fromTo('color', 'white', '#477DFF')
      .fromTo('opacity', '0.2', '1')
      .play()
  }

  // Método para validar el login (mantén el código de validación aquí)
  validateLogin() {
    // Código de validación de usuario...
  }

  // Método para redirigir al "Recuperar Contraseña"
  goToResetPassword() {
    this.navCtrl.navigateForward('/reset-password');
  }
}

