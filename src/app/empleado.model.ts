export class Employee {

    constructor(name:string,lastName:string,position:string,age:number,salary:number,avatar:string){
        this.name=name;
        this.lastName=lastName;
        this.position=position;
        this.age=age;
        this.salary=salary;
        this.avatar=avatar;
    }

    name:string="";
    lastName:string="";
    position:string="";
    age:number=0;
    salary:number=0;
    avatar:string="";
}