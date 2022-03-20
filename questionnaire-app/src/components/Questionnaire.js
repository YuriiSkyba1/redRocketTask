import { useCallback } from "react";
import "survey-react/modern.min.css";
import { Survey, StylesManager, Model } from "survey-react";


StylesManager.applyTheme("modern");

const surveyJson = {
  elements: [
    {
      name: "FirstName",
      title: "Enter your first name:",
      type: "text"
    },
    {
      name: "FirstName",
      title: "Enter your first name:",
      type: "text"
    },
    {
      name: "WorkExperience",
      title: "Enter your work experience:",
      type: "text"
    },
    {
      name: "car",
      type: "checkbox",
      title: "What your tech skills?",
      isRequired: true,
      hasNone: true,
      colCount: 4,
      choices: [
        "JS",
        "React",
        "Vue",
        "Angular",
        "Red Rocket company",
        "Java",
        "Dart",
        "Next",
        "Basic",
        "Pascal"
      ]
    },
    {
      name: "AnyQuestions",
      title: "Enter your questions:",
      type: "text"
    }
  ]
};

function Questionnaire() {
  const survey = new Model(surveyJson);
  survey.focusFirstQuestionAutomatic = false;

  const consoleResults = useCallback((sender) => {
    const results = JSON.stringify(sender.data);
    console.log(results);
  }, []);

  survey.onComplete.add(consoleResults);

  return <Survey model={survey} />
}

export default Questionnaire;
