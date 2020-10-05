import { Component, OnInit } from '@angular/core';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'softrams-racing';

  constructor(private appService: AppService) {
  }

  ngOnInit(): void {
    if (!this.appService.username || this.appService.username.length < 1) {
      let userStorageData = localStorage.getItem('username');
      const userData = JSON.parse(userStorageData); 
      this.appService.setUsername(userData.username);
    }
  }
}
