import { BehaviorSubject } from 'rxjs';

export class MessageService {
  private message: string;

  private msgSubject = new BehaviorSubject<string>('Default (subject)');

  getMessage() {
    return this.message;
  }
  setMessage(value: string) {
    this.message = value;
    this.msgSubject.next(value);
  }
  getObservable() {
    return this.msgSubject.asObservable();

  }

}

