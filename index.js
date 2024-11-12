const { prompt } = require('inquirer');
const { default: Choices } = require('inquirer/lib/objects/choices');

prompt(
    [
        {
            type: 'input',
            name: 'title',
            message: 'What is the application title?'   
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please describe the application?'   
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What installations are required?'   
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How is this application used?'   
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Who contributed to your project?'   
        },
        {
            type: 'list',
            name: 'license',
            message: 'Any licenses?',
            choices: ['None','MIT','Apache']
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub user name?'   
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?'   
        },
    ]
)