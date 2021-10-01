console.log('bonjour');


// $(() => {
//   $('form').on('submit', (e) => {
//     e.preventDefault();
//     console.log(e);
//   })
//
// })


$(() => {
  $('form').on('submit', (e) => {
    e.preventDefault()

    const userInput = $("input[type='text']").val()

    $.ajax (
      {
        url: `https://www.googleapis.com/books/v1/volumes?q=entrepreneurship&t=${userInput}`
      }
    ).then(
      (data) => {
        console.log(data.items[0].volumeInfo.title);
        // $('#top-books').html(data.items[0])
        // $('#year').html(data.Year)
        // $('#rated').html(data.Rated)
      },
      () => {
        console.log('bad request');
      }
    )
  })
})


// `https://www.googleapis.com/books/v1/volumes?q=business-economics|entrepreneurship|new-business-entreprises`
