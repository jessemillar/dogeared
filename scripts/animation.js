function initAnimation() {
    wagTail(animation.tail.wag.duration); // Always wag tail, just change the speed to a random value

    var animateTimer = setInterval(function() {
        animate();
    }, animation.interval);
}

function initTilt() {
    tiltHead(randomRange(animation.head.bounds.left, animation.head.bounds.right, true));
    moveFoot("left", randomRange(animation.foot.bounds.left, animation.foot.bounds.right, true));
    moveFoot("right", randomRange(animation.foot.bounds.left, animation.foot.bounds.right, true));
}

function animate() {
    if (Math.random() <= animation.head.chance) { // Tilt head
        tiltHead(randomRange(animation.head.bounds.left, animation.head.bounds.right, true), animation.head.duration);
    }

    if (Math.random() <= animation.tail.wag.chance) { // Change tail wagging speed
        animation.tail.duration = randomRange(animation.tail.wag.bounds.left, animation.tail.wag.bounds.right);
    }

    if (Math.random() <= animation.foot.chance) { // Move feet
        var angle = randomRange(animation.foot.bounds.left, animation.foot.bounds.right, true);

        if (coinFlip()) {
            moveFoot("left", angle, animation.foot.duration);
        } else {
            moveFoot("right", angle, animation.foot.duration);
        }
    }
}

function tiltHead(angle, duration) {
    if (!duration) {
        duration = 1;
    }

    dog.head.angle = angle; // Save the angle globally so we can rotate accessories and eyes

    dog.head.group.animate({
        transform: "r" + angle + "," + dog.head.x + ',' + dog.head.y
    }, duration, mina.easeinout);
}

function moveFoot(foot, angle, duration) {
    if (!duration) {
        duration = 1;
    }

    eval("dog.foot." + foot).snap.animate({
        transform: "r" + angle + "," + eval("dog.foot." + foot + ".x") + ',' + eval("dog.foot." + foot + ".y")
    }, duration, mina.easeinout);
}

function wagTail(duration) {
    animation.tail.duration = duration;

    wagTailClockwise();
}

function wagTailClockwise() {
    dog.tail.snap.animate({
        transform: "r" + animation.tail.bounds.right + "," + dog.x + "," + (dog.y - dog.tail.offset)
    }, animation.tail.duration, mina.easeinout, wagTailCounterClockwise);
}

function wagTailCounterClockwise() {
    dog.tail.snap.animate({
        transform: "r" + animation.tail.bounds.left + "," + dog.x + "," + (dog.y - dog.tail.offset)
    }, animation.tail.duration, mina.easeinout, wagTailClockwise);
}
