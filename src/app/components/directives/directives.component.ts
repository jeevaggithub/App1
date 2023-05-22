import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {

  btnToggled=false;
  log:any=[];
  numOfToggle=0;
  constructor() { }


  ngOnInit(): void {
  }

  onToggle(){
    // this.btnToggled=true;
    this.btnToggled=!this.btnToggled;

    this.log.push(this.log.length + 1);
    console.log(this.log);
  }

}
