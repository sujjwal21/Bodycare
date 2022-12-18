import { ApiContext } from "../Contexts/ApiContex";
import { useContext } from "react";
import { Button } from "@chakra-ui/react";

function Pagination() {
  const {page,setpage,total}=useContext(ApiContext)

  const prev = <Button disabled={page===1}  data-testid="prev-page" onClick={()=>setpage(page-1)}>PREV</Button>;
  const currentPage = <Button data-testid="current-page">{page}</Button>;
  const next = <Button disabled={page===total} data-testid="next-page" onClick={()=>setpage(page+1)}>NEXT</Button>;
  const totalPagesElem = (
    <div>
      Total Pages: <b data-testid="total-pages">{total}</b>{" "}
    </div>
  );
  return (
    <div data-testid="pagination-container">
      {prev}
      {currentPage}
      {next}
      {totalPagesElem}
    </div>
  );
}

export default Pagination;
