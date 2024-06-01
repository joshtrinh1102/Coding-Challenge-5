//U#: U22275330
class Employee{
    constructor(name,salary){
        this.name=name;
        this.salary=salary;
        console.log(`Name: ${name} . Salary: ${salary}`)}
    yearpay(){return this.salary *12}
    //Implement Employee class with name, salary properties, and annual salary calculation
}
 class Manager extends Employee{
    constructor(name,salary,department){
        super(name,salary);
        this.department=department;
        
    }
    yearpay(){
        const basesalary = super.yearpay()
        const bonus=0.15
        console.log(`The bonus is 15% ${bonus*basesalary}`)
        return (bonus *basesalary +basesalary)//Create Manager subclass with bonus calculation.
 }};