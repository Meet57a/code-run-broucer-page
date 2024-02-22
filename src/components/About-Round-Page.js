import React from "react";

export default function AboutRoundPage() {
  return (
    <>
      <div className="about-round-section-round-text">Rounds</div>
      <div className="about-round-section">
        <div className="about-round-section-content-container">
          <div>
            <h3>Round 1</h3>
            <h2>MCQ Quiz</h2>
            <ul>
              <li>
                Test your knowledge with a series of multiple-choice questions
                (MCQs) related to programming.
              </li>
              <li>
                Each question comes with a helpful hint to guide you towards the
                correct answer.
              </li>
            </ul>
          </div>

          <div>
            <h3>Round 2</h3>
            <h2>Code Correction</h2>
            <ul>
              <li>
                Analyze and debug snippets of code with errors or unintended
                behavior.
              </li>
              <li>
                Showcase your problem-solving skills by correcting the code to
                achieve the desired functionality.
              </li>
            </ul>
          </div>
          <div>
            <h3>Round 3</h3>
            <h2>Programming Tasks</h2>
            <ul>
              <li>
                Put your programming prowess to the test with challenging tasks
                designed to assess your ability to solve real-world problems.
              </li>
              <li>
                Compete against fellow participants to emerge as one of the top
                performers.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
