// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badgeStart = "[![License: " + license + "](";
  const linkStart = "https://img.shields.io/badge/license-";
  const linkEnd = "-blue.svg)]";
  switch (license) {
    case "GNU GPLv3":
      return badgeStart + linkStart + "GNU_GPL_v3" + linkEnd;
    case "GNU LGPLv3":
      return badgeStart + linkStart + "GNU_LGPL_v3" + linkEnd;
    case "Mozilla Public License 2.0":
      return badgeStart + linkStart + "Mozilla_Public_License_2.0" + linkEnd;
    case "Apache License 2.0":
      return badgeStart + linkStart + "Apache_License_2.0" + linkEnd;
    case "MIT License":
      return badgeStart + linkStart + "MIT_License" + linkEnd;
    case "Boost Software License 1.0":
      return badgeStart + linkStart + "Boost_Software_License_1.0" + linkEnd;
    case "The Unlicense":
      return badgeStart + linkStart + "The_Unlicense" + linkEnd;
    default:
      return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "GNU GPLv3":
      return "https://choosealicense.com/licenses/gpl-3.0/";
    case "GNU LGPLv3":
      return "https://choosealicense.com/licenses/lgpl-3.0/";
    case "Mozilla Public License 2.0":
      return "https://choosealicense.com/licenses/mpl-2.0/";
    case "Apache License 2.0":
      return "https://choosealicense.com/licenses/apache-2.0/";
    case "MIT License":
      return "https://choosealicense.com/licenses/mit/";
    case "Boost Software License 1.0":
      return "https://choosealicense.com/licenses/bsl-1.0/";
    case "The Unlicense":
      return "https://choosealicense.com/licenses/unlicense/";
    default:
      return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == "No license") {
    return "";
  }
  else {
    return `## License
    
    This project is licensed under the ${license}.`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projname}

  ## Description

  ${renderLicenseBadge(license)}(${renderLicenseLink(license)})
  ${data.projdesc}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Testing](#testing)
  - [License](#license)

  ## Installation

  ${data.projinstall}

  ## Usage

  ${data.projusage}

  ## Contributing

  ${data.projcontrib}

  ## Testing

  ${data.projtest}

  ${renderLicenseSection(data.license)}

  ## Questions

  This project was written by [${data.username}](https://github.com/${data.username}).  I can be reached via email at ${data.useremail}.

  ---

  README created with [readme-generator](https://github.com/giancarlow333/readme-generator)!
`;
}

module.exports = generateMarkdown;
