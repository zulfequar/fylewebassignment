/*
    Author: Zulfequar Ali
    E-mail: ali.zulfequar92@gmail.com
    Phone: +91 9643 080818 (Jan 2019)
 */

magnify();

function magnify() {
    var winHeight = window.innerHeight;
    var currentSection;

    if(document.body.scrollTop < (winHeight/2) || document.documentElement.scrollTop < (winHeight/2) ) {
        zoomIn(0);
        zoomOut(1);
        zoomOut(2);
    }

    if(document.body.scrollTop > winHeight/2 || document.documentElement.scrollTop > winHeight/2) {
        currentSection = 1;
        zoomOut(0);
        zoomIn(1);
        zoomOut(2);
    }

    if(document.body.scrollTop > (winHeight + winHeight/2) || document.documentElement.scrollTop > (winHeight + winHeight/2)) {
        zoomOut(0);
        zoomOut(1);
        zoomIn(2);
    }
}

window.onscroll = function() {
    magnify()
};

function zoomIn(iconIndex) {
    // Getting the collection of all links
    var links = document.querySelectorAll('a');

    // Accessing the ith link
    var linki = links[iconIndex];

    if(iconIndex < 3) {
        // Getting the first child of the link tag which is an image
        var icon = linki.children[0];
        icon.style.width = '3.5rem';
        icon.style.height = '3.5rem';

        // Getting the second child of the link tag which is a paragraph
        var text = linki.children[1];
        text.style.fontSize = '.75rem';
        text.style.fontWeight = 'bold';
    }
    else {
        // Getting the first child of the link tag which is an image
        var icon = linki.children[0];
        icon.style.width = '4.5rem';
        icon.style.height = '4.5rem';
    }
}


function zoomOut(iconIndex) {
    // Getting the collection of all links
    var links = document.querySelectorAll('a');

    // Accessing the ith link
    var linki = links[iconIndex];

    if(iconIndex < 3) {
        // Getting the first child of the link tag which is an image
        var icon = linki.children[0];
        icon.style.width = '2.5rem';
        icon.style.height = '2.5rem';

        // Getting the second child of the link tag which is a paragraph
        var text = linki.children[1];
        text.style.fontSize = '.6rem';
        text.style.fontWeight = 'normal';
    }
    else {
        // Getting the first child of the link tag which is an image
        var icon = linki.children[0];
        icon.style.width = '3.5rem';
        icon.style.height = '3.5rem';
    }
}
