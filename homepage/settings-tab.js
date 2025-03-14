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
    const settingsButtons = document.querySelectorAll('.settingsItemsContainer button');
    const settingsContents = document.querySelectorAll('.settingsContentContainer > div');

    console.log("Buttons found:", settingsButtons.length);
    settingsButtons.forEach(btn => console.log("Button ID:", btn.id));


    settingsContents.forEach(function(div) {
        div.style.display = 'none';
    });

    if (settingsContents.length > 0) {
        settingsContents[0].style.display = 'block';
    }

    settingsButtons.forEach(function(button, index) {
        if (index !== 0) {
            button.classList.add('inactive');
        }
    });

    settingsButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const n = this.getAttribute('id');
            console.log(n);

            settingsButtons.forEach(function(button, index) {
                button.classList.add('inactive');
            });
            this.classList.remove('inactive');
            

            settingsContents.forEach(function(div) {
                div.style.display = 'none';
            });

            const activeContent = document.getElementById(n + 'Content');
            if (activeContent) {
                activeContent.style.display = 'block';
            };
        });
    });

});