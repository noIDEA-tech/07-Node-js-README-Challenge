
function renderLicenseBadge(license) {
  if (!license || license === 'None') return '';
  
  const badges = {
      'MIT': '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)',
      'Apache 2.0': '![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)',
      'BSD 3-Clause': '![License: BSD 3-Clause](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)'
  };
  
  return badges[license] || '';
}

function renderLicenseLink(license) {
  if (!license || license === 'None') return '';
  
  const links = {
      'MIT': '(https://opensource.org/licenses/MIT)',
      'Apache 2.0': '(https://opensource.org/licenses/Apache-2.0)',
      'BSD 3-Clause': '(https://opensource.org/licenses/BSD-3-Clause)'

  };
  
   return links[license] || '';

}

function renderLicenseSection(license) {
  if (!license || license === 'None') return '';
  
    return `
## License

This project is licensed under the ${license} license. ${renderLicenseBadge(license)}${renderLicenseLink(license)}
`;
}

function generateMarkdown(data) {
    return `# ${data.title}

  ${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
${data.license !== 'None' ? '* [License](#license)' : ''}
* [Questions](#questions)
* [Contributors](#contributors)
* [Tests](#tests)

## Installation
\`\`\`
${data.install}
\`\`\`
 
## Usage
To use this application, run the following command:
\`\`\`
${data.usage}
\`\`\`

${renderLicenseSection(data.license)}

## Contributors
\`\`\`
${data.contributors}
\`\`\`

## Tests
\`\`\`
${data.tests}
\`\`\`
 
## Questions
For questions about this project, please contact me at: 
[Github](https://github.com/${data.github}),
[${data.email}](mailto:${data.email})
 
 
`;
}

export default generateMarkdown;


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// TODO: Create a function that returns the license link
// TODO: Create a function that returns the license link
// TODO: Create a function that returns the license section of README
// NANCY MOVED FROM LINE 13 - TODO: Create a function that returns the license link
// If there is no license, return an empty string
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string//