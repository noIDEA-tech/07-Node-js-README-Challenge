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
        choices: ['MIT', 'Apache 2.0', 'BSD', 'None']
    },
    {
        type: 'input',
        name: 'install',
        message: 'What installations are required?',
        validate: (input) => input.length > 0 ? true : 'Installation instructions are required!'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please enter information on how to use this project:',
        validate: (input) => input.length > 0 ? true : 'Usage information required!'
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Who contributed to this project?',
        validate: (input) => input.length > 0 ? true : 'Contributor input or NA required!'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What tests are required?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your GitHub username:',
        validate: (input) => input.length > 0 ? true : 'GitHub username is required!'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address:',
        validate: (input) => input.length > 0 ? true : 'email address is required!'
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

