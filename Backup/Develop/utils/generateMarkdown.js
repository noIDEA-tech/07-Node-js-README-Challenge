// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license || license === 'None') return '';
  
  const badges = {
      'MIT': '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)',
      'Apache 2.0': '![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)',
      'BSD 3-Clause': '![License: BSD 3-Clause](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)'
  };
  
  return badges[license] || '';
}
// TODO: Create a function that returns the license link
function renderLicenseLink(license) {
  if (!license || license === 'None') return '';
  
  const links = {
      'MIT': '(https://opensource.org/licenses/MIT)',
      'Apache 2.0': '(https://opensource.org/licenses/Apache-2.0)',
      'BSD 3-Clause': '(https://opensource.org/licenses/BSD-3-Clause)'

  };
  
   return links[license] || '';
}
// TODO: Create a function that returns the license section of README

function renderLicenseSection(license) {
  if (!license || license === 'None') return '';
  
    return `
## License

This project is licensed under the ${license} license. ${renderLicenseBadge(license)}${renderLicenseLink(license)}
`;
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}

  ${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
${data.license !== 'None' ? '* [License](#license)' : ''}
* [Contributions](#contributions)
* [Tests](#tests)
* [Questions](#questions)

## Installation

\`\`\`
${data.install}
\`\`\`

## Usage

\`\`\`
${data.usage}
\`\`\`

##Contributors

\`\`\`
${data.contributors}
\`\`\`

##tests

\`\`\`
${data.tests}
\`\`\`

\`\`\`

## Questions
 
For questions about this project, please contact me: 
[Github](https://github.com/${data.github})
[${data.email}](mailto:${data.email})

${renderLicenseSection(data.license)}
${data.license !== 'None' ? '* [License](#license)' : ''}

`;
}

export default generateMarkdown;

// NANCY MOVED FROM LINE 13 - TODO: Create a function that returns the license link
// If there is no license, return an empty string
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string//