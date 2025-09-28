document.addEventListener('DOMContentLoaded', function() {
    const root = document.querySelector(':root');

    function themeChange(colour) {
        switch (colour) {
            case dark :
                /* Colour palette */
                root.style.setProperty('--Colour1','')
                root.style.setProperty('--Colour2','')
                root.style.setProperty('--Colour3','')

                /* Item specific colours */
                root.style.setProperty('--SearchbarColour','')
                root.style.setProperty('--PinnedSiteDividerColour','')
                root.style.setProperty('--ScrollbarColour','')

                /* Buttons */
                root.style.setProperty('--ButtonColour','')
                root.style.setProperty('--ButtonColour2','')
                root.style.setProperty('--Button2HoverColour','')

                /* Text colours */
                root.style.setProperty('--TextColour','')
                root.style.setProperty('--PlaceholderTextColour','')
            break;
        };
    };
});