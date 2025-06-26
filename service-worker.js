chrome.runtime.onInstalled.addListener(() => {
    const pinnedSites = [];
    chrome.storage.sync.set({ pinnedSites }, () => {
        console.log("Pinned sites array initialized in storage.");    
    });
});
