export class Bills{
    constructor(
        public _id: string,
        public client: string,
        public payment: string,
        public date: string,
        public total: string,
        public status: string
    ){}
}