import { Component, output } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-transaction-description",
  standalone: true,
  imports: [FormsModule],
  templateUrl: "./transaction-description.component.html",
  styleUrl: "./transaction-description.component.scss",
})
export class TransactionDescriptionComponent {
  description: string = "";
  onDescriptionChange = output<string>();

  onDescriptionSet() {
    this.onDescriptionChange.emit(this.description);
  }
}
