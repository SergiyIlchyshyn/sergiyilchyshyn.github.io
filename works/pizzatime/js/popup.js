;
(function() {
    var body = document.querySelector('body');

    var closesItemByClass = function(item, className) {
        var node = item;

        while (node) {

            if (node.classList.contains(className)) {
                return node;
            } else {
                node = node.parentElement;
                // console.log(node);
            }
        }
        return null;
    };

    var closesAttr = function(item, attr) {
        var node = item;

        while (node) {
            var attrValue = node.getAttribute(attr);
            if (attrValue) {
                return attrValue;
            } else {
                node = node.parentElement;
                // console.log(node);
            }
        }
        return null;
    };

    var showPopup = function(target) {
        target.classList.add('is-active');
    };

    var closePopup = function(target) {
        target.classList.remove('is-active');
    };
    // toggleScroll(); - забираємо scroll сторінки
    var toggleScroll = function() {
        body.classList.toggle('no-scroll');
    }

    body.addEventListener('click', function(e) {
        var target = e.target;
        // var popupClass = target.getAttribute('data-popup');
        var popupClass = closesAttr(target, 'data-popup');

        if (popupClass === null) {
            return;
        }

        e.preventDefault();
        var popup = document.querySelector('.' + popupClass);

        // console.log(popup);

        if (popup) {
            showPopup(popup);
            toggleScroll();
        }
    });

    body.addEventListener('click', function(e) {
        var target = e.target;

        if (target.classList.contains('popup__btn-close') || target.classList.contains('popup__inner')) {
            // console.log(target);
            var popup = closesItemByClass(target, 'popup');

            // console.log(popup);
            closePopup(popup);
            toggleScroll();
        }
    });

    body.addEventListener('keydown', function(e) {
        if (e.keyCode !== 27) {
            return;
        }

        var popup = document.querySelector('.popup.is-active');

        if (popup) {
            closePopup(popup);
            toggleScroll();
        }
    });
})();