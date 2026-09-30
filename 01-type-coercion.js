// Expected Output: "Perfect score achieved!" followed by "Student scored: 100"

function processExamResults(score, bonusPoints) {
  let finalScore = score + Number(bonusPoints);

  // Check for a perfect score
  if (finalScore == Number("100")) {
    console.log("Perfect score achieved!");
  }

  return "Student scored: " + finalScore;
}

console.log(processExamResults(80, "20"));
