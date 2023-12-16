// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let badge = "";
  let links = "";

  switch (license) {
    case "MIT":
      badge = "";
      links = "https://opensource.org/license/mit/";
      break;
    case "APACHE2.0":
      badge = "";
      links = "https://opensource.org/license/apache-2-0/";
      break;
    case "Boost1.0":
      badge = "";
      links = "https://www.boost.org/LICENSE_1_0.txt";
      break;
    case "MPL2.0":
      badge = "";
      links = "https://opensource.org/licenses/MPL-2.0";
      break;
    case "BSD2":
      badge = "";
      links = "https://opensource.org/licenses/BSD-2-Clause";
      break;
    case "BSD3":
      badge = "";
      links = "https://opensource.org/licenses/BSD-3-Clause";
      break;
    default:
      badge = "";
  }

  return badge + (links ? "\n\n" + links:links);
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ${renderLicenseLink(data.link)}
  
  ## Description
  ${data.description}
  ## Deployed Application URL
  ${data.link}
  ## Screenshot
  ![alt-text](${data.screenshot})
  ## Table of Contents
  * [Features](#features)
  * [Languages & Dependencies](#languagesanddependencies)
  * [How to Use This Application](#HowtoUseThisApplication)
  * [Contributors](#contributors)
  * [Testing](#testing)
  * [Questions](#questions)
  ## Features
  ${data.features}
  ## Languages & Dependencies
  ${data.require}
  ## How to Use This Application:
  ${data.usage}
  ## Contributors
  ${data.contributors}
  ## Testing
  ${data.test}
  ## Questions
  Please send your questions [here](mailto:${
    data.email
  }?subject=[GitHub]%20Dev%20Connect) or visit [github/${
    data.creator
  }](https://github.com/${data.creator}).
`;
}

module.exports = generateMarkdown;
