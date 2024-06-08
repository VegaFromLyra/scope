'use client'
import { Model} from "survey-core";
import 'survey-core/defaultV2.min.css';
import { Survey } from 'survey-react-ui'

export default function Page() {
    const survey = new Model(surveyJson);
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <Survey model={survey} />
        </main>
    );
}

const surveyJson = {
    elements: [{
      name: "FirstName",
      title: "Enter your first name:",
      type: "text"
    }, {
      name: "LastName",
      title: "Enter your last name:",
      type: "text"
    }]
};
  