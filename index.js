// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the name of your project?',
        name: 'projname',
    },
    {
        type: 'input',
        message: 'How would you describe your project?',
        name: 'projdesc',
    },
    {
        type: 'input',
        message: 'How does one install your project?',
        name: 'projinstall',
    },
    {
        type: 'input',
        message: 'How does one use your project?',
        name: 'projusage',
    },
    {
        type: 'input',
        message: 'How does one contribute to your project?',
        name: 'projcontrib',
    },
    {
        type: 'input',
        message: 'How does one test your project?',
        name: 'projtest',
    },
    {
      type: 'list',
      message: 'How is your project licensed?',
      name: 'projlicense',
      choices: ["GNU GPLv3", "GNU LGPLv3", "Mozilla Public License 2.0", "Apache License 2.0", "MIT License", "Boost Software License 1.0", "The Unlicense", "No license"]
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username',
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'useremail',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, JSON.stringify(data), function(error) {
        error ? console.log(error) : console.log("Success!");
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((response) => {
        console.log(response);
        writeToFile("testFile.md", generateMarkdown(response));
    });
}

// Function call to initialize app
init();
