import { AfterViewInit, Component, ElementRef, OnInit, ViewChild  } from '@angular/core';
import { AnimationController, IonTitle } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit, AfterViewInit {
  @ViewChild(IonTitle, { read: ElementRef})
  ionTitleRef!: ElementRef<HTMLIonTitleElement>

  constructor(
    private animationController: AnimationController,
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
}