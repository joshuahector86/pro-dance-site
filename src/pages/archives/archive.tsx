import Page from "../../components/layout/page";
import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  CardImage,
} from "../../components/ui/card";
import { archiveData } from "../../data/archive-data";

const Archive = () => {
  return (
    <Page>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {archiveData.map((item) => (
          <Card
            key={item.id}
            className="transition-transform transform hover:scale-105 m-10 flex flex-col"
          >
            <a
              href={item.link}
              target="_blank"
              className="flex flex-col h-full w-full"
            >
              <CardHeader>{item.title}</CardHeader>
              <CardImage src={item.image} alt={item.title} />
              <CardBody className="flex-1">{item.description}</CardBody>
              <CardFooter>
                <p className="truncate">Music: {item.music}</p>
                <p className="truncate">Piece Title: {item.pieceTitle}</p>
              </CardFooter>
            </a>
          </Card>
        ))}
      </div>
    </Page>
  );
};

export default Archive;
