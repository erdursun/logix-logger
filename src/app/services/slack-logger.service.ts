import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class SlackLoggerService {

    /**  The webhook url of the Slack or other service */
    private webHook = 'webhook-url';
    private options = {
        headers: new HttpHeaders(
            { 'Content-Type': 'application/x-www-form-urlencoded' }
        )
    };

    constructor(private http: HttpClient) { }

    postErrorOnSlack(errorMessage: string, errorStack:string|undefined): void {

        const message = {
            channel: '#log',
            text: errorMessage,
            attachments: [
                {
                    author_name: window.location.href,
                    color: 'danger',
                    title: 'Trace',
                    text: errorStack
                }
            ]
        }

        this.http.post(this.webHook, message, this.options).subscribe();
    }
}