const inquirer = require('inquirer');
const fs = require('fs');
const {Triangle, Circle, Square} = require('./lib/shapes');
const SVG = require('./lib/svg');
const path = require('path');

const questions = [
    {
        type: 'input',
        name: 'color',
        message: 'What color would you like to use for your logo?',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'What shape would you like to use?',
        choices: ['triangle', 'circle', 'square']
    },
    {
        type: 'input',
        name: 'characters',
        message: 'What characters would you like to use for your logo?',
        validate: (text) =>
            text.length <= 3 ||
            "Please only use 3 or less characters for logo!",
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'What color text would you like to use for your logo?'
    }
    
];

inquirer.prompt(questions).then(answers => {
    let shape;
    if(answers.shape === 'triangle'){
        shape = new Triangle()

    }else if(answers.shape === 'circle'){
        shape = new Circle()
    }else{
        shape = new Square()
    }
    shape.setColor(answers.color);
    const svg = new SVG();
    svg.setText(answers.characters, answers.textColor);
    svg.setShape(shape);

    return fs.writeFile(path.join('examples', `${answers.characters}_${answers.shape}.svg`), svg.render(), (err) => {
        if(err) {
            console.log(err);
        }
        console.log("You have successfully created your svg file!");
    });
});