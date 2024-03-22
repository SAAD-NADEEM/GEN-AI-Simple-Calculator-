#! /usr/bin/env node

import inquirer from "inquirer";

console.log("=========================")
console.log("Simple Calculator Project")
console.log("=========================")

const answer = await inquirer.prompt([
  { message: "Enter First Number", type: "number", name: "firstnumber" },
  { message: "Enter Second Number", type: "number", name: "secondnumber" },
  {
    message: "Select one of the operators to perform action",
    type: "list",
    name: "operators",
    choices: ["Addition", "Substraction", "Multiplication", "Division"],
  },
]);


if  (answer.operators == "Addition")
    if ((answer.firstnumber >= 10) && (answer.secondnumber >= 10))
            {
                console.log("============")
                console.log("== Result ==")
                console.log("============")
                console.log(answer.firstnumber +" + "+ answer.secondnumber +" is: ",)
                console.log(answer.firstnumber + answer.secondnumber)
                console.log("============")
            }
    else
            {
                console.log("==========")
                console.log("= Result =")
                console.log("==========")
                console.log(answer.firstnumber +" + "+ answer.secondnumber +" is: ",)
                console.log(answer.firstnumber + answer.secondnumber)
                console.log("==========")
            }
else if (answer.operators == "Substraction")
    if ((answer.firstnumber >= 10) && (answer.secondnumber >= 10))
    {
        console.log("============")
        console.log("== Result ==")
        console.log("============")
        console.log(answer.firstnumber +" + "+ answer.secondnumber +" is: ",)
        console.log(answer.firstnumber - answer.secondnumber)
        console.log("============")
    }
    else
    {
        console.log("==========")
        console.log("= Result =")
        console.log("==========")
        console.log(answer.firstnumber +" + "+ answer.secondnumber +" is: ",)
        console.log(answer.firstnumber - answer.secondnumber)
        console.log("==========")
    }
else if (answer.operators == "Multiplication")
    if ((answer.firstnumber >= 10) && (answer.secondnumber >= 10))
    {
        console.log("============")
        console.log("== Result ==")
        console.log("============")
        console.log(answer.firstnumber +" + "+ answer.secondnumber +" is: ",)
        console.log(answer.firstnumber * answer.secondnumber)
        console.log("============")
    }
    else
    {
        console.log("==========")
        console.log("= Result =")
        console.log("==========")
        console.log(answer.firstnumber +" + "+ answer.secondnumber +" is: ",)
        console.log(answer.firstnumber * answer.secondnumber)
        console.log("==========")
    }
else if (answer.operators == "Division")
    if ((answer.firstnumber >= 10) && (answer.secondnumber >= 10))
    {
        console.log("============")
        console.log("== Result ==")
        console.log("============")
        console.log(answer.firstnumber +" + "+ answer.secondnumber +" is: ",)
        console.log(answer.firstnumber / answer.secondnumber)
        console.log("============")
    }
    else
    {
        console.log("==========")
        console.log("= Result =")
        console.log("==========")
        console.log(answer.firstnumber +" + "+ answer.secondnumber +" is: ",)
        console.log(answer.firstnumber / answer.secondnumber)
        console.log("==========")
    }
else 
    {
        console.log("Please Select A Valid Operator")
    }