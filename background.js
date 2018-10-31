chrome.commands.onCommand.addListener(function(command) {
    alert();
  if (command === "Ctrl+L") { 
    console.log("Ctrl-L successful.");
  }
  else if (command === "Ctrl+M") { 
    console.log("Ctrl+M successful.");
  }
}); 