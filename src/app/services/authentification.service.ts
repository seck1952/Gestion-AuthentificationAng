import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { JwtHelper } from 'angular2-jwt';


@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  private host:string="http://localhost:8081";
  private jwtToken=null;
  private roles:Array<any>;
  constructor(private http: HttpClient) { }
  login(user){
    return this.http.post(this.host+"/login",user,{observe:'response'});

  }
  saveToken(jwt:string){
    localStorage.setItem('token', jwt);
   // let jwtHelper = new JwtHelper();
   // this.roles=jwtHelper.decodeToken(this.jwtToken).roles;
    //let jwtHelper=new JwtHelper();
   // this.roles=jwtHelper.decodeToken(this.jwtToken).roles;
  }
  loadToken(){
   this.jwtToken= localStorage.getItem('token');

  }
  getTask(){
    if(this.jwtToken==null) this.loadToken()
    //console.log("voilaaaaa"+this.jwtToken);

    return this.http.get(this.host+"/liste",
    {headers:new HttpHeaders({'Authorization':this.jwtToken})});
  }
  logout(){
    this.jwtToken==null;
    localStorage.removeItem('token');
  }
  isAadmin(){
   for(let r of this.roles){
     if(r.authority=='ADMIN') return true;
   }
   return false;
  }

}

