import { Component, ViewChild } from '@angular/core';
import {NgForm} from "@angular/forms"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TemplateDrivenForm';
  defaultCountry = "kenya"
  defaultGender = "Male"
  firstname!:string;
  gender=[
    {id:"1",value:"Male"},
    {id:"2",value:"Female"}

  ]
  @ViewChild('myForm') form!: NgForm ;

  onSubmit(){
    console.log(this.form);
    
  }
}
