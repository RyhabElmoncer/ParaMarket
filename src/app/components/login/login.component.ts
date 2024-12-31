import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginData = { email: '', password: '' };
  signupData = { firstName: '', lastName: '', email: '', password: '' };
  showSignup = false;

  constructor(private router: Router) {}

  onLogin() {
    // Logique de connexion (ici vous redirigez vers la page d'accueil)
    console.log('Login data:', this.loginData);
    this.router.navigate(['/home']);
  }

  onSignup() {
    // Logique d'inscription (ici vous redirigez vers la page d'accueil)
    console.log('Signup data:', this.signupData);
    this.router.navigate(['/home']);
  }

  toggleForm(form: string) {
    if (form === 'signup') {
      this.showSignup = true;
    } else {
      this.showSignup = false;
    }
  }
}
