import { Component } from '@angular/core';

@Component({
  selector: 'app-currencies',
  standalone: true,
  template: `<p>Supported currencies: {{ supportedCurrencies.join(', ') }}</p>`,
  styleUrls: ['./currencies.component.css']
})
export class CurrenciesComponent {
  supportedCurrencies: string[] = [];

  constructor() {
    this.supportedCurrencies = getCurrencies();
  }
}

// Función que retorna las divisas soportadas
export function getCurrencies(): string[] {
  return ['USD', 'AUD', 'EUR'];
}
