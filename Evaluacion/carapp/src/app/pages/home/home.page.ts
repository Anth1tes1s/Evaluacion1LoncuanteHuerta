import { AfterViewInit, Component, ElementRef, OnInit, ViewChild  } from '@angular/core';
import { AnimationController, IonTitle } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit, AfterViewInit {
  @ViewChild(IonTitle, { read: ElementRef})
  ionTitleRef!: ElementRef<HTMLIonTitleElement>

  constructor(
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
      .duration(1500)
      .fromTo('transform', 'scale(0.3)', 'scale(1.2)')
      .fromTo('color', 'white', '#477DFF')
      .fromTo('opacity', '0.2', '1')
      .play()
  }
}
