const fs = require("fs");
const inquirer = require("inquirer");
const axios = require("axios");

inquirer
.prompt ({
    type:"input",
    message: "Enter your gitHub username.",
    name: "username"
})
.then(function(username) {
    const queryUrl = `https://api.github.com/users/${username}/`;

    axios.get(queryUrl).then(function(response) {
        const {avatar_url, name, location, locurrent, url, bio, public_repos, followers, following} = response.data;
        console.log(username)
})

});

const questions = [
  
];

function writeToFile(fileName, data) {
 
}

function init() {
    
}

// init();
