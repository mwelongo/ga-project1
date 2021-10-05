// console.log('bonjour');


$(() => {
  // select top-picks and my-favorties
  const $topPicksContainer = $('#top-picks')
  const $myFavorties = $('#my-favorties')
  const $displayBooks = $('<div>').addClass('display-books')
  $topPicksContainer.append($displayBooks)

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

        // div for each book (title + book button for MODAL, )
        const titleText = data.items[i].volumeInfo.title
        const $bookDiv = $('<div>').addClass('book-div')
        $displayBooks.append($bookDiv)
        // ABOUT button, which will also serve as our modal opener
        const $aboutButton = $('<button>').addClass('about-book-modal').attr('id', 'openModal').text('ABOUT BOOK')
        $bookDiv.append($aboutButton)

        const $bookTitle = $('<h3>').addClass('book-title').text(titleText)
        $bookDiv.append($bookTitle)
        // const $favoriteButton = $('<button>').addClass('favorite-button').text('FAVORITE')
        // $bookDiv.append($favoriteButton)


        // Modal for each book + CLOSE button + FAV button
        const $modalDiv = $('<div>').attr('id','modal-div')
        $bookDiv.append($modalDiv)
        const $modalTextBox = $('<div>').addClass('modal-textbox')
        $modalDiv.append($modalTextBox)

        // h2 and p in the modal
        const $modalH3 = $('<h3>').addClass('modal-h3').text(`Book Title: ${titleText}`)
        $modalTextBox.append($modalH3)

        // FAVORITE Button to move the book items to the right column
        const $favoriteButton = $('<button>').addClass('favorite-button').text('FAVORITE')
        $modalTextBox.append($favoriteButton)
        // Year, author names
        const $bookAuthor = $('<p>').addClass('author').text('Author')
        $modalTextBox.append($bookAuthor)
        const $bookYear = $('<p>').addClass('year').text('Year')
        $modalTextBox.append($bookYear)

        // Book description ==> need to find a way to cut text with a ... READ MORE
        const bookDescription = data.items[i].volumeInfo.description
        const $bookDescription = $('<p>').addClass('book-description').text(bookDescription)
        $modalTextBox.append($bookDescription)

        // CLOSE button
        const $closeBtn = $('<a>').attr('id', 'close-btn').attr('href', '#').text('CLOSE')
        $modalTextBox.append($closeBtn)

        //// MODAL FUNCTION
        /// ===============
        const openModal = () => {
          $modalDiv.css('display', 'block')
        }

        const closeModal = () => {
          $modalDiv.css('display', '')
        }

        $aboutButton.on('click', openModal)
        $closeBtn.on('click', closeModal)

        // on-click function for the book div
        // $('button').on('click', (e) => {
        //   e.preventDefault()
        //   const $clickBook = $(e.currentTarget).val()
        //   console.log(`Success! You clicked on ${titleText}`);
        // })
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
