var cellar = new Cellar();

var canvas = {
    width: 400,
    height: 400
};

var saveData = {};

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
    foot: {
        chance: 0.3,
        bounds: {
            left: -15,
            right: 15
        }
    },
    tail: {
        chance: 0.2,
        bounds: {
            left: 250,
            right: 500,
        },
    }
};
