import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  mode:number=0;


  constructor(private auth: AuthentificationService,private router: Router) { }

  ngOnInit() {

  }
  onLogin(user){
    this.auth.login(user).subscribe(resp=>{
      let jwt= resp.headers.get('Authorization');
      console.log(jwt);

      this.auth.saveToken(jwt);
     this.router.navigateByUrl('/tasks');

    },error=>{
      this.mode=1;
      console.log(error);
    });
  }


}
