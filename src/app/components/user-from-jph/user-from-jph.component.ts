import {Component, Input, OnInit, Output} from '@angular/core';
import {User} from '../../../models/User';
import {EventEmitter} from '@angular/core';
import {UserService} from "../../services/user.service";
import {Post} from "../../../models/Post";

@Component({
  selector: 'app-user-from-jph',
  templateUrl: './user-from-jph.component.html',
  styleUrls: ['./user-from-jph.component.css']
})
export class UserFromJPHComponent implements OnInit {

  @Input()
  userFromJPH: User;

  @Output()
  bubbleUp = new EventEmitter<User>();

  constructor() { }

  ngOnInit(): void {
  }

  getUserId(id): void {
    this.bubbleUp.emit(id);
  }

}
