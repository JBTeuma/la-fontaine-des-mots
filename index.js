const cards = document.querySelectorAll(".card-trip");
const books = document.querySelectorAll("#books-show>.container");

cards.forEach((card) => {
  card.addEventListener("click", (event) => {
    event.preventDefault()

    const dataContentActive = event.currentTarget.dataset.contentActive

    cards.forEach((card) => {
      card.classList.remove("active-book")
    });
    books.forEach((book) => {
      book.classList.remove("active-book")
    });

    const newActive = document.getElementById(dataContentActive)

    newActive.classList.add("active-book")

    event.currentTarget.classList.add("active-book")

    window.scrollTo(0, 0);
  });
});
