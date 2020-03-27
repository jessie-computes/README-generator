const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const util = require("util");

var avatarURL = "";

inquirer
  .prompt([
    {
      type: "input",
      message: "Enter your GitHub username.",
      name: "username"
    },
    {
      type: "input",
      name: "title",
      message: "What is your project title?"
    },
    {
      type: "input",
      name: "description",
      message: "Please write out a description for your project."
    },
    {
      type: "input",
      name: "installation",
      message: "How do you install this project?"
    },
    {
      type: "input",
      name: "usage",
      message: "What could you use this project for?"
    },
    {
      type: "input",
      name: "license",
      message: "What is this project's license?"
    },
    {
      type: "input",
      name: "contributing",
      message: "Who contributed to this project?"
    },
    {
      type: "input",
      name: "tests",
      message: "Please type out tests you can run on your project."
    }
  ])
  .then(function(data) {
        let contentReadme = `# ${data.title} \n ${data.description} \n## Table of Contents \n* Installation \n* Usage \n* License \n* Contributing \n* Tests \n* Questions \n## Installation \n${data.installation} \n## Usage \n${data.usage} \n## License \n${data.license} \n## Contributing \n${data.contributing} \n## Tests \n${data.tests}`;

        fs.writeFile("README.md", contentReadme, function(err) {
        if (err) {
            return console.log(err);
        }
        console.log("Success!");
        })
    })
    .catch(function(err) {
      console.log(err);
    
  });
