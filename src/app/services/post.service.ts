import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Post} from '../../models/Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private URL = 'https://jsonplaceholder.typicode.com/users';

  constructor(private httpClient: HttpClient) {
  }

  getPostsByUserId(id): Observable <Post[]>{
    return this.httpClient.get<Post[]>(this.URL + '/' + id + '/posts');
  }
}
