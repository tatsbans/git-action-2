import { Component, Input } from '@angular/core';
import { NewUserComponent } from "../new-user/new-user.component";
import { User } from '../user/user.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [NewUserComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
onUserAdded( newUser: User) {
  console.log(newUser);
}
  @Input({ required: true }) userId: string | undefined; // if user id is not passed it will treat as undefined
  @Input({ required: true }) name!: string;
  @Input({ required: true }) randomcount!: string;

  showNewUser = false;

  onCancelClicked(hideForm:boolean){
    if(hideForm)
     this.showNewUser=false;
  }
  

 

}
