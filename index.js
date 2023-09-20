import inquirer from "inquirer";
const input = [{
        name: 'num1',
        type: 'number',
        message: 'enter num1'
    }, {
        name: 'num2',
        type: 'number',
        message: 'enter num2',
    }, {
        name: 'operations',
        type: 'list',
        choices: ["/", "*", "-", "+", "%"],
    }];
let answers = inquirer.prompt(input);
answers.then((answers) => {
    switch (answers.operations) {
        case "*":
            console.log(`Answers=${answers.num1}*${answers.num2}=${answers.num1 * answers.num2}`);
            break;
        case "/":
            console.log(`Answers=${answers.num1}/${answers.num2}=${answers.num1 / answers.num2}`);
            break;
        case "-":
            console.log(`Answers=${answers.num1}-${answers.num2}=${answers.num1 - answers.num2}`);
            break;
        case "+":
            console.log(`Answers=${answers.num1}=${answers.num2}
            ${answers.num1 + answers.num2}`);
            break;
        case "%":
            console.log(`Answers=${answers.num1}%${answers.num2}=${answers.num1 % answers.num2}`);
            break;
        default:
            break;
    }
});
/*
import   chalk from "chalk";

import inquirer from "inquirer";


    const answer=await inquirer.prompt(
        [{
        name:"NUMBER1",
        type:"number",
        message:"Enter your number 1"
        
    },{
        name:"NUMBER2",
    type:"number",
    message:"Enter your number 2"},{

        name:"operators",
        type:"list",
        message:"Enter your operator",
        choices:["DIVISION","MULTIPLY","MINUS","ADDITION","PERCENTAGE"]}
    ])
    let result;
    switch (answer.operators) {
        case "MULTIPLY":
            result=answer.NUMBER1*answer.NUMBER2;
            console.log(chalk.white.bgRedBright.bold`the reult is`+chalk.yellow`${result}`)
            break;

            case "DIVISION":
                result=answer.NUMBER1/answer.NUMBER2;
                console.log(chalk.white.bgRedBright.bold`the reult is`+chalk.yellow`${result}`)
                
            break;

            case "MINUS":
                result=answer.NUMBER1-answer.NUMBER2;
                console.log(chalk.white.bgRedBright.bold`the reult is`+chalk.yellow`${result}`)
            break;

            case "ADDITION":
                result=answer.NUMBER1+answer.NUMBER2;
                console.log(chalk.white.bgRedBright.bold`the reult is`+chalk.yellow`${result}`)
            break;

            case "PERCENTAGE":
                result=answer.NUMBER1/answer.NUMBER2*100;
                console.log(chalk.white.bgRedBright.bold`the reult is`+chalk.yellow`${result}`)
            break;
    
        default:
            break;
        
        }*/
