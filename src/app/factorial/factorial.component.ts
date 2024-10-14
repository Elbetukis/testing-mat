import { Component } from '@angular/core';

@Component({
  selector: 'app-factorial',
  standalone: true,
  imports: [],
  templateUrl: './factorial.component.html',
  styleUrl: './factorial.component.css'
})
export class FactorialComponent {

}
// factorial.ts
export function factorial(x: number): number {
  if (x < 0 || x > 15) {
    return 0; // Devuelve 0 si x es negativo o mayor que 15.
  }
  if (x === 0) {
    return 1; // El factorial de 0 es 1.
  }
  
  let result = 1;
  for (let i = 1; i <= x; i++) {
    result *= i;
  }
  
  return result;
}

