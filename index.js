// TODO: Include packages needed for this application
// ask user questions
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const util = require('util');
// interact with file system
const fs = require('fs');

// template


// TODO: Create an array of questions for user input
function userPrompt() {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Give a brief description of the project, including what it accomplishes for the user:',
            name: 'description',
        },
        {
            type: 'input',
            message: 'How is the project installed? If no there is no installation required, write "N/A".',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'Please include information about project operation:',
            name: 'usage',
        },
        {
            type: 'list',
            message: 'Pick a license for your project:',
            name: 'license',
            choices: ['MIT','GPL_v2', 'Apache_2.0']
        },
        {
            type: 'input',
            message: 'Please describe this applications tests, and how to use them',
            name: 'tests',
        },
        {
            type: 'input',
            message: 'Would you like to include your GitHub user-name?',
            name: 'gitHub',
        },
        {
            type: 'input',
            message: 'Would you like to include your e-mail?',
            name: 'eMail',
        },
    ])
};

// TODO: Create a function to write README file
const writeToFile = util.promisify(fs.writeFile);



// TODO: Create a function to initialize app
async function init() {
    try {
        const data = await userPrompt()
        const generateContent = generateMarkdown(data);
        const filename = `${data.title.toLowerCase().split(' ').join('')}.md`;
        writeToFile(`${filename}`, generateContent, 'utf8')
        console.log('File Created!')
    } catch (err) {
        console.log(err);
    }
}
// Function call to initialize app
init()

