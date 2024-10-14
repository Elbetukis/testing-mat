import { Component } from '@angular/core';

@Component({
  selector: 'app-greet',
  standalone: true,
  template: `<p>{{ greetingMessage }}</p>`,
  styleUrls: ['./greet.component.css']
})
export class GreetComponent {
  greetingMessage: string = '';

  constructor() {
    this.greetingMessage = greet('most');
  }
}

// Función greet que genera el mensaje
export function greet(name: string): string {
  return `Hello, ${name}!`;
}
