import { Component, EventEmitter, Input, Output} from '@angular/core';

import { DUMMY_USERS } from '../dummy-users'
import { NewUserComponent } from "../new-user/new-user.component";

//const rand_count = Math.floor(Math.random()* DUMMY_USERS.length)


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [NewUserComponent],
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
    @Output() selected = new EventEmitter();
    @Output() selectedToo = new EventEmitter();
    rand_count = (Math.floor(Math.random()* DUMMY_USERS.length*100)).toString();
    user_selected = true;
  
    get imagePath() {
      return 'assets/users/' + this.user?.avatar;
    }
  
    onSelectUser() {
      this.selected.emit(this.user.id);
      this.selectedToo.emit(this.rand_count);
      const newUser = new User("","","")
      DUMMY_USERS.push(newUser);
    }


}
export class User {
  id: string;
  avatar: string;
  name: string;
  constructor( id: string ,avatar: string , name: string ){
    this.avatar=avatar;
    this.name=name;
    this.id=id;
  }
}
