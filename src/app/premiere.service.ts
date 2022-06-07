import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PremiereService {

  constructor() { }
  logger(data){
    console.log(data);
  }
}
