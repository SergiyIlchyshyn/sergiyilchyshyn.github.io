/* libs start */ ;
(function() {
    var lazyLoadInstance = new LazyLoad({
        elements_selector: ".lazy"
    });
})();
/* libs end */
/* myLIb start */
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
/* myLIb end */
/* header start */
(function() {
    if (window.matchMedia("(max-width: 992px)").matches) {
        return;
    }

    var headerPage = document.querySelector('.header');

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 0) {
            headerPage.classList.add('is-active');
        } else {
            headerPage.classList.remove('is-active');
        }
    });
})();
/* header end */
/* popup start */
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
/* popup end */
/* scrollTop start */
(function() {
    var scroll = function(target) {
        var targetTop = target.getBoundingClientRect().top;
        var scrollTop = window.pageYOffset;
        var targetOffsetTop = targetTop + scrollTop;
        var headerOffset = document.querySelector('.header').clientHeight;

        window.scrollTo(0, targetOffsetTop - headerOffset);
    }

    myLib.body.addEventListener('click', function(e) {
        var target = e.target;
        var scrollToItemClass = myLib.closesAttr(target, 'data-scroll-to');

        if (scrollToItemClass === null) {
            return;
        }
        e.preventDefault();
        var scrollToItem = document.querySelector('.' + scrollToItemClass);

        if (scrollToItem) {
            scroll(scrollToItem);
        }
    });
})();
/* scrollTop end */
/* catalog start */
(function() {
    var catalogSection = document.querySelector('.section-catalog');

    if (catalogSection === null) {
        return; // якщо помилка, то виходимо
    }

    var removeChildren = function(item) {
        while (item.firstChild) {
            item.removeChild(item.firstChild);
        }
    };

    var updateChildren = function(item, children) {
        removeChildren(item);
        for (var i = 0; i < children.length; i += 1) {
            item.appendChild(children[i]);
        }
    };

    var catalog = catalogSection.querySelector('.catalog');
    var catalogNav = catalogSection.querySelector('.catalog-nav');
    var catalogItems = catalogSection.querySelectorAll('.catalog__item');

    catalogNav.addEventListener('click', function(e) {
        var target = e.target;
        var item = myLib.closesItemByClass(target, 'catalog-nav__btn');

        if (item === null || item.classList.contains('is-active')) {
            return;
        }

        e.preventDefault();
        var filterValue = item.getAttribute('data-filter');
        var previousBtnActive = catalogNav.querySelector('.catalog-nav__btn.is-active');

        previousBtnActive.classList.remove('is-active');
        item.classList.add('is-active');

        if (filterValue === 'all') {
            updateChildren(catalog, catalogItems);
            return;
        }

        var filterItems = [];
        for (let i = 0; i < catalogItems.length; i += 1) {
            let current = catalogItems[i];
            if (current.getAttribute('data-category') === filterValue) {
                filterItems.push(current);
            }
        }
        updateChildren(catalog, filterItems);
    });
})();
/* catalog end */
/* product start */
(function() {
    var catalog = document.querySelector('.catalog');

    if (catalog === null) {
        return;
    }

    var updateProductPrice = function(product, price) {
        var productPrice = product.querySelector('.product__price-value');
        productPrice.textContent = price;
    };

    var changeProductSize = function(target) {
        var product = myLib.closesItemByClass(target, 'product');
        var previousBtnActive = product.querySelector('.product__size.is-active');
        var newPrice = target.getAttribute('data-product-size-price');

        previousBtnActive.classList.remove('is-active');
        target.classList.add('is-active');

        updateProductPrice(product, newPrice);
    };

    var changeProductOrderInfo = function(target) {
        var product = myLib.closesItemByClass(target, 'product');
        var order = document.querySelector('.popup-order');

        var productTitle = product.querySelector('.product__title').textContent;
        var productSize = product.querySelector('.product__size.is-active').textContent;
        var productPrice = product.querySelector('.product__price-value').textContent;
        var productImgSrc = product.querySelector('.product__img').getAttribute('src');

        order.querySelector('.order-info-title').setAttribute('value', productTitle);
        order.querySelector('.order-info-size').setAttribute('value', productSize);
        order.querySelector('.order-info-price').setAttribute('value', productPrice);

        order.querySelector('.order-product-title').textContent = productTitle;
        order.querySelector('.order-product-price').textContent = productPrice;
        order.querySelector('.order__size').textContent = productSize;
        order.querySelector('.order__img').setAttribute('src', productImgSrc);
    };

    catalog.addEventListener('click', function(e) {
        var target = e.target;

        if (target.classList.contains('product__size') && !target.classList.contains('is-active')) {
            e.preventDefault();
            changeProductSize(target);
        }

        if (target.classList.contains('product__btn')) {
            e.preventDefault();
            changeProductOrderInfo(target);
        }
    });
})();
/* product end */
/* productChecker start */
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
/* productChecker end */
/* form start */
(function() {
    var forms = document.querySelectorAll('.form-send');

    if (forms.length === 0) {
        return;
    }

    var serialize = function(form) {
        var items = form.querySelectorAll('input, select, textarea');
        var str = '';
        for (var i = 0; i < items.length; i += 1) {
            var item = items[i];
            var name = item.name;
            var value = item.value;
            var separator = i === 0 ? '' : '&';

            if (value) {
                str += separator + name + '=' + value;
            }
        }
        return str;
    };

    var formSend = function(form) {
        var data = serialize(form);
        var xhr = new XMLHttpRequest();
        var url = 'mail/mail.php';

        xhr.open('POST', url);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

        xhr.onload = function() {
            var activePopup = document.querySelector('.popup.is-active');

            if (activePopup) {
                activePopup.classList.remove('is-active');
            } else {
                myLib.toggleScroll();
            }

            if (xhr.response === 'success') {
                document.querySelector('.popup-thanks').classList.add('is-active');
            } else {
                document.querySelector('.popup-error').classList.add('is-active');
            }

            form.reset();
        };

        xhr.send(data);
    };

    for (var i = 0; i < forms.length; i += 1) {
        forms[i].addEventListener('submit', function(e) {
            e.preventDefault();
            var form = e.currentTarget;
            formSend(form);
        });
    }
})();
/* form end */