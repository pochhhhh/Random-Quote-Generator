var quoteArray = [];
var randomNumber = 0;
var randomQuote = "";
var whoSaidIt = "";

//Constructor function
function Quote(quote, saidBy) {
  this.quote = '"' + quote + '"';
  this.saidBy = saidBy;
}

function generateQuote() {
  randomNumber = Math.floor(Math.random() * quoteArray.length);

  randomQuote = quoteArray[randomNumber].quote;

  whoSaidIt = "- " + quoteArray[randomNumber].saidBy;

  $("#quote").html(randomQuote);

  $("#quote").css("color", "white");
  $("#quote").css("text-shadow", "2px 1px black");

  $("#said-by").html(whoSaidIt);

  $("#said-by").css("display", "block");

  $("#said-by").css("text-shadow", "1px 1px black");
}

function changeBackground() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 15)];
  }

  $("body").animate({ backgroundColor: color }, 1200);

  $("#twitter").css("color", "white");

  $("#twitter").addClass("fa fa-twitter-square fa-4x animated slideInUp");

  $("#sig1").css("color", "white");

  $("#sigLink").css("color", "white");

  $("#sig1").css("text-shadow", "2px 1px black");

  $("#sigLink").css("text-shadow", "2px 1px black");

  $("hr").css("visibility", "visible");
}

$("#generate-button").hover(
  function() {
    $(this).addClass("highlighted-button");
  },
  function() {
    $(this).removeClass("highlighted-button");
  }
);

$("#generate-button").click(function() {
  $(this).effect("shake", { times: 8 }, 0800);

  generateQuote();
  changeBackground();
});

$("#twitter").click(function() {
  window.open(
    "https://twitter.com/intent/tweet?text=" +
      encodeURIComponent(randomQuote) +
      " -" +
      encodeURIComponent(whoSaidIt)
  );
});

//100 quotes in 10s. Starting from 1-10.

quoteArray.push(
  new Quote(
    "Music is enough for a lifetime, but a lifetime is not enough for music.",
    "Sergei Rachmaninoff"
  )
);

quoteArray.push(
  new Quote(
    "Not everything that can be counted counts, and not everything that counts can be counted.",
    "Albert Einstein"
  )
);

quoteArray.push(
  new Quote(
    "The artist is nothing without the gift, but the gift is nothing without work.",
    "Emile Zola"
  )
);

quoteArray.push(
  new Quote("Quiet people have the loudest minds.", "Stephen King")
);

quoteArray.push(
  new Quote(
    "Life is like riding a bicycle. To keep your balance, you must keep moving.",
    "Albert Einstein"
  )
);

quoteArray.push(
  new Quote(
    "The problem is not the problem. The problem is your attitude about the problem.",
    "Captain Jack Sparrow"
  )
);

quoteArray.push(
  new Quote(
    "Learn the rules like a pro so you can break them like an artist.",
    "Pablo Picasso"
  )
);

quoteArray.push(
  new Quote("Lesser artists borrow, great artists steal.", "Igor Stravinsky")
);

quoteArray.push(
  new Quote(
    "Without craftsmanship, inspiration is a mere reed shaken in the wind.",
    "Johannes Brahms"
  )
);

quoteArray.push(
  new Quote(
    "I was obliged to be industrious. Whoever is equally industrious will succeed equally well.",
    "J.S. Bach"
  )
);

// 11-20

quoteArray.push(
  new Quote(
    "If you spend too much time thinking about a thing, you'll never get it done.",
    "Bruce Lee"
  )
);

quoteArray.push(
  new Quote(
    "A goal is not always meant to be reached, it often serves simply as something to aim at.",
    "Bruce Lee"
  )
);

quoteArray.push(
  new Quote(
    "Life is 10% what happens to you and 90% how you react to it.",
    "Charles R. Swindoll"
  )
);

quoteArray.push(
  new Quote(
    "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it.",
    "Steve Jobs"
  )
);

quoteArray.push(
  new Quote(
    "I hated every minute of training, but I said 'Don't quit. Suffer now and live the rest of your life as a champion.'",
    "Muhammad Ali"
  )
);

quoteArray.push(
  new Quote(
    "He who is not courageous enough to take risks will accomplish nothing in life.",
    "Muhammad Ali"
  )
);

quoteArray.push(
  new Quote("The man who has no imagination has no wings.", "Muhammad Ali")
);

quoteArray.push(
  new Quote("Without music, life would be a mistake.", "Friedrich Nietzsche")
);

