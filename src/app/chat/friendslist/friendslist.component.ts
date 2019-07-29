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
        username:'AnaJul',
        photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBjt90cu7CbRdMU95TIpt086BNvrA7pHMZk3XWl9knvvbpUEvD7g'
      }      
    ]
  }

}
