import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-talk',
  templateUrl: './talk.component.html',
  styleUrls: ['./talk.component.scss']
})
export class TalkComponent implements OnInit {
  
  conversation: any;

  constructor() { }

  ngOnInit() {
    
    this.conversation = [
      
      {
        mensagem:"Oiii como vc ta?",
        class:"question",
        time: new Date().toTimeString().split(" ")[0]
      },
      {
        mensagem:"Estou bem e vc?",
        class:"answer",
        time: new Date().toTimeString().split(" ")[0]
      },
      {
        mensagem:"to bem tbm",
        class:"question",
        time: new Date().toTimeString().split(" ")[0]
      },
      {
        mensagem:"bora lolzim?",
        class:"answer",
        time: new Date().toTimeString().split(" ")[0]
      },
      {
        mensagem:"bora",
        class:"question",
        time: new Date().toTimeString().split(" ")[0]
      },
      {
        mensagem:"ta on já?",
        class:"question",
        time: new Date().toTimeString().split(" ")[0]
      }
    
    ]
  
  }

}
