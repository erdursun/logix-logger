import { Injectable } from '@angular/core';
import { SlackLoggerService } from './slack-logger.service';

@Injectable({
    providedIn: 'root'
})
export class LoggerService {
    
    constructor(private slackLoggerService: SlackLoggerService) { }

    logError(message: string, stack: string) {
        // Send errors to server here
        //...

        // Send errors to slack here
        //this.slackLoggerService.postErrorOnSlack(message, stack);

        // Log errors to console
        console.log('LoggerService: ' + message);
    }
}