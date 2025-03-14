/*    
Luma. - A Simple, clean and functional chrome homepage extension
Copyright (C) 2025 Ikachenko

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

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