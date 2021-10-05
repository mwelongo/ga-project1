// console.log('bonjour');


$(() => {
  // select top-picks and my-favorties
  const $topPicks = $('#top-picks')
  const $myFavorties = $('#my-favorties')
  const $displayBooks = $('<div>').addClass('display-books')
  $topPicks.append($displayBooks)

  // // Create buttons to display books

  $.ajax (
    {
      url: `https://www.googleapis.com/books/v1/volumes?q=business|entrepreneurship|innovation|startups`

    }
  ).then(
    (data) => {
      // console.log(data);
      // console.log(data.items[1].volumeInfo.title);
      for (i = 0; i < data.items.length; i++) {
        // console.log(data.items[i].volumeInfo.title);

        // div for each book (title, an img, and a button)
        const titleText = data.items[i].volumeInfo.title
        const $bookDiv = $('<button>').addClass('book-div')
        const $bookTitle = $('<p>').addClass('book-title').text(titleText)
        const $bookButton = $('<button>').addClass('book-button').text('FAVORITE')
        $bookDiv.append($bookTitle)
        $bookDiv.append($bookButton)
        $displayBooks.append($bookDiv)

        // Modal for each book to show detail + a close button + favorite button

        // on-click function for the book div
        $('button').on('click', (e) => {
          e.preventDefault()
          const $clickBook = $(e.currentTarget).val()
          console.log(`Success! You clicked on ${titleText}`);
        })
      }

    },
      () => {
        console.log('bad request');
      }
  )


})


// `https://www.googleapis.com/books/v1/volumes?q=business-economics|entrepreneurship|new-business-entreprises`
// url: `https://www.googleapis.com/books/v1/volumes?q=entrepreneurship&t=${userInput}`

// function updateCover(id, isbn) {  fetch('https://www.googleapis.com/books/v1/volumes?q=isbn:' + isbn + "&key=" + apiKey, {    method: 'get'  })  .then(response => { return response.json(); })  .then(data => {    var img = data.items[0].volumeInfo.imageLinks.thumbnail;    img = img.replace(/^http:\/\//i, 'https://');    $('#cover-' + id).attr('src', img);  })    .catch(error=> {       console.log(error);  });}
