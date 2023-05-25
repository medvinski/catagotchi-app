function handleClick(): void {
  // Perform actions when the button is clicked
  console.log('Play button clicked!');
  // You can add more logic here, such as starting a video playback or initiating a game.
}
function handleExit(): void {
  // Perform actions when the exit button is clicked
  console.log('Exit button clicked!');
  // You can add more logic here, such as cleaning up resources or closing the application.
  window.close(); // Close the window or tab to exit the application
}





// Function to set up event listeners and perform initial setup
function play(): void {
  // Add event listener to the play button
  const playButton = document.querySelector('.play-button') as HTMLButtonElement;
  playButton.addEventListener('click', handleClick);
}
function exit(): void {
  // Add event listener to the play button
  const exitButton = document.querySelector('.exit-button') as HTMLButtonElement;
  exitButton.addEventListener('click', handleExit);
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
  
}

// Call the main function to start the application
main();
