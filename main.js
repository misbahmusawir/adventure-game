import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blue("Wellcome to Adventure game"));
//------------------Game variable---------------------
let enemies = ["Skeleton", "Zombie", "Worrior", "Assassin"];
let maxEnemyHealth = 75;
let enemyAttackDamageToHero = 25;
//----------------Player Variable------------------
let heroHealth = 100;
let attackDamageToEnemy = 50;
let numHealthPortion = 3;
let healthPortionHealAmount = 30;
let healthPortionDropChance = 50;
// ------------------------While loop condition-------------------------
let gameRuning = true;
console.log(chalk.red("Wellcome to DeadZone!!"));
Game: while (gameRuning) {
    let enemyHealth = Math.floor(Math.random() * maxEnemyHealth + 1);
    let enemyIndex = Math.floor(Math.random() * enemies.length);
    let enemy = enemies[enemyIndex];
    console.log(`# ${enemy} has appeared #\n`);
    while (enemyHealth > 0) {
        console.log(`Your Health is ${heroHealth}`);
        console.log(`${enemy} Health: ${enemyHealth}`);
        let option = await inquirer.prompt({
            name: "ans",
            type: "list",
            message: "What would you like to do?",
            choices: ["1. Attack", "2. Take Health Portion", "3. Run"]
        });
        if (option.ans === "1. Attack") {
            let damageToEnemy = Math.floor(Math.random() * attackDamageToEnemy + 1);
            let damageToHero = Math.floor(Math.random() * enemyAttackDamageToHero + 1);
            enemyHealth -= damageToEnemy;
            heroHealth -= damageToHero;
            console.log(`You strike the ${enemy} for ${damageToEnemy}`);
            console.log(`${enemy} strike you for ${damageToHero}`);
            if (heroHealth < 1) {
                console.log("You have taken to much damage. You are too weak to continue");
                break;
            }
        }
        else if (option.ans === "2. Take Health Portion") {
            if (numHealthPortion > 0) {
                heroHealth += healthPortionHealAmount;
                numHealthPortion--;
                console.log(`You use health portion for ${healthPortionHealAmount}`);
                console.log(`you now have${heroHealth} Health`);
                console.log(`You have ${numHealthPortion} Health portion left.`);
            }
            else {
                console.log("You have no Health portion left.defeat enemy  for a chance to get health portion");
            }
        }
        else if (option.ans === "3. Run") {
            console.log(`you run away from ${enemy}`);
            continue Game;
        }
    }
    if (heroHealth < 1) {
        console.log("You are out from battle. you are too weak");
        break;
    }
    console.log(`${enemy} was defeated`);
    console.log(`You have ${heroHealth} health.`);
    let randomNumber = Math.floor(Math.random() * 100 + 1);
    if (randomNumber < healthPortionDropChance) {
        numHealthPortion++;
        console.log(`enemy give you health portion`);
        console.log(`Your health is ${heroHealth}`);
        console.log(`Your health portios is ${numHealthPortion}`);
    }
    let userOption = await inquirer.prompt({
        name: "ans",
        type: "list",
        message: "What would you like to do now",
        choices: ["1.Continue", "2. Exit"]
    });
    if (userOption.ans === "1.Continue") {
        console.log("You are continue on your adventure");
    }
    else {
        console.log("You successfully Exit from DeadZone");
        break;
    }
    console.log("Thank you for playing.\n");
}
