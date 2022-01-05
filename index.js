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

const menuBtn = document.getElementById("toggleBtn")
const menu = document.getElementById("collapseMenu")
const menuItems = document.querySelectorAll(".dropdown-item")

menuBtn.addEventListener("click", (event) => {
  menu.classList.toggle("show")
});

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    menu.classList.toggle("show")
  });
});
