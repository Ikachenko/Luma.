//console commands

window.help = function() {
    console.log("======================================================================\r\n\r\nLuma. List of console commands \/ functions\r\n\r\nhelp();     |     Lists all available commands\r\nshowData();     |     Print all stored data in chrome.storage API\r\ndeleteData();     |     Deletes all data in chrome.storage API, requires confirmation\r\npinnedSiteList();     |     Lists all pinned sites\r\npinSite(name, url);     |     Pins a site into the pinned sites dropdown\r\ndeletePinnedSite(index);     |     Deletes a pinned site, requires pinned site\'s index number, check using showData();\r\nthemeChange(theme);     |     Changes the homepage\'s theme\r\nlicenseShow();     |     Shows the extension\'s license\r\naskBeforeDeletingPinnedSiteToggle();     |     Toggles the ask before deleting pinned site confirmation\r\naskBeforeDeletingDataToggle();     |     Toggles the ask before deleting all data confirmation\r\n\r\n======================================================================");
};

window.licenseShow = function() {
    console.log("======================================================================\r\n\r\nLuma. - A Simple, clean and functional chrome homepage extension\r\nCopyright (C) 2025 Ikachenko\r\n\r\nThis program is free software: you can redistribute it and\/or modify\r\nit under the terms of the GNU General Public License as published by\r\nthe Free Software Foundation, either version 3 of the License, or\r\n(at your option) any later version.\r\n\r\nThis program is distributed in the hope that it will be useful,\r\nbut WITHOUT ANY WARRANTY; without even the implied warranty of\r\nMERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\r\nGNU General Public License for more details.\r\n\r\nYou should have received a copy of the GNU General Public License\r\nalong with this program.  If not, see <https:\/\/www.gnu.org\/licenses\/>.\r\n\r\n======================================================================");
};

window.menuShow = function() {
    console.log("__        __   _                            _          _                            \r\n\\ \\      \/ \/__| | ___ ___  _ __ ___   ___  | |_ ___   | |   _   _ _ __ ___   __ _   \r\n \\ \\ \/\\ \/ \/ _ \\ |\/ __\/ _ \\| \'_ ` _ \\ \/ _ \\ | __\/ _ \\  | |  | | | | \'_ ` _ \\ \/ _` |  \r\n  \\ V  V \/  __\/ | (_| (_) | | | | | |  __\/ | || (_) | | |__| |_| | | | | | | (_| |_ \r\n   \\_\/\\_\/ \\___|_|\\___\\___\/|_| |_| |_|\\___|  \\__\\___\/  |_____\\__,_|_| |_| |_|\\__,_(_)");
    console.log("\r\n       \u2591\u2591\u2593\u2593\u2593\u2593\u2593\u2593        \r\n         \u2591\u2591\u2591\u2591\u2592\u2592\u2593\u2593\u2593     \r\n            \u2591\u2591\u2591\u2592\u2592\u2593\u2593\u2593   \r\n              \u2591\u2591\u2591\u2592\u2592\u2592\u2593  \r\n                \u2591\u2591\u2592\u2592\u2593\u2593 \r\n                \u2591\u2591\u2591\u2592\u2592\u2593\u2593\r\n                 \u2591\u2591\u2592\u2592\u2593\u2593            Luma. - A simple, clean, and functional chrome homepage extension\r\n                \u2591\u2591\u2591\u2592\u2592\u2593\u2593            Made by - Ikachenko\r\n\u2591\u2591             \u2591\u2591\u2591\u2592\u2592\u2593\u2593             https:\/\/github.com\/Ikachenko\r\n\u2591\u2591\u2591\u2591         \u2591\u2591\u2591\u2591\u2592\u2593\u2593\u2593              https:\/\/instagram.com\/ika.chenko\/\r\n \u2593\u2592\u2592\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2592\u2592\u2593\u2593\u2593   \r\n  \u2593\u2593\u2592\u2592\u2591\u2592\u2591\u2592\u2592\u2591\u2592\u2591\u2592\u2593\u2593\u2593     \r\n     \u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593        \r\n");
    console.log("======================================================================\r\n\r\nHello, welcome to Luma. user!\r\nThrough this console you can do many things, including all the functions in the homepage, just without the button!\r\nPaste the function\/command below to get started\r\n\r\nhelp();\r\n\r\n======================================================================")
};

window.showData = function() {
    chrome.storage.sync.get(null, (result) => {
        console.log("All data stored in chrome.storage.sync\r\n" + JSON.stringify(result, null, 2));
    });
};

window.deleteData = function() {
    chrome.storage.sync.clear(() => {
        initializeStorage();
    });
};

//Helper functions
function initializeStorage() {
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
};