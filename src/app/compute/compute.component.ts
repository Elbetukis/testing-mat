import { Component } from '@angular/core';

@Component({
  selector: 'app-compute',
  standalone: true,
  imports: [],
  templateUrl: './compute.component.html',
  styleUrl: './compute.component.css'
})
export class ComputeComponent {

}
// compute.ts
// compute.ts
export function compute(x: number): number {
  if (x < 0) {
    return 0; // Si es negativo, retorna 0.
  }
  
  return x + 1; // Si es positivo, incrementa x.
}



