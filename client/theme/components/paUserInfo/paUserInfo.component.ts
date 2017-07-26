import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { UserActions } from '../../../redux/actions/user/user.actions';
import { PaUserInfoService } from './paUserInfo.service';

@Component({
  selector: 'pa-user-info',
  styleUrls: ['./paUserInfo.scss'],
  templateUrl: './paUserInfo.html',
  providers: [PaUserInfoService]
})

export class PaUserInfoComponent {
  public userinfo: any;
  constructor(private _paUserInfoService: PaUserInfoService, private userActions: UserActions) {
    this.userinfo = JSON.parse(localStorage.getItem('currentUser'));
  }
}
