const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
const key = "rBA81l9cggalhFmGnDCZwCh9lsDbJ554";
let url;

//selects the HTML tag with the class/tag associated with the name in ()
//returns the first element with that name
const searchTerm = document.querySelector('.search');
const startDate = document.querySelector('.start-date');
const endDate = document.querySelector('.end-date');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.prev');
const nav = document.querySelector('nav');
const section = document.querySelector('section');

//will hide the Previous/Next button before doing a search
//they show up after entering a search term and submitting
nav.style.display = 'none';
//continues to ensure that the nav is invisible till first search
//default page number = 0, so no reason to have navigation buttons
let pageNumber = 0;
let displayNav = false;
// console.log('PageNumber:', pageNumber); 

//this method will help us identify a target and then add an event listener on that target.
//submit/click are the events. such as click the next button, or using submit
//second part is the function being used after the eventListener such as nextPage function in the code
searchForm.addEventListener('submit', fetchResults);
nextBtn.addEventListener('click', nextPage);
previousBtn.addEventListener('click', previousPage);

//fires off when you click submit on the page
function fetchResults(e) {
  // console.log(e);
//preventDefault method to make sure that a request isn't actually sent.(stops the refresh)
  e.preventDefault();
//we are creating a versatile query string. The url variable is loaded with other variables and url requirements. (look up ?api-key, &, and &q=)
  url = `${baseURL}?api-key=${key}&page=${pageNumber}&q=${searchTerm.value}`;
//console logs the URL + the url title
  console.log('URL:', url);

//add the conditional statement for end date and start date
  if (startDate.value !== '') { 
//if the input fields for dates AREN'T BLANK, denoted by the !== "", the data values will be added to the URL string. It they're blank, the expressions inside of the conditionals are ignored.
    console.log(startDate.value)
    url += '&begin_date=' + startDate.value;
    //url = url + '&begin_date=' + startDate.value
  }
//See Above
  if (endDate.value !== '') {
    console.log(endDate.value)
    url += '&end_date=' + endDate.value;
  }

//make a fetch request using the NY Times URL
  fetch(url)
//create promise resolver - promise returns a response object called result
    .then(function(result) {
      console.log(result)
//the promise returns a function that converts the result into a usable json
      return result.json();
    })
//create promise resolver - create function for the json result
    .then(function(json) {
      console.log(json);
//when the Promise returns the json, we fire off the function displayResults
      displayResults(json);
    })
}


function displayResults(json) {
//the while loop will clear out any articles before new search results are added
//while loop .firstChild will check for any children nodes in the HTML section
//.removeChild will remove these children before running the rest of the function
  while (section.firstChild) {
    section.removeChild(section.firstChild);
  }

//drill down into the layers of data with the dot operator
//store specific data in a variable (articles)
//.response.docs is part of the json file
  let articles = json.response.docs;
  console.log(json.response.docs);
//articles = array
//if length of articles array = 0, will simply console.log that there is no result
  if (articles.length === 0) {
    console.log('No results');
  } else { //for loop to iterate for the length of the articles array
    for (let i = 0; i < articles.length; i++) {

//createElement method creates a variable to add a tag for HTML that can be appended later
      let article = document.createElement('article');
      let heading = document.createElement('h2');
      let link = document.createElement('a');
      let img = document.createElement('img');
      let para = document.createElement('p');
      let clearfix = document.createElement('div');
//create a current variable that holds the data of the current article as we iterate
      let current = articles[i];
      //log the current data so we can see it in the console
      console.log('Current:', current);

//link.href places an href in the "a" tag
//.web_url grabs the hyperlink for the current article out of the json result
      link.href = current.web_url;
      console.log(link); //console log the link variable

//.textContent sets the name of the clickable link
//.headline.main digs into the json file, into the headline, into the main, grabbing the text string
      link.textContent = current.headline.main;
//.textContent adds the string "Keywords: " before the createElement (span) from the for function
      para.textContent = 'Keywords: ';

//for loop that iterates through the current object, looping each keyword string
      for (let j = 0; j < current.keywords.length; j++) {
        //each time the for loop iterates it creates the <span> tag
        let span = document.createElement('span');
        //<span> text = current keyword + " "
        span.textContent += current.keywords[j].value + ' ';
        //each time the for loop iterates, adds the created <span> tag to the <p> tag
        para.appendChild(span);
      }
/* <p>Keywords: 
      <span>keyword + "space"</span>
  </p>
*/

      if (current.multimedia.length > 0) {
        img.src = 'http://www.nytimes.com/' + current.multimedia[0].url;
        img.alt = current.headline.main;
      }

      clearfix.setAttribute('class', 'clearfix');

//adds the HTML variable we defined earlier into the HTML document
      article.appendChild(heading);
      heading.appendChild(link);
      article.appendChild(img);
      article.appendChild(para);
      article.appendChild(clearfix);
      section.appendChild(article);
    }
  }

  if (articles.length === 10) {
    nav.style.display = 'block';
  } else {
    nav.style.display = 'none';
  }
}

function nextPage(e) {
  pageNumber++;
  fetchResults(e);
  console.log('Page Number:', pageNumber);
}

function previousPage(e) {
  if (pageNumber > 0) {
    pageNumber--;
    fetchResults(e);
  } else {
    return;
  }
  fetchResults(e);
  console.log('Page:', pageNumber);
}