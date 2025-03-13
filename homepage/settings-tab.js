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