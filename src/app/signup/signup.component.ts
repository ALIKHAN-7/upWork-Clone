import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  signUpForm!: FormGroup;
  countries = ['India', 'USA', 'Canada', 'UK']; // You can add more options

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.signUpForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      country: ['India', Validators.required],
      emailUpdates: [true],
      termsAccepted: [false, Validators.requiredTrue]
    });
  }

  onSubmit() {
    if (this.signUpForm.valid) {
      console.log('Form Submitted', this.signUpForm.value);
    } else {
      console.log('Form is not valid');
    }
  }
}
