import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionRowInputComponent } from './transaction-row-input.component';

describe('TransactionRowInputComponent', () => {
  let component: TransactionRowInputComponent;
  let fixture: ComponentFixture<TransactionRowInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransactionRowInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionRowInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
