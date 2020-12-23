;
(function() {
    var catalog = document.querySelector('.catalog');

    if (catalog === null) {
        return;
    }

    var changeProductSize = function(target) {
        var product = myLib.closesItemByClass(target, 'product').textContent;
        var previousBtnActive = product.querySelector('.product__size.is-active');

        previousBtnActive.classList.remove('is-active');
        target.classList.add('is-active');

        changeCheckerPosition(target, checker);
    };

    var changeCheckerPosition = function(target, checker) {
        checker.style.transform = 'translate(' + target.offsetLeft + 'px' + ', 0)';
    };

    catalog.addEventListener('click', function(e) {
        var target = e.target;

        if (target.classList.contains('product__size') && !target.classList.contains('is-active')) {
            e.preventDefault();
            changeProductSize(target);
        }
    });

    var timers = {};

    catalog.addEventListener('mousemove', function(e) {
        var target = e.target;
        var parent = myLib.closesItemByClass(target, 'product__sizes');

        if (parent === null) {
            return;
        }

        var product = myLib.closesItemByClass(target, 'product');
        var productTitle = product.querySelector('.product__title').textContent;

        if (timers[productTitle]) {
            clearTimeout(timers[productTitle]);
        }

        currentItem = parent;
        var checker = parent.querySelector('.product__checker');

        if (target.classList.contains('product__size')) {
            changeCheckerPosition(target, checker);
        }
    });

    catalog.addEventListener('mouseout', function(e) {
        var target = e.target;
        var parent = myLib.closesItemByClass(target, 'product__sizes');
        if (parent === null) {
            return;
        }

        var parent = target.parentNode;
        var activeBtn = parent.querySelector('.product__size.is-active');
        var checker = parent.querySelector('.product__checker');
        var product = myLib.closesItemByClass(target, 'product');
        var productTitle = product.querySelector('.product__title').textContent;

        if (timers[productTitle]) {
            clearTimeout(timers[productTitle]);
        }

        timers[productTitle] = setTimeout(function() {
            changeCheckerPosition(activeBtn, checker);
        }, 150);
    });
})();