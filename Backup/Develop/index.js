// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs/promises';
import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = [ 
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: (input) => input.length > 0 ? true : 'Title is required!'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description of your project:',
        validate: (input) => input.length > 0 ? true : 'Description is required!'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for this project:',
        choices: ['MIT', 'Apache 2.0', 'BSD 3-Clause', 'None']
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions:',
        default: 'npm install'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please enter information on how to use this project:',
        validate: (input) => input.length > 0 ? true : 'Usage information required!'
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
        validate: (input) => input.length > 0 ? true : 'Test instructions required!'
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
async function writeToFile(fileName, data) {
    try {
        await fs.writeFile(fileName, data);
        console.log('Succesfully created README.md!');
    } catch (err) {
        console.error('Error writing file:', err);
    }
}
 
async function init() {
    try {

        const answers = await inquirer.prompt(questions);

        const markdownContent = generateMarkdown(answers);

        await writeToFile('README.md', markdownContent);
    } catch (err) {
        console.error('Error initializing app:', err);
    }
}

init();

//MOVED COMMENTS TO LINE 89 TODO: Create a function to initialize app//
//MOVED COMMENTS TO LINE 90//