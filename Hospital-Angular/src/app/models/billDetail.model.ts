export class BillDetails{
    constructor(
        public _id: string,
        public quantity: string,
        public price: string,
        public subtotal: string,
        public bill: string,
        public product: string
    ){}
}