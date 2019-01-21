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
  username: string;
  constructor(private github: GithubService) {
  }

  getProfile() {
    this.github.getUsername(this.username);

    this.github.getUser();
    this.user = this.github.user;
    console.log(this.user);

    this.github.getRepos(this.username);
    this.repo = this.github.repo;
    console.log(this.user);
  }

  switchSearch() {
    this.searchUsers = !this.searchUsers;
  }


  ngOnInit() {
    this.github.getUser();
   this.user = this.github.user;
  console.log(this.user);

   this.github.getRepos(this.username);
   this.repo = this.github.repo;
  }

}
