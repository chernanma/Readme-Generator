const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");

const questions= [
        {
            type: "input",
            name: "author",
            message: "Please enter you full name"
        },    
        {
            type: "input",
            name: "title",
            message: "What is your project's title?"
          },
          {
            type: "input",
            name: "description",
            message: "Please enter a project's description"
          },
          {
            type: "input",
            name: "installation",
            message: "Please enter installation instruction if any"            
          },
          {
            type: "input",
            name: "usageinfo",
            message: "What does the user need to know about this Readme-Generator?",
          },
          {
            type: "input",
            name: "contribution",
            message: "What does the user need to know about contributing to help your project contributors do a good work ?",
          },
          {
            type: "input",
            name: "test",
            message: "What command should be run to run tests?",
            default: "npm test"
          },
          { 
            type: "list",
            name: "license",
            message: "What kind of license should your project have?",
            choices: ["ISC","MIT","EPL 201.0", "APACHE 2.0", "GPL 3.0","LGPL 20v3", "BSD 3", "None"]
          },
          {
            type: "input",
            name: "github",
            message: "What is your GitHub username?"
          },
          {
            type: "input",
            name: "email",
            message: "What is your Email address?"
          }

    ];

// function to write README file
function writeToFile(fileName, data) {

}

// Generate Readme object based on User input
function generateReadme (data){
    const readmeInfo = `

    # ${data.title}

    ## Description
    
    ${data.description}

    ---

    ### Table of Contents
    - [Description](#description)
    - [Installation](#installation)
    - [Usage Information](#usage-info)
    - [Contribution Guidelines](#contribution-guidelines)
    - [Test Instructions](#test-instructions)
    - [Author Info](#author-info)
    ---
       
    ## Installation
    
    ${data.installation}

    [Back To The Top](#${data.title})
    ---

    ##Usage Info

    ${data.usageinfo}

    [Back To The Top](#${data.title})
    ---

    ##Contribution Guidelines
    
    ${data.contribution}

    [Back To The Top](#${data.title})
    ---

    ## Test Instructions
    ${data.test}

    [Back To The Top](#${data.title})
    ---

    ## Author Info

    - GitHub -- [${data.github}](https://github.com/${data.github})
    ---

    ## License
    Copyright (c) ${data.author}

    [Back To The Top](#${data.title})
    `;
    return readmeInfo;

}

// function to initialize program
function init() {
    inquirer.prompt(questions)
        .then (function(response){
            console.log(response);  
            generateReadme (response);
            console.log(generateReadme(response));
        })
        .catch(function(err){
            console.log(err);
        })
}

// function call to initialize program
init();

