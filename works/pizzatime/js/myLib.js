;
(function() {
    window.myLib = {};
    window.myLib.body = document.querySelector('body');

    window.myLib.closesAttr = function(item, attr) {
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

    window.myLib.closesItemByClass = function(item, className) {
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

    // toggleScroll(); - забираємо scroll сторінки
    window.myLib.toggleScroll = function() {
        myLib.body.classList.toggle('no-scroll');
    }
})();