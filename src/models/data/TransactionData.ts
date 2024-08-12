export interface TransactionRow {
  id: string;
  transactionDate: Date;
  description: string;
  transactionAmount: number;
  isIncome: boolean;
}
