function fetchBooks() {
  // Make a fetch request to the Game of Thrones API
  return fetch('https://anapioficeandfire.com/api/books')
    .then((response) => {
      // Check if the response is okay (status in the range 200-299)
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      // Convert the response to JSON
      return response.json();
    })
    .then((books) => {
      // Call renderBooks with the fetched data
      renderBooks(books);
    })
    .catch((error) => {
      console.error('There was a problem with the fetch operation:', error);
    });
}

// Function to render the books on the page
function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach((book) => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name; // Assuming book.name is the property you want to display
    main.appendChild(h2);
  });
}

// Call fetchBooks when the DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
  fetchBooks();
});
