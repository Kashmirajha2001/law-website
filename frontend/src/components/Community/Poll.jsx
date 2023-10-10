import React, { useState, useEffect } from "react";
import Polls from "react-polls";
import "./poll.css";

// const pollQuestion1 = "Is react-polls useful?";
// const pollAnswers1 = [
//   { option: "Yes", votes: 24 },
//   { option: "No", votes: 3 },
//   { option: "I don't know", votes: 1 }
// ];
// const pollStyles1 = {
//   questionSeparator: true,
//   questionSeparatorWidth: "question",
//   questionBold: true,
//   questionColor: "#303030",
//   align: "center",
//   theme: "purple"
// };

const pollQuestion2 = "Which of the following legal issues do you consider most pressing in our country?";
const pollAnswers2 = [
  { option: "Criminal justice reform", votes: 5 },
  { option: "Civil rights and liberties", votes: 2 },
  { option: "Employment and labor laws", votes: 8 }
];
const pollStyles2 = {
  questionSeparator: false,
  questionSeparatorWidth: "question",
  questionBold: false,
  questionColor: "rgb(198, 103, 62)",
  align: "center",
  theme: "blue"
};

const Poll = () => {
//   const [pollAns1, setPollAns1] = useState([...pollAnswers1]);
  const [pollAns2, setPollAns2] = useState([...pollAnswers2]);

  const handleVote = (voteAnswer, pollAnswers) => {
    const newPollAnswers = pollAnswers.map(answer => {
      if (answer.option === voteAnswer) answer.votes++;

    //   console.log(answer);
      return answer;
    });

    setPollAns2(newPollAnswers);
    
  };

  useEffect(() => {
    autoAddVotes(pollAns2);
  }, [pollAns2]);

  const autoAddVotes = (pollAnswers) => {
    setTimeout(() => {
      const choseAnswer = parseInt(Math.random() * 2, 5);
      handleVote(pollAnswers[choseAnswer].option, pollAnswers);
      autoAddVotes(pollAnswers);
    }, Math.random() * 10000);
  };

  return (
    <>
    <div id="poll">
      <h1 className="title">Polls</h1>
      <div className="poll">
        <div>
          <Polls
            question={pollQuestion2}
            answers={pollAns2}
            onVote={voteAnswer => handleVote(voteAnswer, pollAns2)}
            customStyles={pollStyles2}
            noStorage
          />
        </div>
      </div>
      </div>
    </>
  );
};
export default Poll;
