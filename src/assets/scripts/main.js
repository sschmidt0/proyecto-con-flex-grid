/**
 * Import dependencies from node_modules
 * see commented examples below
 */
import "Bootstrap";



// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

// Activate "Tancar" button (page Lletres de cançons)
$(".c-overlay-gallery-grid__inner__button-tancar").click(hideOverlay);
$(document).keydown(event => {
    if (event.keyCode === 27) hideOverlay();
})

function hideOverlay() {
    $(".c-overlay-gallery-grid").css("display", "none");
}

// Activate display: block of the element which fired an event with the click method in jQuery
$(".o-gallery-grid-item").click(event => {
    let elem = event.currentTarget;
    $(elem).next("div").css("display", "block");
    event.preventDefault();
});
