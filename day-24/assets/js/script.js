const quotes = [
  {
    quote: "The future depends on what you do today.",
    content: "Every small action you take today builds the foundation for your tomorrow.",
    author: "Mahatma Gandhi"
  },
  {
    quote: "Don’t watch the clock; do what it does. Keep going.",
    content: "Time never stops — neither should you. Keep moving toward your goal.",
    author: "Sam Levenson"
  },
  {
    quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    content: "Success and failure are both temporary — persistence defines true strength.",
    author: "Winston Churchill"
  },
  {
    quote: "Believe you can and you're halfway there.",
    content: "Self-belief is the key that unlocks every great achievement.",
    author: "Theodore Roosevelt"
  },
  {
    quote: "Push yourself, because no one else is going to do it for you.",
    content: "Your growth depends on how far you’re willing to go for yourself.",
    author: "Unknown"
  },
  {
    quote: "Dream big and dare to fail.",
    content: "Great dreams require great risks — don’t fear failure, embrace it.",
    author: "Norman Vaughan"
  },
  {
    quote: "Great things never come from comfort zones.",
    content: "Growth begins the moment you step out of what feels safe and easy.",
    author: "Roy T. Bennett"
  },
  {
    quote: "It always seems impossible until it’s done.",
    content: "What feels out of reach today becomes your reality when you persist.",
    author: "Nelson Mandela"
  }
];

let quoteContent = document.getElementsByClassName('blockquote');
let author = document.querySelector('[title]');
let content = document.querySelector('.content');
let timerDisplay = document.getElementById('timer');
let count = 0;
let timer = 3;

setInterval(() => {
  timer--;
  timerDisplay.innerText = timer;

  if (timer <= 0) {
    timer = 4
    count++;
    if (count >= quotes.length) {
      count = 0;
    }
    quoteContent[0].querySelector('#quote').innerText = quotes[count].quote;
    content.innerText = quotes[count].content;
    author.innerText = quotes[count].author;
  }
}, 1000);
