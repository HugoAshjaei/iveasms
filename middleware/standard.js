exports.standardPhoneNumber = standardPhoneNumber = (number) => {
    if (!isNaN(number) && !isNaN(parseFloat(number))) {
        if (number.startsWith('+989')) {
            if (number.length == 13) {
                return number;
            } else {
                throw 'Phone number is not valid';
            }
        } else if (number.startsWith('09')) {
            if (number.length == 11) {
                number = number.replace('0', '+98');
                return number;
            } else {
                throw 'Phone number is not valid';
            }
        } else if (number.startsWith('9')) {
            if (number.length == 10) {
                number = number.replace('9', '+989');
                return number;
            } else {
                throw 'Phone number is not valid';
            }
        } else {
            throw 'Phone number is not valid';
        }
    } else {
        throw 'Phone number is not valid';
    }
}

exports.standardPhoneNumberArray = (array) => {
    let str = '';
    for (const i in array) {
        if (i != array.length -1) {
            str += standardPhoneNumber(array[i]) + ',';
        } else {
            str += standardPhoneNumber(array[i])
        }
       
    }
    return str;
}