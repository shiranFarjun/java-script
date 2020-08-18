function passwordValidation(password) {
    if (password.length >= 7) {
        console.log('Strong');
    } else {
        console.log('Weak.');
    }
}

function passwordValidationTernary(password) {
    return password.length >= 7 ? 'strong' : 'weak';
}

function passwordValidationAbuse(password) {
    password.length > 7 && 'Strong' | "Weak";
}

function advanced(password) {
    return password.length > 7 && /[A-Za-z]/.test(password)
        ?console.log("advanced: very Strong")
        : password.length === 7
        ?console.log("advanced: Strong")
        :console.log("advanced: Weak");
    }
advanced('63875fbh8');
advanced('638');
advanced('63875fbh8');
advanced('1234567');


passwordValidation('0587888123');
passwordValidationTernary('05878');