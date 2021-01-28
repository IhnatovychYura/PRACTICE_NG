import { Component, OnInit } from '@angular/core';
import {usersWithAddress} from '../../../data/users';
import {User} from '../../../models/User';
import {UserService} from '../../services/user.service';
import {Post} from "../../../models/Post";
import {PostService} from '../../services/post.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  usersWithAddress: any[] = usersWithAddress;

  usersFromJPH: User[];

  clickedUserPosts: Post[];

  constructor(private userService: UserService, private postService: PostService) {
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(value => this.usersFromJPH = value);
  }
  getIdFromBubble(id): void{
    this.postService.getPostsByUserId(id).subscribe( value => this.clickedUserPosts = value);
  }

}
