import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular_aula';
  hero = 'Miranha';

  ngOnInit(){
  	console.log("This is my hero: " + this.hero);
  }
}
