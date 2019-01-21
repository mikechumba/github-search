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
  userName: string;
  constructor(private github: GithubService) {
  }

  getProfile() {
    this.userName = 'Michael Kipchumba';
  }

  switchSearch() {
    this.searchUsers = !this.searchUsers;
  }

  ngOnInit() {
  }

}
