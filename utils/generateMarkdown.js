// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "GNU GPLv3":
      break;
    case "GNU LGPLv3":
      break;
    case "Mozilla Public License 2.0":
      break;
    case "Apache License 2.0":
      break;
    case "MIT License":
      break;
    case "Boost Software License 1.0":
      break;
    case "The Unlicense":
      break;
    default:
      break;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "GNU GPLv3":
      break;
    case "GNU LGPLv3":
      break;
    case "Mozilla Public License 2.0":
      break;
    case "Apache License 2.0":
      break;
    case "MIT License":
      break;
    case "Boost Software License 1.0":
      break;
    case "The Unlicense":
      break;
    default:
      break;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case "GNU GPLv3":
      break;
    case "GNU LGPLv3":
      break;
    case "Mozilla Public License 2.0":
      break;
    case "Apache License 2.0":
      break;
    case "MIT License":
      break;
    case "Boost Software License 1.0":
      break;
    case "The Unlicense":
      break;
    default:
      break;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projname}

  ## Description

  ${data.projdesc}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Testing](#testing)
  - [License](#license)

  ## Installation

  ## Usage

  ## Contributing

  ## Testing

  ## License
`;
}

module.exports = generateMarkdown;
