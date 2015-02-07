function onMenuClick(info, tab) {
    chrome.tabs.create({"url": "view.html?url=" + info.linkUrl});
}

chrome.contextMenus.create({
    title: "Risky click",
    contexts: ["link"],
    "onclick": onMenuClick
});
