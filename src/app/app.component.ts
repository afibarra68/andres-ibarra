import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  card:any;

  constructor() {
    this.card = document.querySelector('.card');

  }

  rotate():void{
        this.card.classList.add(this.card,'rotate')
  }

  title = 'andres-ibarra';
}
