#!/usr/bin/env node
// The above code is a shabang which determines that this is a cli tool

import chalk from 'chalk';
import inquirer from 'inquirer';
import gradient from 'gradient-string';
import chalkAnimation from 'chalk-animation';
import figlet from 'figlet';
import { createSpinner } from 'nanospinner';

const sleep = (ms = 1000) => new Promise((r) => setTimeout(r, ms));
const sleep2 = (ms = 6000) => new Promise((r) => setTimeout(r, ms));

async function welcome(){
    const rainbowTitle = chalkAnimation.rainbow(`This is a letter from \n`);

    await sleep();
    rainbowTitle.stop();

    console.log(`
    ${chalk.bgBlue('He/she/they wants/want you to know')}
    (Write your
    multiline message.. ${chalk.bgRed('something in red to highlight)')}
    `);
}

function winner() {
    console.clear();
    figlet(`love you baby`, (err, data) => {
      console.log(gradient.pastel.multiline(data) + '\n');
  
      console.log(
        chalk.green(
          `(ending note)`
        )
      );
      process.exit(0);
    });
  }

  await welcome();
  const spinner = createSpinner('I still...').start();
  await sleep2();
  await winner();