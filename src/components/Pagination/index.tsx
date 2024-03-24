import React from "react";
import { Container, Span } from "./styles";
import { Prev, Next, ListOfPages, Pages, Page } from "./styles";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";


interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
}) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handlePrevClick = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
      scrollToTop();
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
      scrollToTop();
    }
  };

  return (
		<Container>
			<Prev onClick={handlePrevClick}>
				<BsArrowLeft size={24}/><Span>Anterior</Span>
			</Prev>
				<ListOfPages>
					{pageNumbers.map((pageNumber) => (
						<Pages
							key={pageNumber}
							className={pageNumber === currentPage ? 'active' : 'disable'}
						>
							<Page onClick={() => onPageChange(pageNumber)}>{pageNumber}</Page>
						</Pages>
					))}
				</ListOfPages>
			<Next onClick={handleNextClick}>
				<Span>Próximo</Span><BsArrowRight size={24}/>
			</Next>
    </Container>
  );
};

export default Pagination;
