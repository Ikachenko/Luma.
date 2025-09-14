chrome.runtime.onInstalled.addListener(() => {
    const pinnedSites = [];
    chrome.storage.sync.set({ pinnedSites }, () => {
        console.log("Pinned sites array initialized in storage.");    
    });
    const settings = {
        askBeforeDelete: true,
        clockFormat: "24hr",
    };
    chrome.storage.sync.set({ settings }, () => {
        console.log("Settings array initialized in storage.");
    });
});

console.log("__        __   _                            _          _                            \r\n\\ \\      \/ \/__| | ___ ___  _ __ ___   ___  | |_ ___   | |   _   _ _ __ ___   __ _   \r\n \\ \\ \/\\ \/ \/ _ \\ |\/ __\/ _ \\| \'_ ` _ \\ \/ _ \\ | __\/ _ \\  | |  | | | | \'_ ` _ \\ \/ _` |  \r\n  \\ V  V \/  __\/ | (_| (_) | | | | | |  __\/ | || (_) | | |__| |_| | | | | | | (_| |_ \r\n   \\_\/\\_\/ \\___|_|\\___\\___\/|_| |_| |_|\\___|  \\__\\___\/  |_____\\__,_|_| |_| |_|\\__,_(_)");
console.log("\r\n       \u2591\u2591\u2593\u2593\u2593\u2593\u2593\u2593        \r\n         \u2591\u2591\u2591\u2591\u2592\u2592\u2593\u2593\u2593     \r\n            \u2591\u2591\u2591\u2592\u2592\u2593\u2593\u2593   \r\n              \u2591\u2591\u2591\u2592\u2592\u2592\u2593  \r\n                \u2591\u2591\u2592\u2592\u2593\u2593 \r\n                \u2591\u2591\u2591\u2592\u2592\u2593\u2593\r\n                 \u2591\u2591\u2592\u2592\u2593\u2593            Luma. - A simple, clean, and functional chrome homepage extension\r\n                \u2591\u2591\u2591\u2592\u2592\u2593\u2593            Made by - Ikachenko\r\n\u2591\u2591             \u2591\u2591\u2591\u2592\u2592\u2593\u2593             https:\/\/github.com\/Ikachenko\r\n\u2591\u2591\u2591\u2591         \u2591\u2591\u2591\u2591\u2592\u2593\u2593\u2593              https:\/\/instagram.com\/ika.chenko\/\r\n \u2593\u2592\u2592\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2592\u2592\u2593\u2593\u2593   \r\n  \u2593\u2593\u2592\u2592\u2591\u2592\u2591\u2592\u2592\u2591\u2592\u2591\u2592\u2593\u2593\u2593     \r\n     \u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593        \r\n");
console.log("======================================================================\r\n\r\nHello, welcome to Luma. user!\r\nThrough this console you can do many things, including all the functions in the homepage, just without the button!\r\nPaste the function\/command below to get started\r\n\r\nhelp();\r\n\r\n======================================================================")