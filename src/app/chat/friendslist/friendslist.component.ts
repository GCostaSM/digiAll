import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friendslist',
  templateUrl: './friendslist.component.html',
  styleUrls: ['./friendslist.component.scss']
})
export class FriendslistComponent implements OnInit {
  users: any;
  constructor() { }

  ngOnInit() {
    this.users =[
      {

      },
      
    ]
  }

}
