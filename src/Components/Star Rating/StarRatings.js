import StarSharpIcon from "@material-ui/icons/StarSharp";

export default function StarRatings({ starred, stars, starredCol, starsCol }) {
  let starsArr = [];
  let i = 0;
  while (i < stars) {
    starsArr.push(i);
    i++;
  }
  return (
    <div className="StarRatingsContainer">
      {starsArr.map((item) => {
        if (item < starred) {
          return <StarSharpIcon style={{ color: starredCol }} />;
        }
        return <StarSharpIcon style={{ color: starsCol }} />;
      })}
    </div>
  );
}
