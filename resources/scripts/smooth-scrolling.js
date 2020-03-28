/**
 * Changes the default yScroll Position of a links target to match the fixed navbar height.
 * Adds a cross browser supported smooth scrolling animation
 */
$(function () {
    let navHeight = $('nav').height(); // get height of h1 tag
    // only those links that link to an id on the same page
    $('a[href^="#"]').click(function (e) {
        if (this.hash !== "") {
            e.preventDefault();

            let target = $(this.hash);
            $('html, body').animate({
                scrollTop: target.offset().top - navHeight - 40 // scroll to h3 minus height of h1
            }, 800);
            return false;
        }

    });
});
