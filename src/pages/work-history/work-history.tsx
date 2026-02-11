import Page from "../../components/layout/page";
import { workHistory } from "../../data/work-history-data";

const WorkHistory = () => {
  return (
    <Page>
      {workHistory.map((entry) => (
        <div key={entry.id} className="mb-8">
          <h2 className="text-2xl font-bold text-highlight mb-2">
            {entry.organization}
          </h2>
          <p className="text-lg text-white">
            {entry.role} - {entry.location}
          </p>
          <p className="text-lg text-white">
            {entry.startDate} - {entry.endDate}
          </p>
          <ul className="list-disc list-inside text-white">
            {entry.highlights.map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>
        </div>
      ))}
    </Page>
  );
};

export default WorkHistory;
