# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Bot Battlr Code Challenge

## Overview

The Bot Collection Web App is a React-based application that allows users to view and manage a collection of bots. The app provides features such as viewing bot profiles, enlisting bots into your army, releasing bots and even discharging them from service permanently.

## Core Features

As a user, you can:

1. See profiles of all bots rendered in the Bot Collection.
2. Add an individual bot to your army by clicking on it. The selected bot will be displayed in the "Your Bot Army" component. A bot can be enlisted only once, and it does not disappear from the Bot Collection.
3. Release a bot from your army by clicking on it. The bot will be removed from the "Your Bot Army" component.
4. Discharge a bot from service forever by clicking the red button marked "x". This action will delete the bot both from the backend and from your "Your Bot Army" on the frontend.

## Installation

1. Clone the repository:

   ```bash
   git clone git@github.com:Markswell-crypto/react-bot-battlr-code-challenge-2.git
Navigate to the project directory:

    ```bash
Install the required dependencies:

    ```bash
npm install
Start Json development server:

    ```bash
npm run dev

Visit the application in your web browser at http://localhost:3000.
Explore the "Bot Collection" to view profiles of bots.
Click on a bot to view more details.
Enlist bots into your "Your Bot Army" by clicking on them.
Release bots from your "Your Bot Army" by clicking on the "Release" button.
Discharge a bot from service permanently by clicking the "x" button.
Components
BotCard.jsx: Displays details of a single bot, including their name, class, health, damage, and armor. It also provides a button to view more details.
SelectedBots.jsx: Manages the enlisted bots, allowing users to add and release them. It uses the useState hook to maintain the enlisted bots list.
BotCollection.jsx: Fetches bot data and renders a list of bot cards using the BotCard component.
BotSpecs.jsx: Displays detailed information about a selected bot, including their class, health, damage, armor, and timestamps. Users can also enlist the bot in their army from this view.
Navigation
The app uses React Router for navigation. You can navigate between the following pages:

Bot Collection: /
Your Bot Army: /your-bot-army
Bot Details: /bot/:id
Styling
Bootstrap is used for styling in the app. It provides a clean and responsive user interface.
Icon Usage
Font Awesome icons are used for displaying health, damage, and armor in the bot cards.

## License
This app is licensed under the MIT License.
Copyright (c) 2023 Markswell Osoro Ogutu

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Contact
Markswell-Crypto - osoromarkswell80@gmail.com 