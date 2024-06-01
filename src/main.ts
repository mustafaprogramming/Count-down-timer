#! /usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
import {DifferenceInSecondsOptions, differenceInMinutes, differenceInSeconds} from 'date-fns';
console.log(chalk.blue(`\n\n\t   _-^+-^+‾       ◦◦◦◦◦◦     ◦◦◦ ◎ ◉ ◯ ◉ ◎ ◦◦◦     ◦◦◦◦◦◦       ‾+^-+^-_`));
console.log(chalk.blue(`\t<==!~~ ☆*: .｡. o(≧ ${chalk.greenBright.bold(`Welcome To Mustafa's - Countdown timer`)} ≦)o .｡.:*☆ ~~!==>`));
console.log(chalk.blue(`\t   ‾-∨+-∨+_       ◦◦◦◦◦◦     ◦◦◦ ◎ ◉ ◯ ◉ ◎ ◦◦◦     ◦◦◦◦◦◦       _+∨-+∨-‾\n\n`));

function* countdownTimer(second:number){
    while(second>0){
        yield second;
        second--;
    }
}
let user = await inquirer.prompt([
    {
        type:'number',
        name:'time',
        message:chalk.yellowBright.bold(`Enter the seconds to count:`)
    }
])
let timerIterator=countdownTimer(user.time);

function displayCountDown(){
    let result=timerIterator.next();
    if(!result.done){
        const now=new Date();
        const countdownTimer=new Date(now.getTime()+(result.value*1000))
        const remainnigseconds= differenceInSeconds(countdownTimer,now);
        if(remainnigseconds<=3&&remainnigseconds!=1){
            console.log(chalk.yellowBright.bold(`\n\t\t\t\t   --==oo([{ ${chalk.rgb(255, 81, 0).bold(remainnigseconds)} }])oo==--`))
        }else if(remainnigseconds<=10&&remainnigseconds>3){
            console.log(chalk.yellowBright.bold(`\n\t\t\t\t   --==oo([{ ${chalk.rgb(255, 180, 0).bold(remainnigseconds)} }])oo==--`))
        }else if(remainnigseconds==1){
            console.log(chalk.yellowBright.bold(`\n\t\t\t\t   --==oo([{ ${chalk.rgb(255, 0, 0).bold(remainnigseconds)} }])oo==--`))
        }else{
            console.log(chalk.yellowBright.bold(`\n\t\t\t\t   --==oo([{ ${chalk.greenBright.bold(remainnigseconds)} }])oo==--`))
        }
        setTimeout(displayCountDown,1000)
    }else{
        console.log(chalk.yellowBright.bold(`\n\t\t\t       --==oo([{ ${chalk.greenBright.bold(`Completed`)} }])oo==--`))
    }
}
displayCountDown();



