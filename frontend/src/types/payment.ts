export interface Payment {
  id: string;
  amount: number;
  status: "Paid" | "Pending" | "Failed";
  method: string;
  plan: string;
  transactionId: string;
  date: string;
}