document.querySelector("#myBtn").addEventListener('click',logDebug);

function logDebug(){
    
    logMessage();
  }

  function logMessage(){
    
    var r ="Message";
    console.log(r);
    r = "Attention";
    console.warn(r);
    r = "Erreur";
    console.error(r);
  }