document.addEventListener('DOMContentLoaded', function() {
    const settingsButton = document.getElementById('settingsButton');
    var settingsWindow = document.getElementById('settings');
    var body = document.getElementById('body');


    settingsButton.addEventListener('click', function() {
        settingsWindow.classList.toggle('showSettings');
        document.querySelectorAll('body > *:not(#settings)').forEach(function(element) {
            element.style.filter = 'blur(5px)';
        });
    });

    window.addEventListener('click', function(event) {
        if  (!settings.contains(event.target)) {
            settingsWindow.classList.remove('showSettings');
            document.querySelectorAll('body > *:not(#settings)').forEach(function(element) {
                element.style.filter = 'none';
            });
        }
    });
});