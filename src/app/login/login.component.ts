import { Router } from '@angular/router'
import { AuthService } from './../auth.service'
import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [],
})
export class LoginComponent implements OnInit {
  message: string = 'Vous êtes déconnecté. (pikachu/pikachu)'
  name: string = ''
  password: string = ''
  auth: AuthService = new AuthService();
  constructor(public authService: AuthService, private router: Router) {}

  // Informe l'utilisateur sur son authentfication.
  setMessage() {
    this.message = this.authService.isLoggedIn
      ? 'Vous êtes connecté.'
      : 'Identifiant ou mot de passe incorrect.'
  }
  ngOnInit(): void {
    this.auth = this.authService
  }
  // Connecte l'utilisateur auprès du Guard
  login() {
    this.message = 'Tentative de connexion en cours ...'
    this.authService.login(this.name, this.password).subscribe(() => {
      this.setMessage()
      if (this.authService.isLoggedIn) {
        // Récupère l'URL de redirection depuis le service d'authentification
        // Si aucune redirection n'a été définis, redirige l'utilisateur vers la liste des pokemons.
        let redirect = this.authService.redirectUrl
          ? this.authService.redirectUrl
          : '/pokemons'
        // Redirige l'utilisateur
        this.router.navigate([redirect])
      } else {
        this.password = ''
      }
    })
  }

  // Déconnecte l'utilisateur
  logout() {
    this.authService.logout()
    this.setMessage()
  }
}
