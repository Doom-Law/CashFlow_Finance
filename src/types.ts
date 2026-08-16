export type TransactionType = 'income' | 'expense';

export interface Transaction {
  id: string;
  description: string;
  amount: number;
  type: TransactionType;
  category: string;
  date: string;
}

export interface BalanceSummary {
  income: number;
  expense: number;
  total: number;
}
