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
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description of your project:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for this project:',
        choices: ['MIT', 'Apache 2.0', 'BSD', 'None']
    },
    {
        type: 'input',
        name: 'install',
        message: 'Enter the installation instructions:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please enter information on how to use this project:',
    },
    {
        type: 'input',
        name: 'guidelines',
        message: 'Please enter contribution guidelines:',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please enter test instructions:',
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
        console.log('Successfully created README.md!');
    } catch (err) {
        console.error('Error writing file:', err);
    }
}

// Function to initialize app
async function init() {
    try {
        // Get user inputs
        const answers = await inquirer.prompt(questions);
        
        // Generate markdown content
        const markdownContent = generateMarkdown(answers);
        
        // Write to README.md file
        await writeToFile('README.md', markdownContent);
    } catch (err) {
        console.error('Error initializing app:', err);
    }
}

init();

