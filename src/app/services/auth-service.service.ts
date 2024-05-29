import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
 

  constructor() { }

  getHelloMessage(): string {
    return 'Hello, World!';
  }
  
}
