;
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