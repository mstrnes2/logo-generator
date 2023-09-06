  # logo-generator

  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

  ## Description

  This project prompts the user to get a color, a shape, some characters, and text color to create a logo. This is a node based application that generates a logo when getting the information from the user and creates an svg file.

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Test](#test)
  - [Question](#questions)

  ## Installation

  N/A

  ## Usage

  This project is used to quickly create a logo for the user. Answers some prompts to customize your logo and see it after is has been created!

  ## License

  This project is licensed under the an MIT License.

  ## Contributing

  GitHub

  ## Test

  test('should render a blue triangle', () => {
    const shape = new Triangle();
    shape.setColor("blue");
    expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
   });

  test('should render a red circle', () => {
    const shape = new Circle();
    shape.setColor('red');
    expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="red" />`);
    });

  test('should render a green square', () => {
    const shape = new Square();
    shape.setColor('green');
    expect(shape.render()).toEqual(`<rect x="90" y="40" width="120" height="120" fill="green" />`);
   });


  ## Questions

  If you have any questions, please email me at: mstrnes2@gmail.com

  If you would like to see more of my work, my GitHub link is [mstrnes2](https://github.com/mstrnes2)