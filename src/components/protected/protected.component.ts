import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-protected',
  templateUrl: './protected.component.html',
  styleUrls: ['./protected.component.css']
})
export class ProtectedComponent implements OnInit {
  profile: any;
  constructor(private authService: AuthService) {}

  ngOnInit() {
    if (this.authService.userProfile) {
      this.profile = this.authService.userProfile;
      console.log(this.profile);
    } else {
      this.authService.getProfile((err, profile) => {
        this.profile = profile;
        console.log(this.profile);
      });
    }

    console.log(this.profile);
  }
}
