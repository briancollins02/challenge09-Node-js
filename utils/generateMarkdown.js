// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  } else if (license = 'MIT'){
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`
  } else {
    return `[[![License: ${license.replaceAll('_',' ')}](https://img.shields.io/badge/License-${license}-blue.svg)]`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  } else if (license === 'MIT') {
    return 'https://opensource.org/licenses/MIT';
  } else if (license === 'GPL_v2') {
    return 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html';
  } else if (license === 'Apache_2.0') {
    return 'https://opensource.org/licenses/Apache-2.0';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  } else {
    return `## License
    This project was created under the ${license} license. for more information, click the badge at the top.`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  [${renderLicenseBadge(data.license)}](${renderLicenseLink(data.license)})

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  This app was created under the ${data.license} license.

  ## Tests
  ${data.tests}

  ## Questions
  Follow me on GitHub: [${data.gitHub}](https://github.com/${data.gitHub})

  Contact me at ${data.eMail}
`;
}

module.exports = generateMarkdown;
