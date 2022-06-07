import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from './services/authentification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'apprendre';
  constructor(private auth:AuthentificationService,private router:Router){}
  onLogout(){
    this.auth.logout();
    this.router.navigateByUrl("/login");

  }
}
