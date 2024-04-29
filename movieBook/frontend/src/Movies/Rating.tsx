import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { Movie } from '../Movie';
import { save } from './movie.api';
import { useNavigate } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';

type Props = {
  movie: Movie;
};

const Rating: React.FC<Props> = ({ movie }) => {
  const queryClient = useQueryClient();
  const rating = movie.rating > 10 ? 10 : movie.rating;
  function rate(newRating: number): void {
    console.log(newRating);
    save({ ...movie, rating: newRating + 1 });
    queryClient.invalidateQueries({ queryKey: ['movies'] });
  }

  const full = Math.floor(rating);
  const stars = new Array(full)
    .fill(null)
    .map((value, index) => <StarIcon key={index} data-rating={index} />);

  const fraction = rating - full;
  if (fraction > 0) {
    stars.push(<StarHalfIcon key={stars.length} data-rating={stars.length} />);
  }

  const rest = 10 - stars.length;
  new Array(rest)
    .fill(null)
    .forEach((value, index) =>
      stars.push(
        <StarOutlineIcon
          key={stars.length + index}
          data-rating={stars.length + index}
        />
      )
    );

  return (
    <div
      onClick={(event) => {
        let modifiedRating = '0';
        if (event.target.dataset.rating) {
          modifiedRating = event.target.dataset.rating;
        } else {
          modifiedRating = event.target.parentNode.dataset.rating;
        }

        rate(parseInt(modifiedRating, 10));
      }}
    >
      {stars}
    </div>
  );
};

export default Rating;
