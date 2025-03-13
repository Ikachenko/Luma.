document.addEventListener('DOMContentLoaded', function() {
    const settingsButton = document.getElementById('settingsButton');
    var settingsWindow = document.getElementById('settings');
    var body = document.getElementById('body');
    var windowIsActive = 0;

    settingsButton.addEventListener('click', function() {
        if  (windowIsActive == 0) { 
            settingsWindow.style.display = 'block';
            settingsWindow.classList.remove('closeSettings')   
            settingsWindow.classList.add('showSettings');
            document.querySelectorAll('body > *:not(#settings)').forEach(function(element) {
                element.style.filter = 'blur(10px)';
            });
            setTimeout(function() {
                windowIsActive = 1;
            }, 1000);
        }
    });

    window.addEventListener('click', function(event) {
        if  (windowIsActive == 1) {
            if  (!settings.contains(event.target)) {
                settingsWindow.classList.add('closeSettings')
                settingsWindow.classList.remove('showSettings');
                document.querySelectorAll('body > *:not(#settings)').forEach(function(element) {
                    element.style.filter = 'none';
                    setTimeout(function() {
                        settingsWindow.style.display = 'none';
                    }, 100);
                });
                setTimeout(function() {     
                    windowIsActive = 0;
                }, 1000);
            }
        }
    });
}); 