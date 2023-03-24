const url = "https://opentdb.com/api_config.php"


const form  = document.querySelector("form")
const BASE_URL = "https://opentdb.com/api.php?amount=10"
form.addEventListener("submit", (event)=>{
  event.preventDefault();

  fetch(BASE_URL)
  .then((response) => response.json())
  .then((json) => {
      json.results.forEach((result) =>{
          displayTrivia(result)
          showDifficulty(result)
        })
        let triviaArticles = document.querySelectorAll('article.card')
        showCorrectAnswers(triviaArticles)
  })
  .catch(console.log());
})

const displayTrivia = (result) => {
  let main = document.querySelector('main')
  let article = document.createElement('article');
  article.setAttribute('class', 'card');
  article.style.borderRadius = '8px';
  let h2 = document.createElement('h2');
  h2.textContent = result.category
  let paragraph = document.createElement('p');
  paragraph.innerHTML = result.question
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
}


const showCorrectAnswers = (triviaArticles) => {
  let ansParagraph = document.querySelectorAll('p.hidden')
  let correctAnswerButtons = document.querySelectorAll('article>button')
  for (let i = 0; i < correctAnswerButtons.length; i++) {
    let buttonClicked = correctAnswerButtons[i];
    buttonClicked.addEventListener('click', (e) => {
      console.log(e)
      ansParagraph[i].setAttribute('class', "");
    })
  }
}


const showDifficulty = (triviaArticles) => {
  for (let i = 0; i < triviaArticles.length; i++) {
    let currentArticle = triviaArticles[i]
    console.log('currentArticle: ',currentArticle)
    if(currentArticle.difficulty === 'easy'){
      currentArticle.setAttribute('class', "green");
    } else if(currentArticle.difficulty === 'medium'){
      currentArticle.setAttribute('class', "orange");
    } else if(currentArticle.difficulty === 'hard'){
      currentArticle.setAttribute('class', "red");
    }
  }
}