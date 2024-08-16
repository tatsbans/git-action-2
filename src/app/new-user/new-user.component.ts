import { Component, EventEmitter, Output, output, signal } from '@angular/core';
import { DatePipe} from '@angular/common'
import{FormsModule} from '@angular/forms'

import {  User } from '../user/user.component';

@Component({
  selector: 'app-new-user',
  standalone: true,
  imports: [FormsModule, DatePipe],
  templateUrl: './new-user.component.html',
  styleUrl: './new-user.component.css'
})
export class NewUserComponent {

  title=signal("hola");
  due_date=new Date((new Date()).toISOString().substring(0,10));
  summary="";
  hideLabel=true;
  selectedToo = output<boolean>();
  userAdded =output<User>();
  //@Output() selectedToo = new EventEmitter();
  onCancelClick(){
    this.hideLabel=true;
    this.selectedToo.emit(this.hideLabel);
  }

  onSubmit(){
    this.userAdded.emit(new User(this.title(), this.summary, this.due_date.toString()));
    this.hideLabel=true;
  }

}
