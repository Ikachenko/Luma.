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
            const ElementNumber = i + 1;
            numberElement.textContent = ElementNumber + ".";
            numberElement.style.gridColumn = "1";
            pinnedSiteListItem.appendChild(numberElement);

            const nameElement = document.createElement("p");
            nameElement.textContent = name;
            nameElement.style.gridColumn = "2";
            pinnedSiteListItem.appendChild(nameElement);

            const urlElement = document.createElement("p");
            urlElement.textContent = url;
            urlElement.style.gridColumn = "3";
            pinnedSiteListItem.appendChild(urlElement);

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

                const urlElement = document.createElement("p");
                urlElement.textContent = url;
                urlElement.style.gridColumn = "3 / 3";
                urlElement.classList.add("pinned-site-list-item-content");  
                pinnedSiteListItem.appendChild(urlElement);

                pinnedSiteListItem.style.backgroundColor = (elementNumber % 2 === 0)? "#3e3e43" : "#0b0b0b";

                pinnedSiteListContainer.appendChild(pinnedSiteListItem);
            }
        });
    });
});