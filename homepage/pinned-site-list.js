document.addEventListener('DOMContentLoaded', function() {
    const pinnedSiteListContainer = document.getElementById("pinnedSiteListContainer");

    chrome.storage.sync.get(["pinnedSites"], (result) => {
        const pinnedSites = result.pinnedSites || [];

        for (let i = 0; i < pinnedSites.length; i++) {
            const row = pinnedSites[i];
            const url = row.url;
            const name = row.name;

            const pinnedSiteListItem = document.createElement("div");
            pinnedSiteListItem.className = "pinned-site-list-item";

            const numberElement = document.createElement("p");
            const elementNumber = i + 1;
            numberElement.textContent = elementNumber + ".";
            numberElement.style.gridColumn = "1";
            numberElement.classList.add("pinned-site-list-item-content");
            pinnedSiteListItem.appendChild(numberElement);

            const nameElement = document.createElement("p");
            nameElement.textContent = name;
            nameElement.style.gridColumn = "2 / 2";
            nameElement.classList.add("pinned-site-list-item-content");
            pinnedSiteListItem.appendChild(nameElement);

            const urlElement = document.createElement("a");
            urlElement.textContent = url;
            urlElement.href = url;
            urlElement.target = "_blank";
            urlElement.style.gridColumn = "3 / 3";
            urlElement.classList.add("pinned-site-list-item-content");  
            pinnedSiteListItem.appendChild(urlElement);

            const trashButton = document.createElement("button");
            trashButton.classList.add("pinned-site-trash-button-container");
            trashButton.addEventListener("click", () => {
                deletePinnedSite(i, name);
                console.log("Delete button clicked for pinned site: " + name);
            });
            trashButton.style.gridColumn = "4 / 4";
            trashButton.className = "pinned-site-trash-button";
            const trashIcon = document.createElement("i");
            trashIcon.className = "bi bi-trash";
            trashButton.appendChild(trashIcon);
            pinnedSiteListItem.appendChild(trashButton);

            pinnedSiteListItem.style.backgroundColor = (elementNumber % 2 === 0)? "#3e3e43" : "#0b0b0b";

            pinnedSiteListContainer.appendChild(pinnedSiteListItem);
        }
    });

    chrome.storage.onChanged.addListener(() => {
        pinnedSiteListContainer.innerHTML = "";
        console.log("onchanged called (debugging)");

        chrome.storage.sync.get(["pinnedSites"], (result) => {
        const pinnedSites = result.pinnedSites || [];

            for (let i = 0; i < pinnedSites.length; i++) {
                const row = pinnedSites[i];
                const url = row.url;
                const name = row.name;

                const pinnedSiteListItem = document.createElement("div");
                pinnedSiteListItem.className = "pinned-site-list-item";

                const numberElement = document.createElement("p");
                const elementNumber = i + 1;
                numberElement.textContent = elementNumber + ".";
                numberElement.style.gridColumn = "1";
                numberElement.classList.add("pinned-site-list-item-content");
                pinnedSiteListItem.appendChild(numberElement);

                const nameElement = document.createElement("p");
                nameElement.textContent = name;
                nameElement.style.gridColumn = "2 / 2";
                nameElement.classList.add("pinned-site-list-item-content");
                pinnedSiteListItem.appendChild(nameElement);

                const urlElement = document.createElement("a");
                urlElement.textContent = url;
                urlElement.href = url;
                urlElement.target = "_blank";
                urlElement.style.gridColumn = "3 / 3";
                urlElement.classList.add("pinned-site-list-item-content");  
                pinnedSiteListItem.appendChild(urlElement);

                const trashButton = document.createElement("button");
                trashButton.classList.add("pinned-site-trash-button-container");
                trashButton.addEventListener("click", () => {
                    deletePinnedSite(i, name);
                    console.log("Delete button clicked for pinned site: " + name);
                });
                trashButton.style.gridColumn = "4 / 4";
                trashButton.className = "pinned-site-trash-button";
                const trashIcon = document.createElement("i");
                trashIcon.className = "bi bi-trash";
                trashButton.appendChild(trashIcon);
                pinnedSiteListItem.appendChild(trashButton);

                pinnedSiteListItem.style.backgroundColor = (elementNumber % 2 === 0)? "#3e3e43" : "#0b0b0b";

                pinnedSiteListContainer.appendChild(pinnedSiteListItem);
            }
        });
    });

    // Function to delete a pinned site

    const deletePinnedSiteDialog = document.getElementById("delete-site-dialog");
    const deletePinnedSiteDialogForm = document.getElementById("delete-site-dialog-container");
    const deletePinnedSiteDialogContainer = document.getElementById("delete-site-dialog-container");
    const deletePinnedSiteDialogText = document.getElementById("delete-site-dialog-text-content");


    function deletePinnedSite(index, name) {
        chrome.storage.sync.get(["settings"], (result) => {
            const settings = result.settings || {};
            switch (settings.askBeforeDelete) {
                case true:
                    deletePinnedSiteDialogText.innerText = "Are you sure you want to delete the pinned site : " + name + " ?";
                    deletePinnedSiteDialogForm.prepend(deletePinnedSiteDialogText);
                    deletePinnedSiteDialog.showModal();
                    document.getElementById('settings').style.filter = 'blur(10px)';


                    // user confirms delete
                    const confirmDeletePinnedSiteButton = (e) => {
                        e.preventDefault();
                        confirmDeletePinnedSite(index);
                        deletePinnedSiteCleanEventListeners();
                        console.log('Pinned site deleted with confirmation' + name);
                    };

                    // user clicks outside and exits dialog
                    const outsideClickExitDialog = (e) => {
                        if (!deletePinnedSiteDialogContainer.contains(e.target)) {
                            deletePinnedSiteCleanEventListeners();
                            return;
                        };
                    };

                    document.addEventListener('click', outsideClickExitDialog);
                    deletePinnedSiteDialogForm.addEventListener('submit', confirmDeletePinnedSiteButton);

                    function deletePinnedSiteCleanEventListeners() {
                        document.removeEventListener('click', outsideClickExitDialog);
                        deletePinnedSiteDialogForm.removeEventListener('submit', confirmDeletePinnedSiteButton);
                        deletePinnedSiteDialog.close();
                        document.getElementById('settings').style.filter = 'none';
                    };

                break;

                case false:
                    confirmDeletePinnedSite(index);
                    console.log("Pinned site deleted without confirmation: " + name);
            };
        });
    };
    
    function confirmDeletePinnedSite(index) {
        console.log("Pinned site deleted: " + index);
        chrome.storage.sync.get(["pinnedSites"], (result) => {
            const pinnedSites = result.pinnedSites || [];
            pinnedSites.splice(index, 1);
            chrome.storage.sync.set({ pinnedSites: pinnedSites });
        });
    };

    // Ask before delete setting

    const askBeforeDeleteSwitch = document.getElementById("askBeforeDeleteSwitch");

    chrome.storage.sync.get(["settings"], (result) => {
        const settings = result.settings || {};
        askBeforeDeleteSwitch.checked = settings.askBeforeDelete
    });

    chrome.storage.onChanged.addListener(() => {
        chrome.storage.sync.get(["settings"], (result) => {
            const settings = result.settings || {};
            askBeforeDeleteSwitch.checked = settings.askBeforeDelete;
        });
    });

    askBeforeDeleteSwitch.addEventListener("change", function() {
        console.log("Ask before delete switch changed to: " + askBeforeDeleteSwitch.checked);
        chrome.storage.sync.get(["settings"], (result) => {
            const settings = result.settings || {};
            console.log("Settings retrieved from storage: ", settings);
            settings.askBeforeDelete = askBeforeDeleteSwitch.checked;
            chrome.storage.sync.set({ settings });
        });
    });
});