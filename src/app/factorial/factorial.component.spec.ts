import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FactorialComponent } from './factorial.component';
import { factorial } from './factorial.component'; // Asegúrate de que está bien importado.

describe('FactorialComponent', () => {
  let component: FactorialComponent;
  let fixture: ComponentFixture<FactorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FactorialComponent], // Usamos imports porque es standalone.
    }).compileComponents();

    fixture = TestBed.createComponent(FactorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('factorial function test suite', () => {
  it('should return 0 if x is negative', () => {
    const result = factorial(-1);
    expect(result).toBe(0);
  });

  it('should return 1 if x is 0', () => {
    const result = factorial(0);
    expect(result).toBe(1); // 0! = 1
  });

  it('should return 2 if x is 2', () => {
    const result = factorial(2);
    expect(result).toBe(2); // 2! = 2
  });

  it('should return 6 if x is 3', () => {
    const result = factorial(3);
    expect(result).toBe(6); // 3! = 6
  });

  it('should return 24 if x is 4', () => {
    const result = factorial(4);
    expect(result).toBe(24); // 4! = 24
  });

  it('should return 120 if x is 5', () => {
    const result = factorial(5);
    expect(result).toBe(120); // 5! = 120
  });

  it('should return 0 if x is greater than 15', () => {
    const result = factorial(16);
    expect(result).toBe(0); // Factorial no está definido para x > 15, retorna 0.
  });
});
