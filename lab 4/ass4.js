
(function runConsoleQuiz(){
  const questions = [
  { q: "What is the capital of France?", a: "paris" },
  { q: "Which planet is known as the Red Planet?", a: "mars" },
  { q: "What is 5 + 7?", a: "12" },
  { q: "Which language is used for web pages?", a: "javascript" },
  { q: "What color do you get by mixing red and white?", a: "pink" }
  ];

  let score = 0;
  alert("Welcome to the java Script Quiz!\nYou will be asked " + questions.length + " questions. Answer using the prompt window.");

  for(let i = 0; i < questions.length; i++){
    const item = questions[i];
    const raw = prompt((i+1) + ". " + item.q + "\n(Answer and press OK)");

    if(raw === null){
      const leave = confirm('You cancelled the quiz. Do you want to end the quiz? (OK = end, Cancel = continue)');
      if(leave){
        break;
      } else {
        i--;
        continue;
      }
    }

    const answer = raw.trim().toLowerCase();
    const correctAnswers = Array.isArray(item.a) ? item.a : [item.a];
    const normalizedCorrect = correctAnswers.map(s => String(s).trim().toLowerCase());

    if(normalizedCorrect.includes(answer)){
      score++;
      alert('Correct!');
    } else {
      alert('Incorrect. The correct answer is: ' + correctAnswers[0]);
    }
  }

  alert('Quiz finished! Your score: ' + score + ' / ' + questions.length);
  console.log('Quiz result:', {score: score, outOf: questions.length});

})();
