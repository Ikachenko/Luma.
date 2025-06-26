document.addEventListener('DOMContentLoaded', function() {
    const deleteDataButton = document.getElementById('deleteDataButton');

    deleteDataButton.addEventListener('click', function() {
        chrome.storage.sync.clear(() => {
            console.log('All data cleared from storage.');
            const pinnedSites = [];
            chrome.storage.sync.set({ pinnedSites }, () => {
                console.log("Pinned sites array initialized in storage.");    
            }); 
        });
    });
});