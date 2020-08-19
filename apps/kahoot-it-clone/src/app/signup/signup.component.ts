import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';

import { User } from '@kahoot-it-clone/shared-types';

import { AuthService } from '../auth-service/auth.service';

@Component({
  selector: 'kahoot-it-clone-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  signUpForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.signUpForm = this.fb.group({
      username: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8)
      ])
    });
  }

  async onSubmit() {
    const user: User = this.signUpForm.value;
    await this.authService.createUser(user);
  }
}
