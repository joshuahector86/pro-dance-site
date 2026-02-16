import Page from "../../components/layout/page";
import CustomHeading from "../../components/ui/custom-heading";

const PageNotFound = () => {
  return (
    <Page>
      <div className=" container flex flex-1 flex-col justify-center items-center h-full">
        <CustomHeading
          title="404 - Page Not Found"
          subtitle="Sorry, the page you're looking for doesn't exist."
        />
        <div className="text-lg  mt-4">
          <p>
            Please check the URL or return to the{" "}
            <a href="/" className="underline text-accent-cool">
              homepage.
            </a>
          </p>
        </div>
      </div>
    </Page>
  );
};

export default PageNotFound;