quoteArray.push(
  new Quote(
    "There are no uninteresting people in the world.",
    "Yevgeny Yevtushenko"
  )
);

quoteArray.push(
  new Quote(
    "In every real man a child is hidden that wants to play.",
    "Friedrich Nietzsche"
  )
);

//21-30

quoteArray.push(
  new Quote(
    "The future influences the present just as much as the past.",
    "Friedrich Nietzsche"
  )
);

quoteArray.push(
  new Quote(
    "Talking much about oneself can also be a means to conceal oneself.",
    "Friedrich Nietzsche"
  )
);

quoteArray.push(
  new Quote(
    "Change will not come if we wait for some other person or some other time. We are the ones we've been waiting for. We are the change that we seek.",
    "Barack Obama"
  )
);

quoteArray.push(
  new Quote(
    "If you're walking down the right path and you're willing to keep walking, eventually you'll make progress.",
    "Barack Obama"
  )
);

quoteArray.push(
  new Quote(
    "The internet is becoming the town square of the global village of tomorrow.",
    "Bill Gates"
  )
);

quoteArray.push(
  new Quote(
    "We all need people who will give us feedback. That's how we improve.",
    "Bill Gates"
  )
);

quoteArray.push(
  new Quote(
    "I believe that if you show people the problems and you show them the solutions they will be moved to act.",
    "Bill Gates"
  )
);

quoteArray.push(new Quote("I am results-oriented.", "Bill Gates"));

quoteArray.push(
  new Quote(
    "Do all the difficult things while they are easy and do the great things while they are small. A journey of a thousand miles must begin with a single step.",
    "Lao Tzu"
  )
);

quoteArray.push(
  new Quote(
    "To the mind that is still, the whole universe surrenders.",
    "Lao Tzu"
  )
);

//31-40

quoteArray.push(
  new Quote("Just play. Have fun. Enjoy the game.", "Michael Jordan")
);

quoteArray.push(
  new Quote(
    "I've missed more than 9000 shots in my career. I've lost almost 300 games. 26 times, I've been trusted to take the game winning shot and missed. I've failed over and over and over again in my life. And that is why I succeed.",
    "Michael Jordan"
  )
);

quoteArray.push(
  new Quote(
    "Some people want it to happen, some wish it would happen, others make it happen.",
    "Michael Jordan"
  )
);

quoteArray.push(
  new Quote("You have to think anyway, so why not think big?.", "Donald Trump")
);

quoteArray.push(
  new Quote(
    "Sometimes by losing a battle you find a new way to win the war.",
    "Donald Trump"
  )
);

quoteArray.push(
  new Quote(
    "When something is important enough, you do it even if the odds are not in your favour.",
    "Elon Musk"
  )
);

quoteArray.push(
  new Quote("I wish I could write as mysterious as a cat.", "Edgar Allan Poe")
);

quoteArray.push(
  new Quote("We loved with a love that was more than love.", "Edgar Allan Poe")
);

quoteArray.push(
  new Quote(
    "Dreams are often most profound when they seem the most crazy.",
    "Sigmund Freud"
  )
);

quoteArray.push(
  new Quote(
    "The mind is like an iceberg. It floats with one-seventh of its bulk above water.",
    "Sigmund Freud"
  )
);

//41-50

quoteArray.push(
  new Quote(
    "People won't have time for you if you are always angry or complaining.",
    "Stephen Hawking"
  )
);

quoteArray.push(
  new Quote(
    "Intelligence is the ability to adapt to change.",
    "Stephen Hawking"
  )
);

quoteArray.push(
  new Quote(
    "However difficult life my seem, there is always something you can do and succeed at.",
    "Stephen Hawking"
  )
);

quoteArray.push(
  new Quote(
    "The surpreme art of war is to subdue the enemy without fighting.",
    "Sun Tzu"
  )
);

quoteArray.push(
  new Quote(
    "It is our choices... that show what we truly are, far more than our abilities.",
    "J.K. Rowling"
  )
);

quoteArray.push(
  new Quote(
    "If you want to see the true measure of a man, watch how he treats his inferiors, not his equals.",
    "J.K. Rowling"
  )
);

quoteArray.push(
  new Quote("Is it a crime, to fight, for what is mine?", "Tupac Shakur")
);

quoteArray.push(
  new Quote(
    "My mama always used to tell me: 'If you can't find somethin' to live for, you best find somethin' to die for'.",
    "Tupac Shakur"
  )
);

