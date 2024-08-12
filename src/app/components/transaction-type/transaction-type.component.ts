import { Component, output } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-transaction-type",
  standalone: true,
  imports: [FormsModule],
  templateUrl: "./transaction-type.component.html",
  styleUrl: "./transaction-type.component.scss",
})
export class TransactionTypeComponent {
  isIncome: boolean = false;
  onTypeChanged = output<boolean>();

  onTypeSet() {
    this.onTypeChanged.emit(this.isIncome);
  }
}
