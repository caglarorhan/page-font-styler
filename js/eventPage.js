chrome.runtime.onMessage.addListener(function(request,sender,sendResponse){
    if(request.todo == "showPageAction"){
        chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
            if (changeInfo.url) {
                chrome.pageAction.show(tabId); // default olarak icon gorunur ve aktif geldiginden buna gerek kalmadi gibi, ana sayfa erisimi var title a ekleniyor yazi olarak, cunku content script ce permission kismina scriptleri ekledik (manifest.json)
            }
        });

    }
})



// chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
//     if (changeInfo.url) {
//         chrome.pageAction.show(tabId);
//     }
// });
