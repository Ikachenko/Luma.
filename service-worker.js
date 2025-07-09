chrome.runtime.onInstalled.addListener(() => {
    const pinnedSites = [];
    chrome.storage.sync.set({ pinnedSites }, () => {
        console.log("Pinned sites array initialized in storage.");    
    });
    const settings = {
        askBeforeDelete: true,
    };
    chrome.storage.sync.set({ settings }, () => {
        console.log("Settings array initialized in storage.");
    });
});
