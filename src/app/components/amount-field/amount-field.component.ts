import { CommonModule } from "@angular/common";
import { Component, output } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-amount-field",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./amount-field.component.html",
  styleUrl: "./amount-field.component.scss",
})
export class AmountFieldComponent {
  public valueAmount?: number;
  onAmountChange = output<number>();

  onAmountSet() {
    if (this.isValidAmount()) this.onAmountChange.emit(this.valueAmount ?? 0);
  }

  isValidAmount = (): boolean => !Number.isNaN(+(this.valueAmount ?? 0));
}
