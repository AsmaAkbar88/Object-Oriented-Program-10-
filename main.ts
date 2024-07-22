import chalk from "chalk"
import inquirer from "inquirer"

class Student
{    name :string
constructor(n : string){
    this.name =n
}
}
class Person {
    students: Student[]= []
    addStudent(obj: Student){
        this.students.push(obj)
    }
}
const persons = new Person()
const program = async(persons: Person) =>{ 
    do{
        console.log("-".repeat(70));
    console.log(chalk.blueBright.bold("  \n \t Welcome!\t \n"));
const ans = await inquirer.prompt(
    [
        {
            name: "select",
            type: "list",
            message: chalk.yellow.bold(" \n Whom would you like to interact with..?  \n \n"),
            choices: ["Staff", "Student" , "Exit"]
        }
    ]
)
if(ans.select === "Staff"){
console.log(chalk.whiteBright(" \n You approch the staff room. Please feel free to ask any Question"))
}else if (ans.select === "Student"){
    let ans = await inquirer.prompt(
        [
            {
                name: "student",
                type: chalk.yellow.bold( " \n Enter the student name you wish to engage with."),
            }
        ]
    )
    const student = persons.students.find( val => val.name == ans.student)
    if(!student){
        const name = new Student(ans.student)
        persons.addStudent(name)
        console.log("-".repeat(70));
        console.log(chalk.whiteBright.bold(`\n Hello i am ${name.name}. Nice to meet you`));
        console.log(chalk.greenBright("New Student Added"));
        console.log(chalk.whiteBright.bold("Current student list"));
        console.log(persons.students )
        
        
    }else{
        console.log("-".repeat(70));
        console.log(chalk.bold.yellow(` \n Hello i am ${student.name}. Nice to see you again`));
        console.log("\n Existing student list: ");
        console.log(persons.students);
        console.log("-".repeat(70));
    }
}else { if ( ans.select === "Exit"){
    console.log(chalk.redBright.bold(" \n \t Exiting the Program \t \n"));
    console.log("\n  >>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<< \n ");
    console.log("_".repeat(70));
    
    
    process.exit()
}}

}while(true)
}
program(persons)