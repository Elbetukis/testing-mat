import { ComponentFixture, TestBed } from '@angular/core/testing';
import { getCurrencies } from './currencies.component';
import { CurrenciesComponent } from './currencies.component';

describe('getCurrencies',()=>{
  it('should return the supported currencies',()=>{
    const result = getCurrencies();
    expect(result).toContain('USD');
    expect(result).toContain('AUD');
    expect(result).toContain('EUR');
  })
})

describe('CurrenciesComponent', () => {
  let component: CurrenciesComponent;
  let fixture: ComponentFixture<CurrenciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrenciesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrenciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
});
