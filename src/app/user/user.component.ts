import { Component, computed, EventEmitter, input, Input, Output, signal,output } from '@angular/core';

import { DUMMY_USERS } from '../dummy-users'

const rand_count = Math.floor(Math.random()* DUMMY_USERS.length)


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

 /* @Input({required:true}) namen!:string;
  ave = input.required<string>(); //this is from signals
  //selectedUser = DUMMY_USERS[rand_count];// non signal format

  //@Output() select = new EventEmitter();
    @Output() select = new EventEmitter<string>(); //for strong type casting
  //select = output<string>();


  selectedUser = signal(DUMMY_USERS[rand_count]);
  imagePath = computed(() => 'assets/users/'+this.selectedUser().avatar )
onSelectedUser(){
  const rand_count = Math.floor(Math.random()* DUMMY_USERS.length);
  this.selectedUser.set(DUMMY_USERS[rand_count]);
}
selectUser(){
  //this.select.emit(this.ave);//for decorator as input
  this.select.emit(this.ave());//for signal as i/p
}
 /* 
 get option
 get imagePath(){
    return 'assets/users/'+this.selectedUser.avatar;
  }*/

    @Input({ required: true }) user!: User;
    @Output() select = new EventEmitter();
    @Output() selectedToo = new EventEmitter();
    rand_count = (Math.floor(Math.random()* DUMMY_USERS.length*100)).toString();
    
    get imagePath() {
      return 'assets/users/' + this.user?.avatar;
    }
  
    onSelectUser() {
      this.select.emit(this.user.id);
      this.selectedToo.emit(this.rand_count);
    }


}
export interface User {
  id: string;
  avatar: string;
  name: string;
}
