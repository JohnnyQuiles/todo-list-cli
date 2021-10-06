const prompt = require('prompt-sync')({ signit: true });

const user = prompt('Welcome to the To-Do List Manager Application! Press ENTER to continue.');

console.log('==============================================');

console.log('Your to-do list is empty.');

console.log('~ Select an action ~');

const action = Number(prompt('Press [1] Create a to-do item: '));

while (true) {

    if (action === 1) {
        console.log(' ~ Creating a new to-do item ~ ');
    } 
    const input = prompt(' What is this to-do item called ? ');

    if (input === "go to the dentist") {
        console.log('You have " Go to the dentist " added to your to-do list.');
    }
    console.log('==============================================');
    console.log('You have 1 to-do item(s) in your list.');
    console.log('1.[incomplete] "Go to the dentist" ');

    //====================================================================================================

    const action2 = Number(prompt('Press [4] Create a to-do item, [5] Complete a to-do item or [6] to delete a to-do item: '));

    if (action2 === 4) {
        console.log(' ~ Creating a new to-do item ~ ');
    } if (action2 === 5) {
        const actiontwo = Number(prompt('Press [1] to complete to-do item:'));

        if(actiontwo === 1) {

        console.log('=============================================');
        console.log('You completed your " Go to the dentist " item!');
        console.log('You have no to-do item(s) to complete.');
        break;
        }

        const end = Number(prompt('Would you like to continue? Press [1] for yes or Press [2] for no:'));

        if (end === 1) {
            console.log('==============================================');
            console.log('~ Select an action ~');
        } 
        else if (end === 2) {
            console.log('=============================================');
            console.log('End');
            break;
        } 
        }
        
        else if (action2 === 6) {
        
        const con = Number(prompt('Would you like to delete you\'re one to-do item? Press [1] to continue.  '));

        if(con === 1) {
        console.log('==============================================');
        console.log('Your to-do list is empty.');
        break;
        }
    }

    //========================================================================================================

    // for adding buy groceries

    const action3 = Number(prompt('Press [7] Create a to-do item: '));

    if(action3 === 7) {
        console.log('~ Creating a new to-do item ~');
    }
    const buytwo = prompt(' What is this to-do item called ? ');
    
    if (buytwo === "buy groceries") {
        console.log('You have " Buy Groceries " added to your to-do list.');
    }
    console.log('=============================================');
    console.log('You have 2 to-do item(s).');
    console.log('1. [complete] Go to the dentist');
    console.log('2. [incomplete] Buy Groceries');
    console.log('=============================================');

    const action4 = Number(prompt('Press [4] Create a to-do item, [5] Complete a to-do item: '));

    if (action4 === 4) {
        console.log(' ~ Creating a new to-do item ~ ');
        break;
    } if (action4 === 5) {
        const actionthree = Number(prompt('Press [1] to complete to-do item:'));

        if(actionthree === 1) {

        console.log('=============================================');
        console.log('You completed your " Buy Groceries " item!');
        console.log('You have no to-do item(s) to complete.');
        break;
        }
    console.log('=============================================');
    console.log('You have 2 to-do item(s).');
    console.log('1. [complete] Go to the dentist');
    console.log('2. [complete] Buy Groceries');
    console.log('=============================================');
    break;
// the end
}

}









