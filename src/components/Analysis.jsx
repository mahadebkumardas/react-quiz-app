import classes from "../styles/Analysis.module.css";
import Questions from "./Questions";

export default function Analysis({ score, answers }) {
  return (
    <div className={classes.analysis}>
      <h1>Question Analysis</h1>
      <h4>
        You answered {score / 5} out of {answers.length} questions correctly
      </h4>
      <Questions answers={answers} />
    </div>
  );
}
