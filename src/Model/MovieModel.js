class MovieModel {
  constructor(movieName, poster) {
    this.movieName = movieName;
    this.poster = "https://image.tmdb.org/t/p/w500" + poster;
  }
  //   constructor(movieName, duration, poster, director, mainStars) {
  //     this.movieName = movieName;
  //     this.duration = duration;
  //     this.poster = "https://image.tmdb.org/t/p/w500" + poster;
  //     this.director = director;
  //     this.mainStars = mainStars;
  //   }
}

export default MovieModel;
