/* Velora Couture - client-side interactions
   - mobile navigation toggle (with aria-expanded)
   - product filter chips
   - on-page text search (filters product grid OR highlights manifesto)
   - global site search (announce results)
*/
(function () {
    'use strict';

    // ---------- Mobile nav toggle ----------
    var navToggle = document.getElementById('navToggle');
    var nav = document.getElementById('primaryNav');
    if (navToggle && nav) {
        navToggle.addEventListener('click', function () {
            var isOpen = nav.classList.toggle('open');
            navToggle.setAttribute('aria-expanded', String(isOpen));
            navToggle.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
        });

        // Close nav when a link inside is activated (small screens)
        nav.addEventListener('click', function (e) {
            if (e.target.tagName === 'A' && nav.classList.contains('open')) {
                nav.classList.remove('open');
                navToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // ---------- Product filter chips ----------
    var chips = document.querySelectorAll('.chip[data-filter]');
    var grid = document.getElementById('productGrid');
    var noResults = document.getElementById('noResults');

    function applyFilters() {
        if (!grid) return;
        var activeChip = document.querySelector('.chip.active');
        var filter = activeChip ? activeChip.getAttribute('data-filter') : 'all';
        var search = (document.getElementById('pageSearch') || {}).value || '';
        search = search.trim().toLowerCase();
        var visible = 0;
        Array.prototype.forEach.call(grid.querySelectorAll('.product-card'), function (card) {
            var cats = (card.getAttribute('data-category') || '').split(/\s+/);
            var searchHaystack = ((card.getAttribute('data-search') || '') + ' ' + (card.textContent || '')).toLowerCase();
            var matchesFilter = filter === 'all' || cats.indexOf(filter) !== -1;
            var matchesSearch = !search || searchHaystack.indexOf(search) !== -1;
            if (matchesFilter && matchesSearch) {
                card.style.display = '';
                visible++;
            } else {
                card.style.display = 'none';
            }
        });
        if (noResults) noResults.hidden = visible !== 0;
    }

    Array.prototype.forEach.call(chips, function (chip) {
        chip.addEventListener('click', function () {
            Array.prototype.forEach.call(chips, function (c) { c.classList.remove('active'); });
            chip.classList.add('active');
            applyFilters();
        });
    });

    // ---------- On-page text search ----------
    var pageSearch = document.getElementById('pageSearch');
    if (pageSearch) {
        pageSearch.addEventListener('input', function () {
            if (grid) {
                applyFilters();
            } else {
                // Manifesto / about: hide/show searchable sections
                var term = pageSearch.value.trim().toLowerCase();
                var sections = document.querySelectorAll('.searchable');
                var any = 0;
                Array.prototype.forEach.call(sections, function (s) {
                    var text = (s.textContent || '').toLowerCase();
                    if (!term || text.indexOf(term) !== -1) {
                        s.style.display = '';
                        any++;
                    } else {
                        s.style.display = 'none';
                    }
                });
            }
        });
    }

    // ---------- Site-wide search (announce) ----------
    var siteSearchBtn = document.getElementById('siteSearchBtn');
    var siteSearch = document.getElementById('siteSearch');
    function runSiteSearch() {
        if (!siteSearch) return;
        var q = siteSearch.value.trim();
        if (!q) {
            siteSearch.focus();
            return;
        }
        // Redirect to shop with a hash hint
        window.location.href = 'shop.html#q=' + encodeURIComponent(q);
    }
    if (siteSearchBtn) siteSearchBtn.addEventListener('click', runSiteSearch);
    if (siteSearch) {
        siteSearch.addEventListener('keydown', function (e) {
            if (e.key === 'Enter') { e.preventDefault(); runSiteSearch(); }
        });
    }

    // ---------- Pre-populate page search from hash (e.g. shop.html#q=silk) ----------
    if (window.location.hash.indexOf('q=') !== -1 && pageSearch) {
        var q = decodeURIComponent(window.location.hash.split('q=')[1] || '');
        pageSearch.value = q;
        applyFilters();
    }
})();
