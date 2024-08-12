import { Component, output } from "@angular/core";
import { TransactionRowInputComponent } from "../transaction-row-input/transaction-row-input.component";
import { TransactionRow } from "../../models/data/TransactionData";

@Component({
  selector: "app-add-transaction",
  standalone: true,
  imports: [TransactionRowInputComponent],
  templateUrl: "./add-transaction.component.html",
  styleUrl: "./add-transaction.component.scss",
})
export class AddTransactionComponent {
  rowData: TransactionRow = {
    id: "",
    transactionDate: new Date(),
    description: "",
    transactionAmount: 0,
    isIncome: false,
  };

  onCancelled = output<void>();
  onSaved = output<TransactionRow>();

  setData($event: TransactionRow) {
    this.rowData = $event;
  }

  cancelled() {
    this.onCancelled.emit();
  }

  saved() {
    this.onSaved.emit(this.rowData);
  }
}