quoteArray.push(
  new Quote(
    "Life is what happens while you are busy making other plans.",
    "John Lennon"
  )
);

quoteArray.push(
  new Quote("Risk comes from not knowing what you're doing.", "Warren Buffett")
);

// 51-60

quoteArray.push(new Quote("Art is either plagiarism or revolution."));

quoteArray.push(
  new Quote(
    "I may be drunk, Miss, but in the morning I will be sober and you will still be ugly.",
    "Winston Churchill"
  )
);

quoteArray.push(
  new Quote(
    "People who think they know everything are a great annoyance to those of us who do.",
    "Isaac Asimov"
  )
);

quoteArray.push(
  new Quote(
    "Laziness is nothing more than the habit of resting before you get tired.",
    "Jules Renard"
  )
);

quoteArray.push(
  new Quote(
    "Any girl can be glamorous. All you have to do is stand still and look stupid.",
    "Hedy Lamarr"
  )
);

quoteArray.push(
  new Quote("Reality continues to ruin my life.", "Bill Watterson")
);

quoteArray.push(
  new Quote(
    "Man cannot live by bread alone; he must have peanut butter.",
    "James A. Garfield"
  )
);

quoteArray.push(
  new Quote(
    "Do not take life too seriously. You will never get out of it alive.",
    "Elbert Hubbard"
  )
);

quoteArray.push(
  new Quote("Weather forecast for tonight: dark.", "George Carlin")
);

quoteArray.push(
  new Quote(
    "Reading is to the mind what exercise is to the body.",
    "Joseph Addison"
  )
);

//61-70

quoteArray.push(
  new Quote(
    "Problems are not the problem; coping is the problem.",
    "Virginia Satir"
  )
);

quoteArray.push(
  new Quote(
    "Strength and growth come only through continuous effort and struggle.",
    "Napoleon Hill"
  )
);

quoteArray.push(
  new Quote(
    "No one saves us but ourselves. No one can and no one may. We ourselves must walk the path.",
    "Buddha"
  )
);

quoteArray.push(new Quote("Silence is a source of great strength.", "Lao Tzu"));

quoteArray.push(
  new Quote(
    "The world is a book, and those who do not travel read only a page.",
    "Saint Augustine"
  )
);

quoteArray.push(
  new Quote(
    "Travel can be one of the most rewarding forms of introspection.",
    "Lawrence Durrell"
  )
);

quoteArray.push(
  new Quote(
    "All the traveler sees what he sees, the tourist sees what he has come to see.urneys have secret destinations of which the traveler is unaware.",
    "Martin Buber"
  )
);

quoteArray.push(
  new Quote(
    "If you want to succeed you should strike out on new paths, rather than travel the worn paths of accepted success.",
    "John D. Rockefeller"
  )
);

quoteArray.push(
  new Quote(
    "Exploration is really the essence of the human spirit.",
    "Frank Borman"
  )
);

quoteArray.push(
  new Quote(
    "Never go on trips with anyone you do not love.",
    "Ernest Hemingway"
  )
);

//71-80

quoteArray.push(
  new Quote(
    "The traveler sees what he sees, the tourist sees what he has come to see.",
    "Gilbert K . Chesterton"
  )
);
quoteArray.push(
  new Quote("I like criticism. It makes you strong.", "LeBron James")
);
quoteArray.push(
  new Quote(
    "Shallow men believe in luck. Strong men believe in cause and effect.",
    "Ralph Waldo Emerson"
  )
);
quoteArray.push(
  new Quote(
    "Mastering others is strength. Mastering yourself is true power.",
    "Lao Tzu"
  )
);
quoteArray.push(
  new Quote(
    "This is no time for ease and comfort. It is time to dare and endure.",
    "Winston Churchill"
  )
);
quoteArray.push(
  new Quote("Only the gentle are ever really strong.", "James Dean")
);
quoteArray.push(
  new Quote(
    "Where there is no struggle, there is no strength.",
    "Oprah Winfrey"
  )
);
quoteArray.push(
  new Quote(
    "This is the mark of a really admirable man: steadfastness in the face of trouble.",
    "Ludwig van Beethoven"
  )
);
quoteArray.push(
  new Quote(
    "As long as we persevere and endure, we can get anything we want.",
    "Mike Tyson"
  )
);
quoteArray.push(
  new Quote(
    "My greatest strength as a consultant is to be ignorant and ask a few questions.",
    "Peter Drucker"
  )
);

//
