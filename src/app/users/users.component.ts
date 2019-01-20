import { Component, OnInit } from '@angular/core';
import { User } from './../user';
import { Repo } from '../repo';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  // user: User;
  // userName: string;
  // constructor(private github: GithubService) {
  //   this.userName = 'mikechumba';
  // }

  // getProfile() {
  //   this.github.getUser(this.userName);
  //   this.github.getRepos(this.userName);
  // }

  ngOnInit() {
  }

}
