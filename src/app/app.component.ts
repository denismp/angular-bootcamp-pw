import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'angular-bootcamp-pw';
  private password = '';
  private includeLetters = false;
  private includeNumbers = false;
  private includeSymbols = false;

  onButtonClick() {
    //console.log('Button was clicked');
    this.password = "MY PASSWORD!!!"
  }

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }
  getPassword() {
    console.log(this.includeLetters);
    console.log(this.includeNumbers);
    console.log(this.includeSymbols);
    return this.password;
  }
}
