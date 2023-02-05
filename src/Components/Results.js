import Thumbnail from "../Components/Thumbnail"
import FlipMove from "react-flip-move";
function Results({ results }) {
  // const resultsArray = Array.isArray(results) ? results : [results];
  return (
    
    <FlipMove className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-4 space-x-4 3xl: flex flex-wrap justify-center">
    {results.map((result) => (
      <Thumbnail key={result.id} result={result} />

    ))}

    </FlipMove>

  );

}
export default Results;
