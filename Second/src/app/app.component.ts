import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div style="text-align:center">
  <h1>
   {{ title }}
  </h1>
  <h1>
   {{ name }}
  </h1>
  <input type="text">
  </div>
  <div style="text-align:center">
  <app-marv-comp></app-marv-comp>
  </div>
  `
,
  styles: [`input
  {
      background-color: blue
  }./app.component.css`]
})
export class AppComponent {
  title = 'Marvellous Infosystems';

  name:string = 'String Interpolation';
}
