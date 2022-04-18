document.querySelector("#button").addEventListener('click',logMessage);

function logMessage(){
    
    console.log('Message');
    console.warn('Attention!');
    console.error('ERREUR!');
  }