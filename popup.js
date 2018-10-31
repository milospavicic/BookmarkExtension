window.onload=function(){
    document.getElementById("music-bookmark").addEventListener("click", musicBookmark);
    document.getElementById("bar-bookmark").addEventListener("click", basicBookmark);
    
chrome.commands.onCommand.addListener(function (command) {
    alert(3);
    if (command === "save-to-music") {
        alert("save");
    } else if (command === "save-to-bar") {
        alert("random");
    }
});
    
} 
 
function basicBookmark() {
    var id = "1";
    chrome.tabs.getSelected(null,function(tab) { // null defaults to current window
        var title = tab.title;
        var url = tab.url;
        createTestBookmark(id, title, url);
    });
}
function musicBookmark() {
    var id = "5";
    chrome.tabs.getSelected(null,function(tab) { // null defaults to current window
        var title = tab.title;
        var url = tab.url;
        createTestBookmark(id, title, url);
    });
}
function createTestBookmark(parentId, title, url) {
    chrome.bookmarks.create({'parentId': parentId,'title': title,'url': url},
        function(newBookmark) {
            console.log("added bookmark: " + newBookmark.title);
    });
}
//var map = {}; 
//onkeydown = onkeyup = function(e){
//    e = e || event; // to deal with IE
//    map[e.keyCode] = e.type == 'keydown';
//    if (map[17] && map[18] && map[77]) {
//        alert(1);
//        map = [];
//    }
//    if (map[17] && map[18] && map[66]) {
//        alert(2);
//        basicBookmark();
//        map = [];
//    }
//    
//}