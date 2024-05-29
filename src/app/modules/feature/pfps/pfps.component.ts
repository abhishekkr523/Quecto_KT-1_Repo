import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../../services/auth-service.service';

@Component({
  selector: 'app-pfps',
  templateUrl: './pfps.component.html',
  styleUrl: './pfps.component.scss',
})
export class PfpsComponent implements OnInit {
  name: string = 'Abhishek kumar';
  viewText: string | undefined;
  getNumber:any;
  userName:string="";

// property binding
  imageUrl: string = 'https://via.placeholder.com/150';
  isDisabled: boolean = true;
  buttonText: string = 'Click Me!';
  textFromSrv=""

  constructor(private authSrv:AuthServiceService){
 
  }
  ngOnInit(): void {
    this.textFromSrv = this.authSrv.getHelloMessage();
    console.log("gg",this.textFromSrv)
  }
  getTexts(getNum:any) {
    console.log(getNum)
    this.getNumber=getNum;
  }
  



}
