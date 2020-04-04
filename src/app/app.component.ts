import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'angular-bootcamp-pw';
  private password = '';

  onButtonClick() {
    //console.log('Button was clicked');
    this.password = "MY PASSWORD!!!"
  }

  getPassword() {
    return this.password;
  }
}
