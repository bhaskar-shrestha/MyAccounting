import { CommonModule } from "@angular/common";
import { Component, output } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AmountFieldComponent } from "../components/amount-field/amount-field.component";
import { TransactionDateComponent } from "../components/transaction-date/transaction-date.component";
import { TransactionRow } from "../../models/data/TransactionData";
import { TransactionDescriptionComponent } from "../components/transaction-description/transaction-description.component";
import { TransactionTypeComponent } from "../components/transaction-type/transaction-type.component";

@Component({
  selector: "app-transaction-row-input",
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    AmountFieldComponent,
    TransactionDateComponent,
    TransactionDescriptionComponent,
    TransactionTypeComponent,
  ],
  templateUrl: "./transaction-row-input.component.html",
  styleUrl: "./transaction-row-input.component.scss",
})
export class TransactionRowInputComponent {
  rowData: TransactionRow = {
    id: "",
    transactionDate: new Date(),
    description: "",
    transactionAmount: 0,
    isIncome: false,
  };
  onValueChanged = output<TransactionRow>();
  onValuesUpdated() {
    this.onValueChanged.emit(this.rowData);
  }

  getDate($event: any) {
    this.rowData.transactionDate = $event;
    this.onValuesUpdated();
  }

  getDescription($event: string) {
    this.rowData.description = $event;
    this.onValuesUpdated();
  }

  getAmount($event: number) {
    this.rowData.transactionAmount = $event;
    this.onValuesUpdated();
  }

  getIsIncome($event: boolean) {
    this.rowData.isIncome = $event;
    this.onValuesUpdated();
  }
}
