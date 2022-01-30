import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  myModal = true;
  texto: string;

  constructor() {}

  cerrarModal(e) {
    this.myModal = e;
  }

}
