import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComputeComponent } from './compute.component';
import { compute } from './compute.component';

describe('ComputeComponent', () => {
  let component: ComputeComponent;
  let fixture: ComponentFixture<ComputeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComputeComponent], // Como es standalone, se debe importar.
    }).compileComponents();

    fixture = TestBed.createComponent(ComputeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('compute function test suite', () => {
  it('should return 0 if input is negative', () => {
    const result = compute(-1);
    expect(result).toBe(0);
  });

  it('should increment the input if it is positive', () => {
    const result = compute(1);
    expect(result).toBe(2); // 1 + 1 = 2
  });

  it('should return 1 if input is 0', () => {
    const result = compute(0);
    expect(result).toBe(1); // 0 + 1 = 1
  });
});
