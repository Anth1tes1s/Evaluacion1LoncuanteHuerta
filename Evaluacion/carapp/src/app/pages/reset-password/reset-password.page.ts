import { AfterViewInit, Component, ElementRef, OnInit, ViewChild  } from '@angular/core';
import { AnimationController, IonTitle } from '@ionic/angular';
import { AuthService } from '../validacion/auth.service'; // Importar el servicio
import { NavController } from '@ionic/angular'; // Para la navegación entre páginas

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit, AfterViewInit {
  @ViewChild(IonTitle, { read: ElementRef})
  ionTitleRef!: ElementRef<HTMLIonTitleElement>
  username: string = '';
  password: string | null = ''; // Variable para almacenar la contraseña recuperada

  constructor(
    private authService: AuthService,
    private navCtrl: NavController,
    private animationController: AnimationController
  ) {}

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

  // Método para obtener la contraseña
  retrievePassword() {
    this.password = this.authService.getPassword(this.username);
  }

  // Método para volver al login
  goToLogin() {
    this.navCtrl.navigateBack('/login');
  }
}
