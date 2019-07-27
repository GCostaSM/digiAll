import { Component, AfterViewInit, ModuleWithComponentFactories } from '@angular/core';
import * as moment from 'moment';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './starter.component.html'
})

export class StarterComponent implements AfterViewInit {
  msg_smp: any;
  pageInfo:any;
  url:any;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title
  ) {

    this.url = this.router.url;
    let urlArr = this.url.toString().replace("(","").replace(")","").split("/");
    let paramFriendChat = urlArr[urlArr.length-1];

    let obj = {"bianca":[
      {
      mensagem:'Oi como vai você',
      data: moment.now()
      },  
      {
        mensagem:'',
        data: moment.now()
      },
      {
        mensagem:'Fala Comigo',
        data: moment.now()
      },
      {
        mensagem:'Nossa vou te dar uma Skin',
        data: moment.now()
      }
    ],
    "jose":[
      {
        mensagem:'Fala José',
        data: moment.now()
        },  
        {
          mensagem:'Seu Linda',
          data: moment.now()
        },
        {
          mensagem:'Tudo Tranks?',
          data: moment.now()
        },
        {
          mensagem:'=)',
          data: moment.now()
        }
    ]}


    if(paramFriendChat == 'Bianca'){
      this.msg_smp = obj.bianca;
    }else{
      this.msg_smp = obj.jose;
    }      
    
  }


  ngAfterViewInit() {}
}
