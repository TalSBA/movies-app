class MovieModel {
    constructor(movieName, duration, poster, director, mainStars, plot) {
      this.movieName = movieName;
      this.duration = duration;
      this.poster = "https://image.tmdb.org/t/p/w500" + poster;
      this.director = director;
      this.mainStars = mainStars;
      this.plot = plot;
    }
}

export default MovieModel;
