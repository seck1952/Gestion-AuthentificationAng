import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  tasks;

  constructor(public auth: AuthentificationService,private router: Router) { }

  ngOnInit() {
    this.Tasks();
  }
  Tasks(){
    this.auth.getTask().subscribe(data=>{
      this.tasks=data;
      console.log(data);

    },error=>{
     this.router.navigateByUrl('/login');
     console.log("donnees non chargees");
      console.log(error);

    })
  }
  newTask(){
    this.router.navigateByUrl("/new-task");
  }

}
