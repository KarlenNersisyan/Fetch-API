# Fetch API

## Mandatory tasks

- 1.  Create page which contains a select with options of the following dog breeds:

  - -- Select a breed --

- 2. Akita
     , Beagle
     ,Dalmatian German Shepherd Husky

  Labrador,
  Pug,
  Golden Retriever Cocker Spaniel

  When an option is selected from this list(except from “--Select a breed--”) an image of a dog
  of the selected breed should be loaded.
  To get an image use API endpoints described [here](https://dog.ceo/dog-api/documentation/breed).

- 3. Create a page to search books. For search API use this endpoint:

  http://openlibrary.org/search.json.
  There should be an input field and a button on the page. Input field is for entering book
  name and button is for searching(something like google). To search for the entered book
  you should add a parameter to the endpoint, like this: http://openlibrary.org/search.json?q=
  . If the name of the book consists of several parts like: “The lord of the rings”, then as a
  parameter its value should be the+lord+of+the +rings.

  So the final look of the endpoint when searching should be
  http://openlibrary.org/search.json?q=the+lord+.of+the+rings
  After getting the result the following information should be shown: Total count of results
  (numFound).
  The list of the results with the following fields:

  Title
  Author Name

  First publish year
  Subject (only first 5 items)

  \*\* Create pagination for this list.
  The information about pages count you can get using numFound and the f act that one
  page contains 100 results. Having that create a pagination for the list. To get information of
  the other pages use the following endpoint format:
  http://openlibrary.org/search.json?q=&page=

- 4. Use the following endpoint:

  https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fd5a87abe

  To get the information for the specific film and visualise that data using this prototype:

- 5. Create Website about countries using following 
[API](https://restcountries.eu/)

  #### Requirements:

  - Search
  - All countries list
  - Country page

## Description

_The Fetch API provides an interface for fetching resources (including across the network). It will seem familiar to anyone who has used XMLHttpRequest, but the new API provides a more powerful and flexible feature set._




### Creator

_Karlen Nersisyan_


- My

  - [Twitter](https://twitter.com/nersisyan_karl)

  - [Linkedin](https://www.linkedin.com/in/karlen-nersisyan/)

  - [Codepen](https://codepen.io/karlennersisyan/)
