import {ReactComponent as StarEmpty} from 'assets/IMG/star-empty.svg';
import {ReactComponent as StarFull} from 'assets/IMG/star-full.svg';
import {ReactComponent as StarHalf} from 'assets/IMG/star-half.svg';
import './styles.css';
function MovieStars() {
    return (
        <div className="dsmovie-stars-container">
            <StarFull />
            <StarFull />
            <StarFull />
            <StarHalf />
            <StarEmpty />
        </div>
    );
}
export default MovieStars;