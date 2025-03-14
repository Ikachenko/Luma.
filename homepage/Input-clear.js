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