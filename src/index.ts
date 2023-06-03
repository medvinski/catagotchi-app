
interface Question {
  question: string;
  answers: string[];
}


let catName: string = '';
let catColor: string = '';




const questions: Question[] = [
  {
    question: '${catName} is new to your house, scared and hiding under sofa',
    answers: ['Try to take him out of there forcibly', 'Make water, food, litter box available and let him hide']
  },
  {
    question: '${catName} is new to your house, scared and hiding under sofa',
    answers: ['Try to take him out of there forcibly', 'Make water, food, litter box available and let him hide']
  },
  {
    question: '${catName} is new to your house, scared and hiding under sofa',
    answers: ['Try to take him out of there forcibly', 'Make water, food, litter box available and let him hide']
  },
  {
    question: '${catName} is new to your house, scared and hiding under sofa',
    answers: ['Try to take him out of there forcibly', 'Make water, food, litter box available and let him hide']
  },
  // Add more questions as needed
];

const getRandomQuestion = (): Question => {
  const randomIndex: number = Math.floor(Math.random() * questions.length);
  const question: Question = questions[randomIndex];

  // Replace placeholders with cat attributes
  question.question = question.question.replace('${catName}', catName);
  question.question = question.question.replace('${catColor}', catColor);
  

  return question;
};

function Play(): void {
  console.log('Play button clicked!');
  const questionElement = document.getElementById('question');
  if (questionElement) {
    // Save catName, catColor, and catCharacter
    const catNameInput: HTMLInputElement | null = document.getElementById('cat-name') as HTMLInputElement;
    const catColorInput: HTMLInputElement | null = document.getElementById('cat-color') as HTMLInputElement;
    

    if (catNameInput) {
      catName = catNameInput.value;
    }

    if (catColorInput) {
      catColor = catColorInput.value;
    }

    
    console.log('Cat Name:', catName);
    console.log('Cat Color:', catColor);
    

    // Display the randomly chosen question
    const question: Question = getRandomQuestion();
    const formHTML = `
    <div class="form-container1">
        <p>${question.question}</p>
        <input type="radio" name="answer" value="${question.answers[0]}">
        <label for="option1">${question.answers[0]}</label>
        <br>
        <input type="radio" name="answer" value="${question.answers[1]}">
        <label for="option2">${question.answers[1]}</label>
        <br>
        <button type="submit" class="submit-button">Submit</button>
      </div>
    `;
    questionElement.innerHTML = formHTML;

    const submitButton = document.querySelector('.submit-button') as HTMLButtonElement;
    submitButton.addEventListener('click', handleAnswerSubmission);
  }
}

function handleAnswerSubmission(event: Event): void {
  event.preventDefault();
  const answerInputs: NodeListOf<HTMLInputElement> = document.querySelectorAll('input[type="radio"][name="answer"]');

  let selectedAnswer: string | undefined;
  for (const input of answerInputs) {
    if (input.checked) {
      selectedAnswer = input.value;
      break;
    }
  }

  console.log('Selected Answer:', selectedAnswer);

  // You can add further logic to handle the selected answer

  // Reset the variables and go back to the initial form
  catName = '';
  catColor = '';

  const questionElement = document.getElementById('question');
  if (questionElement) {
    const formHTML = `
    <div class="form-container">
    <form id="cat-form">
        <label for="cat-name">Cat name:</label>
        <input type="text" id="cat-name" required>
      </form>
      <form id="cat-form">
        <label for="cat-color">Cat color:</label>
        <input type="text" id="cat-color" required>
      </form>
      
      <button type="submit" class="save-button">Save</button>
      </div>
    `;
    questionElement.innerHTML = formHTML;
    const catForm = document.getElementById('cat-form');
    if (catForm) {
      catForm.addEventListener('submit', handleFormSubmission);
    }
  }
}

function handleFormSubmission(event: Event): void {
  event.preventDefault();
  const nameInput: HTMLInputElement | null = document.getElementById('cat-name') as HTMLInputElement;
  const colorInput: HTMLInputElement | null = document.getElementById('cat-color') as HTMLInputElement;
  const characterInput: HTMLInputElement | null = document.getElementById('cat-character') as HTMLInputElement;

  if (nameInput && colorInput && characterInput) {
    catName = nameInput.value;
    catColor = colorInput.value;
    
  }

  console.log('Cat Name:', catName);
  console.log('Cat Color:', catColor);
  

  if (nameInput && colorInput && characterInput) {
    nameInput.value = '';
    colorInput.value = '';
    characterInput.value = '';
  }

 
}


function Exit(): void {
  // Perform actions when the exit button is clicked
  console.log('Exit button clicked!');
  // You can add more logic here, such as cleaning up resources or closing the application.
  window.close(); // Close the window or tab to exit the application
}
function Help(): void {
  // Perform actions when the button is clicked
  console.log('Help button clicked!');
  // You can add more logic here, such as starting a video playback or initiating a game.
  window.alert('Your virtual pet - catagotchi app!');
}





// Function to set up event listeners and perform initial setup
function play(): void {
  // Add event listener to the play button
  const playButton = document.querySelector('.play-button') as HTMLButtonElement;
  playButton.addEventListener('click', Play);
}
function exit(): void {
  // Add event listener to the play button
  const exitButton = document.querySelector('.exit-button') as HTMLButtonElement;
  exitButton.addEventListener('click', Exit);
}
function help(): void {
  // Add event listener to the play button
  const helpButton = document.querySelector('.help-button') as HTMLButtonElement;
  helpButton.addEventListener('click', Help);
}


// Entry point of the application
function main(): void {
  // Wait for the DOM to load before initializing the application
  document.addEventListener('DOMContentLoaded', () => {
    play();
  });
  document.addEventListener('DOMContentLoaded', () => {
    exit();
  });
  document.addEventListener('DOMContentLoaded', () => {
    help();
  });
  
  
}

// Call the main function to start the application
main();
