import { Component } from '@angular/core';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css']
})
export class JoinComponent {

  userType: string = '';
  buttonText: string = 'Continue';
  isButtonDisabled: boolean = true;

  updateButtonText() {
    if (this.userType === 'client') {
      this.buttonText = "Join as Client";
    } else if (this.userType === 'freelancer') {
      this.buttonText = "Join as Freelancer";
    }
    this.isButtonDisabled = false; // Enable button once a radio button is selected
  }

}
