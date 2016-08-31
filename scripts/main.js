function init() {
    console.log("Stuff");

    drawDog();
}

function drawDog() {
    var snap = Snap("#dog");

    // var head = Snap.load("images/head.svg", function(file) {
    //     snap.append(file);
    // });

    var head = snap.image("images/head.svg", 0, 0, 150, 205);
    // head.animate({
    //     width: "200px",
    //     height: "200px",
    // }, 1000);

    var body = snap.image("images/body.svg", 0, 0, 162, 176);

    // Snap.load("images/body.svg", function(file) {
    //     snap.append(file);
    // });
    //
    // Snap.load("images/foot.svg", function(file) {
    //     snap.append(file);
    // });
    //
    // Snap.load("images/shadow.svg", function(file) {
    //     snap.append(file);
    // });
}
