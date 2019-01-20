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

  apiKey: string = environment.apiKey;
  constructor(private http: HttpClient) {
    this.user = new User ();
    this.repo = new Repo ();
    console.log('Service Works!');
   }

  getUser() {
      const promise = new Promise((resolve, reject) => {
        this.http.get<User>(`https://api.github.com/users/${this.user.name}?${this.apiKey}` )
        .toPromise()
        .then(res => {
          this.user.login = res.login;
          this.user.avatar_url = res.avatar_url;
          this.user.html_url = res.html_url;
          this.user.name = res.name;
          this.user.followers = res.followers;
          this.user.following = res.following;
          console.log(this.user);
          }
        );
    });
    return promise;
  }

  getRepos() {
    const promise = new Promise((resolve, reject) => {
      this.http.get<Repo>(`https://api.github.com/users/${this.user.name}?access_token=${this.apiKey}` )
        .toPromise()
        .then(res => {
          this.repo.name = res.name;
          this.repo.repo_url = res.repo_url;
          this.repo.description = res.description;
          console.log(this.user);
          }
        );
    });
    return promise;
  }
}
