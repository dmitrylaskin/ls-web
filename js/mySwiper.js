// document.querySelector('body').addEventListener('touchstart', myTouch)
// document.querySelector('body').addEventListener('touchend', myTouch)
// document.querySelector('body').addEventListener('touchmove', myTouch)
//
// function myTouch(event) {
//     console.log('touch')
//     console.log(event)
//
// }

document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;
var yDown = null;

function getTouches(evt) {
    return evt.touches

}

function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
};

function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
            /* left swipe */
            console.log('left')

        } else {
            /* right swipe */
            console.log('right')
        }
    } else {
        if ( yDiff > 0 ) {
            /* up swipe */
            console.log('up')
        } else {
            /* down swipe */
            console.log('down')
        }
    }
    /* reset values */
    xDown = null;
    yDown = null;
};