//U#: U22275330
class Employee{
    constructor(name,salary){
        this.name=name;
        this.salary=salary;
        console.log(`Name: ${name} . Monthly Salary: ${salary}`)}
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
        console.log(`Total Salary with bonus is: ${bonus *basesalary +basesalary}`)//Create Manager subclass with bonus calculation.
 }};
 
 let Bob = new Manager('Bob Ross',6600.00,'Digital Marketing')
 Bob.yearpay()

 let Deb= new Manager('Debbie Little',7205.00,'Finance')
 Deb.yearpay()//Instantiate Manager objects and calculate annual salaries with bonuses.