// TODO: Include packages needed for this application
// ask user questions
const inquirer = require('inquirer');
// interact with file system
const fs = require('fs');

// template


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Give a brief description of the project',
        name: 'Description',
    },
    {
        type: 'input',
        message: 'How is the project installed?',
        name: 'Installation',
    },
    {
        type: 'input',
        message: 'How is this project operated?',
        name: 'Usage',
    },
    {
        type: 'list',
        message: 'Pick a license for your project',
        name: 'License',
        choices: ['MIT','Other License', 'Nope']
    },
    {
        type: 'input',
        message: 'This is the one about tests which am unsure what that is',
        name: 'Tests',
    },
    {
        type: 'input',
        message: 'what is your GitHub user-name?',
        name: 'Git-Hub',
    },
    {
        type: 'input',
        message: 'what is your e-mail?',
        name: 'e-mail',
    },
    {
        type: 'input',
        message: 'Give a brief description of the project',
        name: 'Description',
    },
];


inquirer
  .prompt(questions)
  .then((data) => {
    const filename = `${data.title.toLowerCase().split(' ').join('')}.txt`;
    
    fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
    err ? console.log(err) : console.log('Success!')
    );
  });
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

// .prompt([
//     {
//       type: 'input',
//       message: 'What is your user name?',
//       name: 'name',
//     },
//     {
//       type: 'input',
//       message: 'What Languages do you know?',
//       name: 'languages',
//     },
//     {
//       type: 'rawlist',
//       message: 'What is your preferred method of communication?',
//       name: 'contact',
//       choices: ['email', 'phone', 'telekenesis']
//     },

// const template = `${title}`