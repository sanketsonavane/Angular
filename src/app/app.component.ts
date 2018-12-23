import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  str:string=''
  str2:string=''
fun(){
  this.str= "Marvellous Infosystems !"
}
disp(){
  this.str2=  "Educating for Better tomorrow !"
}
}
