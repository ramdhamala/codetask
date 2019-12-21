import { Component ,OnInit} from '@angular/core';

import {Injectable} from '@angular/core';
import {ListUserserviceService} from '../app/list-userservice.service';
import { unusedValueExportToPlacateAjd } from '@angular/core/src/render3/interfaces/container';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'task-ram';
  data: [];
  data1:any;

  constructor(private listservice:ListUserserviceService) { }

  ngOnInit() {
   this.getdata();
   this.userdata();

  }

  getdata(){
    this.listservice.getUsers().subscribe(users=>{
     this.data=users
     console.log(this.data);
    })

  }
  userdata(){
    this.listservice.getsingleuser().subscribe(users=>{
      this.data1=users
      console.log(this.data1);
     })
  }

  }


