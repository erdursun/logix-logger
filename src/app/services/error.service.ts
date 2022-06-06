import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  getClientErrorMessage(error: Error): string {    
    return error.message ? 
           error.message : 
           error.toString();
  }

  getServerErrorMessage(error: HttpErrorResponse): string {
    return navigator.onLine ?    
           error.message :
           'No Internet Connection';
  }    

  getClientMessage(error: Error): string {
    if (!navigator.onLine) {
        return 'No Internet Connection';
    }
    return error.message ? error.message : error.toString();
  }

  getClientStack(error: Error): string {
      return error.stack ? error.stack : error.toString();
      //return error.stack;
  }

  getServerMessage(error: HttpErrorResponse): string {
    if (error.error && error.error.Message) {
        return error.error.Message;
    } else if (error.error) {
        return error.error;
    } else if (error.message) {
        return error.message;
    } else {
        return `${error.status}  ${error.statusText}: ${error.url}`;
    }
  }

  getServerStack(error: HttpErrorResponse): string {
    if (error.error && error.error.StackTrace) {
      return error.error.StackTrace;
    } else if (error.error && error.error.ExceptionMessage) {
        return error.error.ExceptionMessage;
    }

    return '';
  }
}