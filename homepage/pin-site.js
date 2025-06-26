document.addEventListener("DOMContentLoaded", function () {
    const pinSiteButton = document.getElementById("add-site-button");
    const pinSiteDialog = document.getElementById("pin-site-dialog");
    const pinSiteDialogContainer = document.getElementById("pin-site-dialog-container");
    const pinSiteDialogForm = document.getElementById("pin-site-dialog-container")
    const siteURL = document.getElementById("site-url");
    const siteName = document.getElementById("site-name");
    const pinnedSiteContainer = document.getElementById("user-pinned-sites-container");  
    var dialogIsActive = 0;

    chrome.storage.sync.get(["pinnedSites"], (result) => {
        const pinnedSites = result.pinnedSites || [];
        console.log("Pinned sites array retrieved from chrome storage API to local array")

        for (let i = 0; i <= pinnedSites.length; i++) {
            const row = pinnedSites[i];
            const url = row.url;
            const name = row.name;
    
            const pinnedSiteElement = document.createElement("a");
            pinnedSiteElement.href = url;
            pinnedSiteElement.target = "_blank";
            
            if (name.length > 8) {
            const shortenedName = name.slice(0, 5) + "...";
            pinnedSiteElement.textContent = shortenedName;
            } else {
            pinnedSiteElement.textContent = name;
            }
            
        const favicon = document.createElement("img");  
        try {
                const targetSite = new URL(url);
                favicon.src = targetSite.origin + "/favicon.ico";
                favicon.classList.add("favicon-settings");
        } catch {
                favicon.src = "";
        }
    
        favicon.onerror = function() {
                const fallbackIcon = document.createElement("i");
                fallbackIcon.className = "bi bi-app";
                pinnedSiteElement.insertBefore(fallbackIcon, pinnedSiteElement.firstChild);
                favicon.remove();
        }
        
        pinnedSiteElement.insertBefore(favicon, pinnedSiteElement.firstChild);
        pinnedSiteContainer.appendChild(pinnedSiteElement);
        }
    });


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
    
    pinSiteDialogForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const url = siteURL.value;
        const name = siteName.value;
        pinSiteDialogForm.reset();

        chrome.storage.sync.get(["pinnedSites"], (result) => {
            const pinnedSites = result.pinnedSites || [];
            pinnedSites.push({ url, name });
            chrome.storage.sync.set({ pinnedSites });
        });
    });

    chrome.storage.onChanged.addListener(() => {
        chrome.storage.sync.get(["pinnedSites"], (result) => {
            const pinnedSites = result.pinnedSites || [];
            Array.from(pinnedSiteContainer.children).forEach(child => {
                if (!child.classList.contains("notUserGen")) {
                    child.remove();
                }
            }); 

            for (let i = 0; i < pinnedSites.length; i++) {
                const row = pinnedSites[i];
                const url = row.url;
                const name = row.name;
                        
                const pinnedSiteElement = document.createElement("a");
                pinnedSiteElement.href = url;
                pinnedSiteElement.target = "_blank";

                if (name.length > 8) {
                const shortenedName = name.slice(0, 5) + "...";
                pinnedSiteElement.textContent = shortenedName;
                } else {
                pinnedSiteElement.textContent = name;
                }
                
                const favicon = document.createElement("img");
                try {
                    const targetSite = new URL(url);
                    favicon.src = targetSite.origin + "/favicon.ico";
                    favicon.classList.add("favicon-settings");
                } catch {
                    favicon.src = "";
                }

                favicon.onerror = function() {
                    const fallbackIcon = document.createElement("i");
                    fallbackIcon.className = "bi bi-app";
                    pinnedSiteElement.insertBefore(fallbackIcon, pinnedSiteElement.firstChild);
                    favicon.remove();
                }
                
                pinnedSiteElement.insertBefore(favicon, pinnedSiteElement.firstChild);
                pinnedSiteContainer.appendChild(pinnedSiteElement);
            }
        });
    }); 
});


