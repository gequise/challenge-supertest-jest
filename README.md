# Supertest Jest

Framework Supertest Jest

Tener instalado node https://nodejs.org/en/ > v16.14.0

## Setup app folder

    $ npm init -y

## Supertest Installation

    $ npm install --save-dev supertest supertest-session

## Jest Installation

    $ npm install --save-dev jest

## Test

    $ npm test
    
### Windows vs Linux/Mac
In <./package.json> scripts section,  change the following to be windows compatible:

    "test": "jest --detectOpenHandles --force-exit "

to (**Spacing is important**)

    "test": "sh node_modules/.bin/jest --detectOpenHandles --force-exit "



## License

MIT

