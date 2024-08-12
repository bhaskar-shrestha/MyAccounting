import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionDateComponent } from './transaction-date.component';

describe('TransactionDateComponent', () => {
  let component: TransactionDateComponent;
  let fixture: ComponentFixture<TransactionDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransactionDateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
