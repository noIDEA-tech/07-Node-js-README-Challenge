// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = "";

  if(license != "None") {
    badge = "![License Badge](https://shields.io/badge/license-" + license + "-green)";
  }

  return badge;
}

function renderLicenseLink(license) {
  let licenseLink;

    switch(license) {
      case "MIT":
        licenseLink = "https://mit-license.org/";
        break;
      case "Apache 2.0":
        licenseLink =  "https://www.apache.org/licenses/LICENSE-2.0.html";
        break;
      case "BSD 3-Clause":
        licenseLink =  "https://opensource.org/licenses/BSD-3-Clause";
        break;

      default:
        licenseLink = "";
        break;
    }

    return licenseLink;
}

function renderLicenseSection(license) {
  let licenseSect = "";

  if (license != "None") {
    licenseSect += "## License\n";
    licenseSect += "Please see " + renderLicenseLink(license) +  "to get detailed information for this license\n";
  }

  return licenseSect;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const sections = ["Description", "Install", "Usage", "Contributing", "Test", "License", "Questions"];

  let markdown = "#" + data.title + "\n";

  markdown += renderLicenseBadge(data.license) + "\n";

  markdown += "## Table of Contents\n";
  for (let i=0; i<sections.length; i++) {
    if (! (sections[i] === "License" && data.license === "None")) {
      markdown += `${i + 1}.[${sections[i]}](#${sections[i][0].toLowerCase()}${sections[i].substring(1)})\n`;
    }
  }
  markdown += "\n";

  markdown += "##" + sections[0] + "\n";
  markdown += data.description + "\n";

  markdown += "##" + sections[0] + "\n";
  markdown += data.installation + "\n";

  markdown += "##" + sections[0] + "\n";
  markdown += data.usage + "\n";

  markdown += "##" + sections[0] + "\n";
  markdown += data.contribute + "\n";
  
  markdown += "##" + sections[0] + "\n";
  markdown += data.test + "\n";
  
 markdown += renderLicenseSection(data.license) + "\n";

 markdown += "##" + sections[6] + "\n";
 markdown += "You can find me [HERE](https://github.com/" + data.username + ") on Github\n";
 markdown += "Please contact me via email at " + data.email + "for more information or if you have additional questions.\n";

  return `# ${data.title}

`;
}

export default generateMarkdown;

// NANCY MOVED FROM LINE 13 - TODO: Create a function that returns the license link
// If there is no license, return an empty string
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string//