var quotes = [
  "Hello World!! My name is Lucia. Welcome to my website.", 
  "I hope that everyone is safe and sound.",
  "If you want to contribute to the contents of this site,",
  "Just send a message to the coder's email and discuss the changes you wish to make @",
  "Arnel.Imperial@metropolia.fi or go to my contact page(coming soon....).",
  "Feel free to explore my website and don't forget to give your a thumbs-up like in FB.",
  "Hello World!! My name is Lucia. Welcome to my website."
    
  ];
  
  // variable to keep track of last quote displayed
  var i = 0;
  
  // displays the next quote in the array
  var quoteTimer = function() {
    
    // if at end of array, reset
    if (i >= quotes.length) {
      i = 0;
    }
  
    // fade out previous quote, 
    // while hidden, change the text to the next quote on the array
    $('#hideShow').fadeOut(3000, function(){
      $(this).text(quotes[i]);
    });
    
    // display the quote
    $('#hideShow').fadeIn();
  
    // increment counter by one
    i++;
  }
  
  
  $(document).ready(function() {
    $('#hideShow').text(quotes[i++]); // initialize with first quote
    setInterval(quoteTimer, 10000);
  });