# Pokémon Memory Card Game

## Game Description

The Pokémon Memory Card Game is a web application built with React and Vite. In this game, players are tasked with selecting Pokémon from the PokéAPI and avoiding selecting repeated Pokémon. The goal is to accumulate as many points as possible by selecting unique Pokémon.

## Features

- **Pokémon Selection**: Players can click on the Pokémon images presented on the screen. When they select a Pokémon, it is added to their list of selected Pokémon.

- **Scoring**: The player's current score is displayed, which increases each time they select a unique Pokémon.

- **Maximum Score**: The maximum score achieved is recorded and displayed on the screen, allowing players to track their best performance.

- **Game Over**: If a player selects a Pokémon that has already been chosen before, the game is considered lost, and a defeat message is displayed.

## Usage of useEffect

This game utilizes the `useEffect` hook in React to achieve several key functionalities:

- **Random Pokémon Selection**: When the application is first loaded or when the game is reset, `useEffect` is used to fetch a random list of Pokémon from the PokéAPI.

- **Updating Maximum Score**: `useEffect` is used to check if the player's current score surpasses their previous maximum score. If it does, the maximum score is updated and displayed on the screen.

- **Game Over**: When a player selects a Pokémon, `useEffect` checks if that Pokémon has already been chosen before. If it has, the game is considered lost, and a defeat message is displayed.

## Local Execution

If you want to run the game locally on your machine, follow these steps:

1. Clone this repository to your machine:

   git clone https://github.com/yourusername/yourrepository.git

2. Navigate to the proejct directory:
   
   cd yourrespository

4. Install the project dependencies:
   
   npm install

5. Start the app:
   
   npm run dev
