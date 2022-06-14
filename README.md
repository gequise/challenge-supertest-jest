# Supertest Jest

Framework Supertest Jest

# Installation

*Note: This tool requires [Node](http://nodejs.org/download) to be installed!* > v16.14.0

Clone the repository

    git clone <ssh url>
    
## Setup app folder

    npm init -y

## Supertest Installation

    npm install --save-dev supertest supertest-session

## Jest Installation

    npm install --save-dev jest

## Run Test

    npm test
    
### Windows vs Linux/Mac
In <./package.json> scripts section,  change the following to be windows compatible:

    "test": "jest --detectOpenHandles --force-exit "

to (**Spacing is important**)

    "test": "sh node_modules/.bin/jest --detectOpenHandles --force-exit "



## License

MIT

