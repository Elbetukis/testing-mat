import { ComponentFixture, TestBed } from '@angular/core/testing';
import { greet } from './greet.component'
import { GreetComponent } from './greet.component';

describe('GreetComponent', () => {
  let component: GreetComponent;
  let fixture: ComponentFixture<GreetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GreetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GreetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('greet',()=> {
    it('should include the name in the message', ()=>{
      expect(greet('mosh')).toContain('mosh');
    })
  })
});
