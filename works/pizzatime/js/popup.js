;
(function() {
    var showPopup = function(target) {
        target.classList.add('is-active');
    };

    var closePopup = function(target) {
        target.classList.remove('is-active');
    };

    myLib.body.addEventListener('click', function(e) {
        var target = e.target;
        // var popupClass = target.getAttribute('data-popup');
        var popupClass = myLib.closesAttr(target, 'data-popup');

        if (popupClass === null) {
            return;
        }

        e.preventDefault();
        var popup = document.querySelector('.' + popupClass);

        // console.log(popup);

        if (popup) {
            showPopup(popup);
            myLib.toggleScroll();
        }
    });

    myLib.body.addEventListener('click', function(e) {
        var target = e.target;

        if (target.classList.contains('popup-close') || target.classList.contains('popup__inner')) {
            // console.log(target);
            var popup = myLib.closesItemByClass(target, 'popup');

            // console.log(popup);
            closePopup(popup);
            myLib.toggleScroll();
        }
    });

    myLib.body.addEventListener('keydown', function(e) {
        if (e.keyCode !== 27) {
            return;
        }

        var popup = document.querySelector('.popup.is-active');

        if (popup) {
            closePopup(popup);
            myLib.toggleScroll();
        }
    });
})();