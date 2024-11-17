// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
const generateMarkdown = require('./utils/generateMarkdown.js');

const licenses = ['None', 'MIT', 'Apache 2.0', 'BSD 3-Clause']
// TODO: Create an array of questions for user input
const questions = [ 
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description of your project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please enter information on how to use this project:',
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Please enter contribution guidelines:',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please enter test instructions:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select a license for this project:',
        choices: licenses
    },
    {
        type: 'input',
        name: 'userName',
        message: 'Please enter your GitHub username?',
    },
    {
        type: 'input',
        name: 'userEmail',
        message: 'Please enter your email address:',
    }
];

// TODO: Create a function to write README file
function writeToFile(filename) {
    const filename = "./dist/README.md";
    
    fs.writeFile(filename. data, function (err) {
        err ? console.log(err) : console.log(filename + " successfully created!")
    });  
    
}

// TODO: Create a function to initialize app
function init() {

    inquirer.prompt(questions)
    .then (answers => writeToFile(generateMarkdown(answers)))
}

// Function call to initialize app
init();
