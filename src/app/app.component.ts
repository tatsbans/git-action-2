import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component'
import { UserComponent } from './user/user.component'
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from "./tasks/tasks.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'firstproj';
  users = DUMMY_USERS;
  selectedUserId?: string; // বলছে যে হয়তো value  নাও আসতে  পারে  সেই  ক্ষেত্রে fallback সেকশন থাকবে, html  ফাইল-এ 
  randCount!:string;
  ace:number[] = [1,2,3,4,5]
  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId);

  }
  

  onUserSelected(id: string) {
    this.selectedUserId = id;
    this.users.push
  }

  onRandSelected(randCount: string) {
    this.randCount = randCount;
  }

}
