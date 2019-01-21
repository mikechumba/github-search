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

  searchUsers = true;

  user: User;
  repo: Repo;
  userName: string;
  constructor(private github: GithubService) {
    this.github.getUsername(this.userName);

   this.github.getUser();
   this.user = this.github.user;
  console.log(this.user);

   this.github.getRepos(this.userName);
   this.repo = this.github.repo;
    console.log(this.user);
  }

  // getProfile() {
  // }

  switchSearch() {
    this.searchUsers = !this.searchUsers;
  }


  ngOnInit() {
  }

}
