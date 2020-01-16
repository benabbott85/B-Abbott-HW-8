const fs = require("fs");
const inquirer = require("inquirer");
const axios = require("axios");
const generateHTML =require("./generateHTML.js");
const pdf = require('html-pdf');

let color;

inquirer
.prompt ([
    {
    type:"input",
    message: "Enter your gitHub username.",
    name: "username",
    },

    {
    type: "list",
    message: "What is your favorite color?",
    name: "colorFav",
    choices: [
        "red",
        "pink",
        "blue",
        "green"
    ]

},
])
.then(function(data) {
    console.log(data);
    const {username, colorFav} = data;
    const queryUrl = `https://api.github.com/users/${username}`;

    axios.get(queryUrl).then(function(response) {
        const {avatar_url, name, location: locurrent, url, bio, public_repos, followers, following} = response.data;
        // console.log(username)
        console.log(colorFav); 
            switch (colorFav) {
                case "red":
                    color = generateHTML.colors.red;
                    break;
                case "pink":
                    color = generateHTML.colors.pink;
                case "blue":
                    color = generateHTML.colors.blue;
                    break;
                case "green":
                    color = generateHTML.colors.green;
            }
            // console.log(color)
            const testing = generateHTML.generateHTML(response.data, color);
            const options = { format: 'Letter' };
           pdf.create(testing).toFile(`${username}.pdf`, function (error, result){
               if (error)return console.log(error);
               console.log(`Profile created at ${username}.pdf`)
           })    
            
        })
});




function writeToFile(fileName, data) {
 
}

function init() {

}

// init();
