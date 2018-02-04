import { Component, OnInit } from '@angular/core';

import { AuthService } from '../services/auth.service';
import { LoggerService } from '../services/logger.service';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.scss']
})
export class CallbackComponent implements OnInit {

  constructor(private authService: AuthService,
              private logger: LoggerService) { }

  ngOnInit() {

    this.logger.log("Callback Component before Handling Authentication");
    this.authService.handleAuthentication();
  }

}
