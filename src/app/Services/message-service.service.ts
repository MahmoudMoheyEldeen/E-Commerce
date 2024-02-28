import { Injectable } from '@angular/core';

export interface Message {
  severity: 'success' | 'info' | 'warn' | 'error';
  summary: string;
  detail: string;
}
@Injectable({
  providedIn: 'root',
})

// Move the Message interface outside the class
export class MessageServiceService {
  add(message: Message): void {
    // Implementation to add the message to be displayed
    // This might involve showing the message in a UI component or logging it, depending on the actual implementation of the service.
  }
}
