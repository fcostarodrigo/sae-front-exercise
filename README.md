# sae-front-exercise

SAE frontend exercise

Using: ES5, AngularJS, bootstrap, and grunt.

## Installing development tools

    sudo apt-get install npm
    sudo npm update npm -g
    sudo npm install n -g
    sudo n v7.7.3
    sudo npm install grunt-cli -g
    sudo apt-get install git
    sudo npm install yarn -g

Warning: Node is installed as nodejs instead of node in some systems.
To avoid this problem in Ubuntu, install the package nodejs-legacy instead.

## Setup

1. `git clone https://github.com/fcostarodrigo/sae-front-exercise.git`
2. `cd sae-front-exercise`
3. `yarn install`

## Development

    grunt

A webserver is created on `http://localhost:8888` for testing.
Watch mode, changes in the source code triggers compilation of the project. Use
`grunt build` to disable watch mode.
The back-end is expected to be at `http://private-85ad8-querotrabalharnawpensar.apiary-mock.com/api/`.
Use `ctrl+c` to stop the process.

## Distribute

    grunt dist

Generate minified code for distribution in the `dist` directory.
Use `grunt connect:dist` to create a webserver to test the distribution.

## License

[MIT](LICENSE.md)
