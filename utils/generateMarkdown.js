// Creating a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
}

// Creating a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "none") {
    return `[License](#license)`;
  }
  return "";
}

// Creating a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "none") {
    return `## License
    This project is licensed under ${license}`;
  }
  return "";
}

// Creating a function to generate markdown for README
function generateMarkdown(data) {

  // using template literal:
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  
  ## Description
  ${data.description}
  ## Deployed Application URL
  ${data.link}
  ## Screenshot
  ![alt-text](${data.screenshot})
  ## Table of Contents
  * [Features](#features)
  * [Languages & Dependencies](#languages-and-dependencies)
  * [How to Use This Application](#how-to-use-this-application)
  * [Contributors](#contributors)
  * [Testing](#testing)
  * ${renderLicenseLink(data.license)}
  * [Questions](#questions)
  * [Demo Link Here](https://drive.google.com/file/d/1jbn0JAmfWjoOr5KAR426DF3QyKMhCrQb/view)
  
  ## Features
  ${data.features}
  ## Languages and Dependencies
  ${data.require}
  ## How to Use This Application
  ${data.usage}
  ## Contributors
  ${data.contributors}
  ## Testing
  ${data.test}
  ${renderLicenseSection(data.license)}
  ## Questions
  Please send your questions [here](mailto:${
    data.email
  }?subject=[GitHub]%20Dev%20Connect) or visit [github/${
    data.creator
  }](https://github.com/${data.creator}).
`;
}

module.exports = generateMarkdown;
