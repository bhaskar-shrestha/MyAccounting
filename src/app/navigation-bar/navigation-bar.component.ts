import { Component } from "@angular/core";
import { NgbNavModule } from "@ng-bootstrap/ng-bootstrap";
import { AmountFieldComponent } from "../components/amount-field/amount-field.component";
import { currentPage } from "../../models/enums";
import { CommonModule } from "@angular/common";
import { AddTransactionComponent } from "../add-transaction/add-transaction.component";

@Component({
  selector: "app-navigation-bar",
  standalone: true,
  imports: [
    NgbNavModule,
    AmountFieldComponent,
    CommonModule,
    AddTransactionComponent,
  ],
  templateUrl: "./navigation-bar.component.html",
  styleUrl: "./navigation-bar.component.scss",
})
export class NavigationBarComponent {
  currentNavSelection: currentPage = currentPage.dashboard;

  isDashboard = (): boolean =>
    this.currentNavSelection === currentPage.dashboard;
  isTransactionEntry = (): boolean =>
    this.currentNavSelection === currentPage.transactionEntry;

  dashboardClicked = () => (this.currentNavSelection = currentPage.dashboard);

  addTransactionClicked = () =>
    (this.currentNavSelection = currentPage.transactionEntry);
}
