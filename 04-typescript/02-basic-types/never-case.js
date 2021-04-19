var greet = function (friend) {
    switch (friend) {
        case 'Serval':
            return "Hello, " + friend + "!";
        case 'Caracal':
            return "Hi, " + friend + "!";
        case 'Cheetah':
            return "Hiya, " + friend + "!";
        default: {
            var check = friend;
        }
    }
};
console.log(greet('Serval'));
