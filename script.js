const button1 = document.getElementById("button1");
button1.addEventListener("click", guess);


  const code = Math.floor(Math.random() * 100 + 100);
  counter = 0;


function guess(){
  const para = document.createElement("p");
  if(counter < 7){
    let num = prompt("enter the code");
    if(num == code){
      para.textContent = "Guess: " + num + " - your answer was correct!";
    } else if(num > code){
      para.textContent = "Guess: " + num + " - the code is a smaller number.";
    } else if(num < code){
      para.textContent = "Guess: " + num + " - the code is a larger number.";
    }
    counter++;
  } else {
    para.textContent = "YOU LOST :(";
  }
  
  document.body.appendChild(para);
  
}