import { Injectable } from '@angular/core';
import { User } from './user';
import { Repo } from './repo';
import { environment } from './../environments/environment.prod';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  user: User;
  repo: Repo;
  private userName: string;

  apiKey: string = environment.apiKey;
  baserUrl: string = environment.baseUrl;
  constructor(private http: HttpClient) {
    this.user = new User ('', '', '', '', 0, 0, 0);
    this.userName = 'madskillz254';
  }

  getUser() {

    interface ApiResponse {
      login: string;
      avatar_url: string;
      html_url: string;
      name: string;
      public_repos: number;
      followers: number;
      following: number;
    }
    const promise = new Promise(((resolve, reject) => {
      this.http.get<ApiResponse>('https://api.github.com/users/' + this.userName + '?access_token=' + this.apiKey)
      .toPromise()
      .then(res => {
          this.user.login = res.login;
          this.user.avatar_url = res.avatar_url;
          this.user.html_url = res.html_url;
          this.user.name = res.name;
          this.user.followers = res.followers;
          this.user.following = res.following;
          this.user.public_repos = res.public_repos;
          console.log(this.user);
        },
        error => {

      reject(error);
    });
    }));
    return promise;
  }

  getRepos(username) {
    const promise = new Promise(((resolve, reject) => {
      this.http.get<Repo>(`https://api.github.com/users/${this.userName}/repos?access_token=${this.apiKey}` )
        .toPromise()
        .then(res => {
          this.repo.name = res.name;
          this.repo.repo_url = res.repo_url;
          this.repo.description = res.description;
    }, error => {

      reject(error);
    });
  }));
    return promise;
  }

  getUsername(username: string) {
    this.userName = username;
  }
}
