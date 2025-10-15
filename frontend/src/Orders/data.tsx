
export type OrderRecord = {
  _id: number;
  createdAt: string;          // 'MM/DD/YYYY'
  totalPrice: number;
  user: { name: string };
  isPaid: boolean;
  paidAt: string | null;
  isDelivered: boolean;
  deliveredDate: string | null;
};

const data = {
  orders: [
    {
      _id: 1,
      createdAt: "02/20/2021",
      totalPrice: 42.9,
      user: { name: "Taylor" },
      isPaid: true,
      paidAt: "02/14/2021",
      isDelivered: false,
      deliveredDate: null,
    },
    {
      _id: 2,
      createdAt: "02/20/2021",
      totalPrice: 42.9,
      user: { name: "Pedro" },
      isPaid: true,
      paidAt: "02/14/2021",
      isDelivered: false,
      deliveredDate: null,
    },
    {
      _id: 3,
      createdAt: "02/20/2021",
      totalPrice: 42.9,
      user: { name: "Sanjay" },
      isPaid: true,
      paidAt: "02/14/2021",
      isDelivered: false,
      deliveredDate: null,
    },
  ] as OrderRecord[],
};

export default data;
export {};