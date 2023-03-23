const url = "https://opentdb.com/api_config.php"


const form  = document.querySelector("form")
const BASE_URL = "https://opentdb.com/api.php?amount=10"
form.addEventListener("submit", (event)=>{
    event.preventDefault();

    fetch(BASE_URL)
    .then((response) => response.json())
    .then((json) => {
        json.results.forEach((result) =>{
            showTriviaResults(result)
        })
    })
    .catch(showError(error));

})

const showTriviaResults = (result) => {
  let main = document.querySelector('main')
  let article = document.createElement('article');
  article.setAttribute('class', 'card');
  article.style.borderRadius = '8px';
  let h2 = document.createElement('h2');
  h2.innerText = result.category
  let paragraph = document.createElement('p');
  paragraph.innerText = result.question
  let button = document.createElement('button');
  button.innerText = 'Show Answer'
  let ansParagraph = document.createElement('p');
  ansParagraph.innerText = result.correct_answer
  ansParagraph.classList.add("hidden");
  article.append(h2)
  article.append(paragraph)
  article.append(button)
  article.append(ansParagraph)
  main.append(article)
  let correctAnsButtons = document.querySelectorAll('article.button')
  for (let i = 0; i < correctAnsButtons.length; i++) {
    const correctAnsButton = correctAnsButtons[i];
    addEventListener('click', (event) => {
      ansParagraph.classList.remove('hidden')
    })
  }
}

const showError = (error) => {

}


const correctAnswers = (e) => {

}
const difficulty = () => {

}