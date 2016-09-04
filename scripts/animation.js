function initAnimation() {
    var animateTimer = setInterval(function() {
        animate();
    }, animation.interval);
}

function initTilt() {
    tiltHead(randomRange(animation.head.bounds.left, animation.head.bounds.right, true));
    moveFoot(".foot-left", randomRange(animation.foot.bounds.left, animation.foot.bounds.right, true));
    moveFoot(".foot-right", randomRange(animation.foot.bounds.left, animation.foot.bounds.right, true));
}

function animate() {
    if (Math.random() <= animation.head.chance) { // Tilt head
        tiltHead(randomRange(animation.head.bounds.left, animation.head.bounds.right, true));
    }

    if (Math.random() <= animation.blink.chance) { // Blink
        blink(randomRange(animation.blink.bounds.left, animation.blink.bounds.right));
    }

    if (Math.random() <= animation.foot.chance) { // Move feet
        var angle = randomRange(animation.foot.bounds.left, animation.foot.bounds.right, true);

        if (coinFlip()) {
            moveFoot(".foot-left", angle);
        } else {
            moveFoot(".foot-right", angle);
        }
    }
}

function blink(duration) {
    if (!petting) {
        switchEyes(".eyes-sleepy");

        setTimeout(function() {
            switchEyes(".eyes-normal");
        }, duration);
    }
}

function tiltHead(angle) {
    animation.head.angle = angle; // Save the angle globally so we can rotate accessories and eyes

    $(".head").css({
        transform: "rotate(" + angle + "deg)",
        transformOrigin: -1 * parseInt($(".head").css("margin-left")) + "px " + -1 * parseInt($(".head").css("margin-top")) + "px"
    });
}

function moveFoot(div, angle) {
    $(div).css({
        transform: "rotate(" + angle + "deg)",
        transformOrigin: "center " + -1 * parseInt($(div).css("margin-top")) + "px"
    });
}

function heartEffect() {
    $(".heart").css({
        transform: "scale(1)"
    });

    setTimeout(function() {
        $(".heart").css({
            transform: "scale(0)"
        });
    }, 2000);
}
