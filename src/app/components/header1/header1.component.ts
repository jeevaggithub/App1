import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header1',
  templateUrl: './header1.component.html',
  styleUrls: ['./header1.component.scss']
})

export class Header1Component implements OnInit {

  username = '';

  userinput = this.username;

  typed : boolean=false;


  constructor() { }

  ngOnInit(): void {
    console.log('this.typed oninit',this.typed);

  }

  onTyping(){
    console.log('this.userinput.length>0',this.userinput.length);
    if (this.userinput.length>0) {
      this.typed=true;
      console.log('this.typed if',this.typed);
    }
    else{
      this.typed=false;
      console.log('this.typed else',this.typed);

    }
  }

  onClick(){
    this.userinput='';
  }


}
