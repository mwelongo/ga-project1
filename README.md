# ga-project1
GA Beaker Project 1 - Muzabel W.

ABOUT
This project uses Google Books API to develop a simple app that aggregates book recommendations for the user.
The user is able to:
- Select among the provided book options that are linked to the API
- Read details about the book, including year published, and a brief description of the book.
- Add the selected book to their favorites list

Languages / technologies used:
- HTML
- CSS, including FlexBox
- JavaScript
- jQuery
- AJAX/JSON

Approach Taken:
- I started by calling data from the APIs. I picked a collection of books on business and entrepreneurship, with the following url: https://www.googleapis.com/books/v1/volumes?q=business|entrepreneurship|innovation|startups
- For the APIs, users do not need to search for a particular book - all they need is select from the provided books to learn more and favorite the books.
- Once the API/JSON data was successfully called, I used a for-loop inside jQuery to create all elements of the books for the user. All elements that appear into the DOM are directly linked to the API (with the exception to h1 and h2 headings). Within the for-loops are the new html tags and content, buttons, as well as a modal that provides a snapshot for each book. The user clicks on the book title to see more information (opens the modal). The modal has a close button as well as the 'Add Favorite' button.
- Once a user opens the modal, they are able to add the book to favorites using the "Add Favorite" button.
- I created an empty "Favorite" div, which will be populated with the book details when the user moves the book to the div.

Project Files (installation)
- index.html: contains basic html to provide initial structure of the app. The JavaScript and CSS files have been liked to this html.
- app.js: JavaScript file used for jQuery to add contain to the app/websites, as well as AJAX to call data from the Google Books API.
- style.css: with styling for the project, including the modals.

Project live site (Netlify): https://books-picks.netlify.app


Unsolved Problems:
- My goal was for the Favorite button to be a button. When user moves a book to favorites, the books gets added to the button, but doesn't display on the main page. I wanted the user to be able to click on the display button to see their list of favorites.
- The modal is only display from one position on the screen. I tried to play with different display options, but I didn't seem to fully solve this issue.
- The Google Books API isn't fully working as expected. For example, some times when you refresh it shows less books, and some times it shows more. 
