<h1 align="center"><b>Dowell Mobile Frontend</b></h1>

[![Project Status: WIP – Initial development is in progress, but there has not yet been a stable, usable release suitable for the public.](https://www.repostatus.org/badges/latest/wip.svg)](https://github.com/maxwellwachira/dowell-mobile-frontend.git)

# Description

Implementing UI using React Native.<br>

# Table of contents

- [Prerequisites](#Prerequisites)
- [Directory Structure](#Directory-Structure)
- [Running Locally](#Setting-up-Local-Environment)
- [Acknowledgement](#Acknowledgement)
- [License](#License)

# Prerequisites

- [Node JS Installed ](https://nodejs.org/en/download/)

# Directory-Structure

    vehicle-shifter-frontend
    ├── public
    |   ├── index.html
    |	└── favicon.ico
    ├── src
    |   ├── components/
    |   ├── context/
    |   ├── hooks/
    |   ├── images/
    |   ├── pages/
    |   ├── services/
    |   ├── API.js
    |   ├── App.js
    |   ├── GlobalStyles.js
    |   └── index.js
    ├── .gitignore
    ├── package-lock.json
    ├── package.json
    └── README.md

# Setting-up-Local-Environment

### Step 1

Install Expo by running the following command on terminal

```bash
yarn global add expo-cli
```

### Step 2

clone the repository and navigate to the project directory

```bash
git clone https://github.com/maxwellwachira/vehicle-shifter-frontend.git
cd vehicle-shifter-frontend/
```

### Step 3

Check package.json file and ensure scripts are notated as below:

```bash
"scripts": {
    "start": "expo start",
    "android": "expo start --android",
    "ios": "expo start --ios",
    "web": "expo start --web"
  },
```

### Step 4

Delete the node_modules folder and any 'lock' files such as yarn.lock or package-lock.json if present.

### Step 5

Run yarn install

```bash
yarn install
```

### Step 6

final step

```bash
yarn start
```

### Step 6

Using Expo Go Client, Scan the QR Code

# Acknowledgement

Special thanks to @Patrick Limo

## <b>License</b>

[![license](https://img.shields.io/github/license/mashape/apistatus.svg?style=for-the-badge)](LICENSE)
