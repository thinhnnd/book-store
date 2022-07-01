import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../shared/auth.service';
import { User } from '../auth/user.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  currentUser: User = { email: '', password: '' };

  constructor(
    public authService: AuthService,
    private actRoute: ActivatedRoute
  ) {
    // let id = this.actRoute.snapshot.paramMap.get('_id');
    this.currentUser = this.authService.getCurrentUser();
  }

  ngOnInit(): void {}
}
