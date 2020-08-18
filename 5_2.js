function color(strcolor) {
    switch (strcolor) {
        case 'yellow':
            return console.log('light color');
        case 'pink':
            return console.log('light color');
        case 'orange':
            return console.log('light color');
        case 'blue':
            return console.log('dark color');
        case 'purple':
            return console.log('dark color');
        case 'brown':
            return console.log('dark color');
        default:
            return console.log('Unknown color');
    }
}
color('orange');
color('blue');
color('purple');
color('orange');
color('green');