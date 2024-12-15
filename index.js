const readline = require('readline');
const colordata = require('./data.js');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const detectColorByHex = (hexCode) => {
    hexCode = hexCode.replace('#', '').toUpperCase().trim();

    for (const [colorKey, hexValues] of Object.entries(colordata)) {
        if (hexValues.map(val => val.replace('#', '').toUpperCase()).includes(hexCode)) {
            const colorNames = {
                rd: 'Red',
                gr: 'Green',
                bl: 'Blue',
                yll: 'Yellow',
                wh: 'White',
            };
            return colorNames[colorKey];
        }
    }

    return 'Unknown color';
};

rl.question('Please enter a HEX color code (e.g., #FF0000): ', (input) => {
    const hexPattern = /^#?[0-9A-Fa-f]{6}$/;
    if (hexPattern.test(input)) {
        const color = detectColorByHex(input);
        console.log(`The color corresponding to ${input} is: ${color}`);
    } else {
        console.log('Invalid HEX code. Please enter a valid code like #FF0000.');
    }

    rl.close();
});