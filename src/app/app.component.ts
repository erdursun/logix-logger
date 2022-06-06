import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { SlackLoggerService } from './services/slack-logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'logix-logger';

  constructor(private http: HttpClient) {
  }
  
  throwError(){
    throw new Error('Logix-Logger Test Error');
  }

  throwHttpError(){
    this.http.get('logix-logger-url').subscribe();
  }

  /*
  constructor(private slackLoggerService: SlackLoggerService) { }

  throwSlackError() {
    const err = new Error('Logix-Logger Test Error');
    this.slackLoggerService.postErrorOnSlack(err.message, err.stack);
  }
*/
}
