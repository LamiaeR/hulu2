import Image from "next/image";
// import ThumbUpIcon from "./ThumbUpIcon";
// import { ThumbUpIcon } from "@heroicons/react/24/outline";
function Thumbnail({ result }) {
  console.log(result);
  const BASE_URL = "https://image.tmdb.org/t/p/original";
  return (
    <div>
      {
        <Image
          lyaout="responsive"
          src={
            `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
            `${BASE_URL}${result.poster_path}`
          }
          height={1000}
          width={1200}
          alt=""
        />
      }
      <div className="p-2">
        <p className="truncate max-w-md">{result.overview}</p>
        <h2 className="mt=1 text-2*1 text-white transition-all
         duration-100 ease-in-out groupe-hover:font-bold">
          {result.title || result.original_name}
        </h2>
        <p>
          {result.media_type && `${result.media_type}`} .{""}
          {result.release_date || result.first_air_date}. {""}
          {/* <ThumbUpIcon className="h-5 mx-2" /> */}
          {result.vote_count}
        </p>
      </div>
    </div>
  );
}
export default Thumbnail;