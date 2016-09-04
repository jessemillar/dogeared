var cellar = new Cellar();

var saveData = {};

var petting = false;

var backgroundColors = [];

var save = {
    version: 1.0,
    dog: {
        name: "Cool Heeler",
        affection: {
            level: 1,
            exp: 0
        },
        accessories: []
    }
};

var animation = {
    interval: 1000,
    head: {
        angle: 0,
        chance: 0.2,
        bounds: {
            left: -35,
            right: 35
        }
    },
    blink: {
        chance: 0.35,
        bounds: {
            left: 50,
            right: 350
        }
    },
    foot: {
        chance: 0.3,
        bounds: {
            left: -15,
            right: 15
        }
    }
};
