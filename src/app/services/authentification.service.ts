import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from 'angular-jwt';



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
  decodeToken(token: string){
    let jwtHelper= new JwtHelperService();
    return jwtHelper.decodeToken(token).roles;
  }
  saveToken(jwt:string){
    localStorage.setItem('token', jwt);
    this.roles=this.decodeToken(jwt);
    console.log(this.roles);
  }
  loadToken(){
   this.jwtToken= localStorage.getItem('token');
  }
  getTask(){
    if(this.jwtToken==null) this.loadToken()
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

