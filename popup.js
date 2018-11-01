window.onload=function(){
    document.getElementById("music-bookmark").addEventListener("click", musicBookmark);
    document.getElementById("bar-bookmark").addEventListener("click", basicBookmark);
    
	chrome.contextMenus.removeAll(function (callback){
		chrome.contextMenus.create({
			 title: "Add to bar",
			 contexts:["page"],  // ContextType
			 id:"bar",
			 onclick: basicBookmark // A callback function
			});
			chrome.contextMenus.create({	
			 title: "Add to Music",
			 contexts:["page"],   // ContextType
			 id:"music",
			 onclick: musicBookmark // A callback function
		});
	});
	chrome.contextMenus.onClicked.addListener(function(itemData) {
	  if (itemData.menuItemId == "bar")
		basicBookmark();
	  if (itemData.menuItemId == "music")
		musicBookmark();
});
	
} 
 
function musicBookmark() {
    var id = "1";
    chrome.tabs.getSelected(null,function(tab) { // null defaults to current window
        var title = tab.title;
        var url = tab.url;
        createTestBookmark(id, title, url);
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

function createTestBookmark(parentId, title, url) {
    chrome.bookmarks.create({'parentId': parentId,'title': title,'url': url})
};


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