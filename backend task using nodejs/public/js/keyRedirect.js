// keyRedirect.js
document.addEventListener('keydown', function(event) {
    // Redirect to home page when ALT + H is pressed
    if (event.altKey && event.key === 'h') {
      window.location.href = 'home.html';
    }
    
    // Redirect to submit_message.html when ALT + S is pressed
    if (event.altKey && event.key === 'b') {
      window.location.href = 'submit_message.html';
    }
    
    // Redirect to view_messages.html when ALT + V is pressed
    if (event.altKey && event.key === 'v') {
      window.location.href = 'view_messages.html';
    }
    
  });
  