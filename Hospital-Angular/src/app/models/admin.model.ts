export class Admins {
    constructor(
        public _id: string,
        public firstName: string,
        public lastName: string,
        public dpi: string,
        public phoneNumber: string,
        public email: string,
        public password: string,
        public image: string,
        public role: string
    ){}
}