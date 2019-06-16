import { Component, AfterViewInit } from '@angular/core';
@Component({
  templateUrl: './starter.component.html'
})
export class StarterComponent implements AfterViewInit {
  msg_smp: any;

  
  constructor() {
    this.msg_smp = 'Oi como vai você';
    
  }


  ngAfterViewInit() {}
}
