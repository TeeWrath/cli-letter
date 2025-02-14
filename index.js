#!/usr/bin/env node
import os from 'os';
import chalk from 'chalk';
import inquirer from 'inquirer';
import gradient from 'gradient-string';
import chalkAnimation from 'chalk-animation';
import figlet from 'figlet';
import { createSpinner } from 'nanospinner';

const sleep = (ms = 1000) => new Promise((r) => setTimeout(r, ms));
const sleep2 = (ms = 3000) => new Promise((r) => setTimeout(r, ms));

const userName = os.userInfo().username;

async function welcome(){
    const rainbowTitle = chalkAnimation.rainbow(`This is a letter from (Your name)\n`);

    await sleep();
    rainbowTitle.stop();

    console.log(`${chalk.bgBlue('I just wanted to ask you a simple question...')}`);
    await sleep()
    figlet(`3...`, (err,data)=> {
      console.log(gradient.pastel.multiline(data) + '\n');
    })
    await sleep()
    figlet(`2...`, (err,data)=> {
      console.log(gradient.pastel.multiline(data) + '\n');
    })
    await sleep()
    figlet(`1...`, (err,data)=> {
      console.log(gradient.pastel.multiline(data) + '\n');
    })
    await sleep()
    console.clear();
    console.log(`Will you be my ${chalk.bgRed('Valentine?')}`);
}

function winner() {
    console.clear();
    figlet(`I love you ${userName}`, (err, data) => {
      console.log(gradient.pastel.multiline(data) + '\n');
  
      console.log(
        chalk.green(
          `Reasons you're the best : \n
          1. I think you're the prettiest!! \n
          2. Your smile melts my heart \n
          3. You make my day best \n
          4. My heart skips a beat when I see you \n
          5. Thank you for existing <3 \n
          6. I feel comfortable around you ;)`
        )
      );
      process.exit(0);
    });
  }

console.clear();
await welcome();
const spinner = createSpinner('A few words from me...').start();
await sleep2();
await winner();
