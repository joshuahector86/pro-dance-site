import Page from "../../components/layout/page";
import CustomHeading from "../../components/ui/custom-heading";
import { workHistory } from "../../data/work-history-data";

const WorkHistory = () => {
  return (
    <Page>
      <CustomHeading
        className="container pb-10 grid place-content-center"
        title="Work History"
        subtitle="Explore Dimitri's Work History"
      />
      <div className="container">
        {workHistory.map((entry) => (
          <div key={entry.id} className="mb-8">
            <WorkHistoryHeader title={entry.organization} />
            <p className="text-md font-semibold text-muted">
              {entry.role} - {entry.location}
            </p>
            <p className="text-lg ">
              {entry.startDate} - {entry.endDate}
            </p>
            <ul className="list-disc list-inside ">
              {entry.highlights.map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Page>
  );
};

const WorkHistoryHeader = ({ title }: { title: string }) => {
  return (
    <>
      <h2 className="text-xl font-bold text-accent-cool mb-1 ">{title}</h2>
      <div className="border max-w-20 text-accent-warm" />
    </>
  );
};

export default WorkHistory;
