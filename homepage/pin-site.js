chrome.runtime.onInstalled.addEventListener(() => {
    const pinnedSites = [];
    chrome.storage.sync.set({ pinnedSites }, () => {
        console.log("Pinned sites array initialized in storage.");    
    });
});

addEventListener("DOMContentLoaded", function () {
    chrome.storage.sync.get(["pinnedSites"], (result) => {
        const pinnedSites = result.pinnedSites || [];
        console.log("Pinned sites array retrieved from chrome storage API to local array")
    });

    const pinSiteButton = document.getElementById("add-site-button");
    const pinSiteDialog = document.getElementById("pin-site-dialog");
    const pinSiteDialogContainer = document.getElementById("pin-site-dialog-container");
    const pinSiteDialogForm = this.document.getElementById("pin-site-dialog-container")
    var dialogIsActive = 0;

    pinSiteButton.addEventListener("click", function () {
        pinSiteDialog.showModal();
        document.querySelectorAll('body > *:not(#pin-site-dialog)').forEach(function(element) {
            element.style.filter = 'blur(10px)';
        });
        setTimeout(function () {
            dialogIsActive = 1;
        }, 500);
    });

    window.addEventListener("click", function (event) {
        if (!pinSiteDialogContainer.contains(event.target) && dialogIsActive == 1) {
            pinSiteDialog.close();
            document.querySelectorAll('body > *:not(#pin-site-dialog)').forEach(function(element) {
                element.style.filter = 'none';
            });
            setTimeout (function () {
                dialogIsActive = 0;
            }, 500);
        }
    });

});


