var DESTROYED =             'pp-destroyed';
var VIEWING_PREFIX =        'pp-viewing';
var $window = $(window);
var $document = $(document);
var $htmlBody = $('html, body');
var $body = $('body');
var TABLE_CELL_SEL = '.pp-tableCell';
var SLIDES_WRAPPER_SEL = '.pp-tableCell';



PP.destroy = function(all){

    PP.setAllowScrolling(false);
    PP.setKeyboardScrolling(false);
    setURLHash('');
    removeTouchHandler();

    $window
        .off('hashchange', hashChangeHandler)

    $document
        .off('click touchstart', '#pp-nav a')
        .off('mouseenter', '#pp-nav li')
        .off('mouseleave', '#pp-nav li')
        .off('mouseover', options.normalScrollElements)
        .off('mouseout', options.normalScrollElements);


    if(all){
        destroyStructure();
    }
};

function destroyStructure(){

    container.css({
        'height': '',
        'position': '',
        '-ms-touch-action': '',
        'touch-action': '',
        'overflow': ''
    });

    $htmlBody.css({
        'overflow': '',
        'height': ''
    });

    // remove all of the .fp-viewing- classes
    $.each($body.get(0).className.split(/\s+/), function (index, className) {
        if (className.indexOf(VIEWING_PREFIX) === 0) {
            $body.removeClass(className);
        }
    });

    // Unwrapping content

    container.find(TABLE_CELL_SEL  + ', ' + SLIDES_WRAPPER_SEL).each(function(){
        //unwrap not being use in case there's no child element inside and its just text
        $(this).replaceWith(this.childNodes);
    });

    //scrolling the page to the top with no animation
    $htmlBody.scrollTop(0);

    //removing selectors
    $('.pp-section').each(function(){
        $(this).removeAttr('style').removeAttr('data-anchor').removeClass('pp-section active pp-table');
    })
}