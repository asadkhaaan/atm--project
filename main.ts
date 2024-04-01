#!/usr/bin/env node
import inquirer from "inquirer"
// first step we made variable if we required.
let myBalance = 50000;
let pinCode = 1111;

// so now first we start pincode.
let pinANs = await inquirer.prompt([{
    name: "pin",
    message: "please enter your pincode",
    type: "number"
}])
if (pinANs.pin === pinCode) {
    console.log("correct pin code");
}
else {
console.log("Incorrect pin code");
}
// second we made the next operations after pincode.
let operation = await inquirer.prompt([{
   name: "operations",
   message: "please select one operator",
   type: "list",
   choices: ["withdraw", "checkbalance", "fastcash"],

}])
if (operation.operations === "withdraw") {
}
// third we discuss about the amount after with draw.
let amountAns = await inquirer.prompt([{
    name: "amount",
    message: "plese enter your amount",
    type: "number"
}])
// then enter amount & current balance & remainig balance
if (amountAns.amount < myBalance) {
    myBalance -= amountAns.amount;
    console.log("Your current balance is" + myBalance);
}
else {
    console.log("Your balance is insufficent");
}
// then check the balance

if (operation.operations === "checkbalance") {
    console.log("your current balance is"  + myBalance);
}
// after check balance we made the third operations fast cash (1000 5000 & 10000)
let fastcash = await inquirer.prompt([{
    name: "fastcas",
    message: "How much you want to withdraw",
    type: "list",
    choices: ["1000", "5000", "10000"]
}])
if (fastcash.fastcas === 1000) {
    myBalance -=fastcash.fastcas;
    console.log(`your remainig balance is ${myBalance}`);
}
if (fastcash.fastcas === 5000) {
    myBalance -=fastcash.fastcas;
    console.log(`Your remainig balance is ${myBalance}`)
}
if (fastcash.fastcas === 10000) {
    myBalance -= fastcash.fastcas;
    console.log(`your remainig balance is ${myBalance}`)
}
// The End.
 





