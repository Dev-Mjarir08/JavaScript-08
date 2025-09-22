const quotes = [
    {
        title: "Believe in Yourself",
        author: "Norman Vincent Peale",
        text: "Believe in yourself! Have faith in your abilities. Without a humble but reasonable confidence, you cannot be successful or happy."
    },
    {
        title: "Keep Going",
        author: "Winston Churchill",
        text: "Success is not final, failure is not fatal: It is the courage to continue that counts."
    },
    {
        title: "Hard Work",
        author: "Colin Powell",
        text: "There are no secrets to success. It is the result of preparation, hard work, and learning from failure."
    },
    {
        title: "Dream Big",
        author: "Eleanor Roosevelt",
        text: "The future belongs to those who believe in the beauty of their dreams."
    },
    {
        title: "Courage",
        author: "Nelson Mandela",
        text: "Courage is not the absence of fear — it’s inspiring others to move beyond it."
    },
    {
        title: "Determination",
        author: "Confucius",
        text: "It does not matter how slowly you go as long as you do not stop."
    },
    {
        title: "Success",
        author: "Steve Jobs",
        text: "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work."
    },
    {
        title: "Perseverance",
        author: "Albert Einstein",
        text: "It’s not that I’m so smart, it’s just that I stay with problems longer."
    },
    {
        title: "Change",
        author: "Mahatma Gandhi",
        text: "Be the change that you wish to see in the world."
    },
    {
        title: "Happiness",
        author: "Dalai Lama",
        text: "Happiness is not something ready-made. It comes from your own actions."
    }
];

let display = document.getElementById('display');
let index = -1;

const displayQuote = (quote) => {
    display.innerHTML = '';
    let figure = document.createElement('figure');
    figure.innerHTML =
        `<blockquote class="blockquote">
            <strong>${quote.title} </strong>
            <p>${quote.text}</p>
        </blockquote>
        <figcaption class="blockquote-footer">
            <strong>${quote.author}</strong>
        </figcaption>`
        ;
    display.appendChild(figure);
}
const nextQuote = () => {
    if (index >= quotes.length - 1) {
        index = -1;
    }
    displayQuote(quotes[++index]);
}
const prevQuote = () => {
    if (index <= 0) {
        index = quotes.length;
    }
    displayQuote(quotes[--index]);
}
nextQuote();

