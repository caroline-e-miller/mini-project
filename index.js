const fs = require('fs');

const inquirer = require('inquirer');

// name, location, bio, LinkedIn URL, and GitHub URL
inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your name?',
            name: 'username',
        },
        {
            type: 'input',
            message: 'What is your location?',
            name: 'location',
        },
        {
            type: 'input',
            message: 'What is the link to your biography?',
            name: 'biography',
        },
        {
            type: 'input',
            message: 'What is the link to your LinkedIn URL?',
            name: 'linkedin',
        },
        {
            type: 'input',
            message: 'What is the link to your GitHub URL?',
            name: 'github'
        }
    ])
    .then(() =>
        console.log("Wow, you're a super cool person.")
    )

const htmlstart = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
</head>
<body>
`;
const htmlend = `
</body>
</html>`;

const content = `<h1>succ</h1>`; //Add things here

const html = htmlstart + content + htmlend;

fs.writeFile('index.html', html, (err) => 
    err ? console.log(err) : console.log("good")
);