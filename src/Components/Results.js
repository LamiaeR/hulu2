import Thumbnail from "../Components/Thumbnail"
function Results({ results }) {
  // const resultsArray = Array.isArray(results) ? results : [results];
  return (
    <div className="px-5 my-10 sm:grid md:grid-cols-4">
    {results.map((result) => (
      <Thumbnail key={result.id} result={result} />

    ))}

    </div>

  );

}
export default Results;
