#! /usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';

console.log(chalk.bold.bgCyan('\n\t\t Code with rubab - Word counter'));
console.log('='.repeat(70));
const answers: {
    Sentence:string;
     
} = await inquirer.prompt([
    { 
        name:'Sentence',
        type:'input',
        message:chalk.yellow('Enter your sentence to count the word:'),  
    }
]);

const words = answers.Sentence.trim().split(' ');
//print the array of words to the console
console.log(words)
console.log('='.repeat(70));
//print the word count of the sentence to the console
console.log(chalk.bold(`\n - Your sentence word count is: ${chalk.blue(words.length)}`));
console.log('='.repeat(70))
