// Including packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// Creating an array of questions for user input
const questions = [ 
{
    type: "input",
    name: "title",
    message: "Please enter the name of your Project.",
},
{
    type: "input",
    name: "description",
    message: "Please describe the purpose and functionality of your project.",
  },
  {
    type: "input",
    name: "screenshot",
    message: "Please link the image file of the screenshot you want to use."
  },
  {
    type: "input",
    name: "link",
    message: "Please provide a live URL of your deployed application."
  },
  {
    type: "checkbox",
    name: "license",
    message: "Please select a license applicable to this project.",
    choices: ["MIT", "APACHE2.0", "Boost1.0", "MPL2.0", "BSD2", "BSD3", "none"],
  },
  {
    type: "input",
    name: "require",
    message: "Please list any packages needed for your application.",
  },
  {
    type: "input",
    name: "features",
    message: "Please highlight some great features about your project.",
  },
  {
    type: "input",
    name: "usage",
    message:
      "Please indicate languages and technologies associated with your project",
  },
  {
    type: "input",
    name: "creator",
    message: "What is your Github user name?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
  {
    type: "input",
    name: "contributors",
    message: "Please indicate any contributors to your project.",
    default: "",
  },
  {
    type: "input",
    name: "test",
    message: "Please provide test instructions for your project.",
  },];

// TODO: Create a function to write README file
function writeFile(fileName, data) {
    return fs.writeFileSync(fileName, data, "utf-8", (error) => error? console.error(error):console.log("Sucess!"));
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then ((answers) => {
        // console.log ("Success! README.md file has been created!");
        writeFile("README.md", generateMarkdown({...answers}));
    })
}

// Function call to initialize app
init();
