document.addEventListener('DOMContentLoaded', function() {
    const musicText = document.querySelector('.music-text');
    const appsText = document.querySelector('.apps-text');
    const categories = document.querySelectorAll('.category');
    let timeoutId = null;

    function togglePosition(element, shouldShowCategories) {
        clearTimeout(timeoutId);

        if (element.classList.contains('at-top')) {
            element.classList.remove('at-top');
            element.style.animation = 'moveToOriginal 0.5s forwards';

            if (element === appsText) {
                categories.forEach(cat => {
                    cat.style.transition = 'opacity 0.3s, visibility 0s';
                    cat.classList.remove('show');
                });

                timeoutId = setTimeout(() => {
                    categories.forEach(cat => {
                        cat.style.transition = '';
                        cat.style.visibility = 'hidden';
                    });
                }, 500);
            }
        } else {
            element.classList.add('at-top');
            element.style.animation = 'moveToTop 0.5s forwards';

            if (shouldShowCategories) {
                timeoutId = setTimeout(() => {
                    categories.forEach(cat => {
                        cat.style.visibility = 'visible';
                        cat.classList.add('show');
                    });
                }, 0);
            }
        }
    }

    musicText.addEventListener('click', function() {
        togglePosition(musicText, false);
    });

    appsText.addEventListener('click', function() {
        togglePosition(appsText, true);
    });

});