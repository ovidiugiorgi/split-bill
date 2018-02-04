export interface Bill {
  id?: string;
  title: string;
  value: number;
  owner: {
    username: string;
    billPercent?: number;
    amountPaid?: number;
  };
  friend: {
    username: string;
    amountPaid?: number;
  };
}
