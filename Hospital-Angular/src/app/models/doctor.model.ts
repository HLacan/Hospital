export class Doctors {
    constructor(
        public _id: string,
        public firstName: string,
        public lastName: string,
        public dpi: string,
        public phoneNumber: string,
        public email: string,
        public password: string,
        public role: string,
        public image: string,
        public specialty: string,
        public clinic: string
    ){}
}