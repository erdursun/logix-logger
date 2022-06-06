import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { LoggerService } from './services/logger.service';
import { ErrorService } from './services/error.service';
import { NotificationService } from './services/notification.service';

@Injectable()
export class LogixErrorHandler implements ErrorHandler {

  constructor(private injector: Injector) { }
  //constructor(private errorService: ErrorService, private loggerService: LoggerService, private notifierService: NotificationService) { }
  
  handleError(error: Error | HttpErrorResponse) {
    const errorService = this.injector.get(ErrorService);
    const loggerService = this.injector.get(LoggerService);
    const notifierService = this.injector.get(NotificationService);
 
    let message;
    let stackTrace;
    if (error instanceof HttpErrorResponse) {
      // Server error
      message = errorService.getServerErrorMessage(error);
      stackTrace = errorService.getServerStack(error);
      notifierService.showError(message);
    } else {
      // Client Error
      message = errorService.getClientMessage(error);
      stackTrace = errorService.getClientStack(error);
      notifierService.showError(message);
    }
    // Always log errors
    loggerService.logError(message, stackTrace);
    console.error(error);
  }
}