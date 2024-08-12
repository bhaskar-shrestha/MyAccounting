import { CommonModule } from "@angular/common";
import { Component, output } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NgbDate, NgbInputDatepicker } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-transaction-date",
  standalone: true,
  imports: [CommonModule, FormsModule, NgbInputDatepicker],
  templateUrl: "./transaction-date.component.html",
  styleUrl: "./transaction-date.component.scss",
})
export class TransactionDateComponent {
  transactionDate: NgbDate = new NgbDate(2020, 1, 1);
  onDateChange = output<Date>();

  onDateSet() {
    const date = this.getDatefromNgbDate();
    if (this.isValidDate()) this.onDateChange.emit(date);
  }

  isValidDate = (): boolean => {
    const todayDate = new Date(Date.now());
    const selectedDate = this.getDatefromNgbDate();

    if (selectedDate > todayDate) return false;
    return true;
  };

  getDatefromNgbDate = () =>
    new Date(
      this.transactionDate.year,
      this.transactionDate.month - 1,
      this.transactionDate.day
    );
}
