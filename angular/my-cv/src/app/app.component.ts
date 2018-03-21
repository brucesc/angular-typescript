import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { User } from './models/user';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'My CV';

  constructor(private UserSvc: UserService) {} // injected the service we made into this constructor

  logToConsole() {
    this.UserSvc.List().subscribe(users => {
      console.log(users);
    });
  }

  ngOnInit() {
    let user: User = new User(0, 'max', 'max', 'max', 'max', '513-299-2999', 'max@max.com', true, true, true);
    this.UserSvc.Create(user).subscribe(resp => {
      console.log('Create response', resp);
      this.logToConsole();
    });
    
    // this.UserSvc.Get('6').subscribe(u => { console.log(u);
    
  }
}
