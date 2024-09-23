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
    const element = document.getElementById('a');
    if(element){
    this.animationController
      .create()
      .addElement(element)
      .duration(2000)
      .keyframes([
        { offset: 0, transform: 'scale(1)', opacity: '1', color: 'white'},
        { offset: 0.5, transform: 'scale(0.6)', opacity: '0.1' },
        { offset: 1, transform: 'scale(1)', opacity: '1', color: '#477DFF' },
      ])
      .play()
    }
  }
}