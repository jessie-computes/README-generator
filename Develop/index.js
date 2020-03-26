const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const util = require("util")

//use a map function to save data for each question to a new array of objects
const questions = [];
const dataObj = [];
var avatarURL = "";

inquirer
    .prompt({
        message: "Enter your GitHub username.",
        name: "username"
    })  
    .then(function({ username }) {
        const queryUrl = `https://api.github.com/users/${username}`;
        axios
            .get(queryUrl)
            .then(function(response){
                dataObj.push(response.data);
                avatarURL = response.data.avatar_url
                
            })            
            .catch(function(err){
                console.log(err)
            });
    })
    .catch(function(err){
        console.log(err)
    });


// function writeToFile(fileName, data) {}

// function init() {}

// init();
