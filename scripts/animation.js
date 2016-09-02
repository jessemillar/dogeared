function initAnimation() {
    wagTail(dog.animation.tail.duration); // Always wag tail, just change the speed to a random value

    var animateTimer = setInterval(function() {
        animateDog();
    }, dog.animation.interval);
}

function initTilt() {
    tiltHead(randomRange(dog.animation.head.bounds.left, dog.animation.head.bounds.right, true));
    moveFoot("left", randomRange(dog.animation.foot.bounds.left, dog.animation.foot.bounds.right, true));
    moveFoot("right", randomRange(dog.animation.foot.bounds.left, dog.animation.foot.bounds.right, true));
}

function animateDog() {
    if (Math.random() <= dog.animation.head.chance) { // Tilt head
        tiltHead(randomRange(dog.animation.head.bounds.left, dog.animation.head.bounds.right, true), dog.animation.head.duration);
    }

    if (Math.random() <= dog.animation.tail.chance) { // Change tail wagging speed
        dog.tail.duration = randomRange(dog.animation.tail.bounds.left, dog.animation.tail.bounds.right);
    }

    if (Math.random() <= dog.animation.foot.chance) { // Move feet
        var angle = randomRange(dog.animation.foot.bounds.left, dog.animation.foot.bounds.right, true);

        if (coinFlip()) {
            moveFoot("left", angle, dog.animation.foot.duration);
        } else {
            moveFoot("right", angle, dog.animation.foot.duration);
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
    dog.tail.duration = duration;

    wagTailClockwise();
}

function wagTailClockwise() {
    dog.tail.snap.animate({
        transform: "r90," + dog.x + "," + (dog.y - dog.tail.offset)
    }, dog.tail.duration, mina.easeinout, wagTailCounterClockwise);
}

function wagTailCounterClockwise() {
    dog.tail.snap.animate({
        transform: "r0," + dog.x + "," + (dog.y - dog.tail.offset)
    }, dog.tail.duration, mina.easeinout, wagTailClockwise);
}
