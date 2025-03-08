document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search');
    const clearButton = document.getElementById('clearSearch');

    searchInput.addEventListener('input', function() {
        clearButton.style.opacity = this.value ? '100' : '0';
    });

    clearButton.addEventListener('click', function() {
        searchInput.value = '';
        clearButton.style.opacity = '0';
    });

    window.addEventListener('pageshow', function() {
        searchInput.value = '';
        clearButton.style.opacity = '0';
    });
});