import { useEffect, useState } from "react";
import Page from "../../components/layout/page";
import {
  Card,
  CardBody,
  CardHeader,
  CardImage,
} from "../../components/ui/card";
import Dialog from "../../components/ui/dialog";
import { archiveData } from "../../data/archive-data";
import LinkButton from "../../components/ui/link-button";

const Archive = () => {
  const [selectedItem, setSelectedItem] = useState<
    (typeof archiveData)[number] | null
  >(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const totalPages = Math.max(1, Math.ceil(archiveData.length / itemsPerPage));
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedItems = archiveData.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
      return;
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage, totalPages]);

  return (
    <Page>
      <div className="container flex flex-col ">
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {paginatedItems.map((item, index) => (
            <Card
              key={`${item.id}-${startIndex + index}`}
              className="transition-transform transform hover:scale-105 hover:bg-accent-warm cursor-pointer"
              onClick={() => setSelectedItem(item)}
            >
              <CardBody className="flex flex-col items-center">
                <CardImage src={item.image} alt={item.title} />
                <CardHeader className="truncate mt-3">{item.title}</CardHeader>
              </CardBody>
            </Card>
          ))}
        </div>
        {totalPages && (
          <div className="flex items-center justify-center gap-3 mt-auto py-6">
            <button
              type="button"
              onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded border border-border text-foreground disabled:opacity-40 disabled:cursor-not-allowed hover:border-accent-cool transition"
            >
              Previous
            </button>
            <span className="text-sm text-muted">
              Page {currentPage} of {totalPages}
            </span>
            <button
              type="button"
              onClick={() =>
                setCurrentPage((prev) => Math.min(totalPages, prev + 1))
              }
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded border border-border text-foreground disabled:opacity-40 disabled:cursor-not-allowed hover:border-accent-cool transition"
            >
              Next
            </button>
          </div>
        )}
      </div>
      <Dialog
        open={Boolean(selectedItem)}
        onClose={() => setSelectedItem(null)}
      >
        {selectedItem && (
          <div className="space-y-4">
            <div>
              <h2 className="text-2xl font-bold text-accent-cool">
                {selectedItem.title}
              </h2>
              <p className="text-muted mt-1">{selectedItem.description}</p>
            </div>
            <div className="grid gap-2 text-sm">
              <div>
                <span className="text-muted">Piece:</span>{" "}
                {selectedItem.pieceTitle}
              </div>
              <div>
                <span className="text-muted">Music:</span> {selectedItem.music}
              </div>
            </div>
            {selectedItem.link && (
              <LinkButton
                href={selectedItem.link}
                target="_blank"
                className="inline-flex items-center gap-2 text-accent-cool hover:text-accent-warm transition"
              >
                Watch The Dance!
              </LinkButton>
            )}
          </div>
        )}
      </Dialog>
    </Page>
  );
};

export default Archive;
