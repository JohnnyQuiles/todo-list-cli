const prompt = require('prompt-sync')({ signit: true });

const user = prompt('Welcome to the To-Do List Manager Application! Press ENTER to continue.');

console.log('==============================================');

console.log('Your to-do list is empty.');

console.log('~ Select an action ~');

const action = Number(prompt('Press [1] Create a to-do item or [2] Complete a to-do item: '));

while (true) {

    if (action === 1) {
        console.log(' ~ Creating a new to-do item ~ ');
    } if (action === 2) {
        const actionone = Number(prompt('Press ENTER to complete to-do item:'));
        
        console.log('=============================================');
        console.log('Bye !');
        break;
    }
    const input = prompt(' What is this to-do item called ? ');

    if (input === "go to the dentist") {
        console.log('You have " Go to the dentist " added to your to-do list.');
    }
    console.log('==============================================');
    console.log('You have 1 to-do item(s).');
    console.log('1. [incomplete] Go to the dentist');
    
    //====================================================================================================
    
    const action2 = Number(prompt('Press [1] Create a to-do item, [2] Complete a to-do item or [3] to delete a to-do item: '));

    if (action2 === 1) {
        console.log(' ~ Creating a new to-do item ~ ');
    } if (action2 === 2) {
        const actiontwo = Number(prompt('Press ENTER to complete to-do item:'));
        
        console.log('=============================================');
        console.log('Bye !');
        break;
    } if (action2 === 3) {
        
        const del = Number(prompt('Would you like to delete you\'re one to-do item? Press ENTER to continue.  '));
        
        console.log('==============================================');
        console.log('Your to-do list is empty.');
    
        const end = prompt('Would you like to continue? Press [1] for yes or Press [2] for no:');

    if (end === 1) {
        console.log('==============================================');
        console.log('~ Select an action ~');
    } if (end === 2) {
        console.log('=============================================');
        console.log('Bye !');
        break;
    }
    }
    //====================================================================================================
    
    const endone = Number(prompt('Press [1] Create a to-do item or [2] Complete a to-do item: '));

    if(endone === 1){
        console.log(' ~ Creating a new to-do item ~ ');
    } if(endone === 2){
        const endtwo = Number(prompt('Press ENTER to complete to-do item:'));
        
        console.log('=============================================');
        console.log('Bye !');
        break;
    }
    //====================================================================================================
    
    const inputone = prompt(' What is this to-do item called ? ');

    if (inputone === "buy groceries") {
        console.log('You have " Buy Groceries " added to your to-do list.');
    }
        console.log('=============================================');
        console.log('You have 2 to-do item(s).');
        console.log('1. [incomplete] Go to the dentist');
        console.log('2. [incomplete] Buy Groceries');
        break;
}
        //====================================================================================================
