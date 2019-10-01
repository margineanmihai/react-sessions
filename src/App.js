import React from 'react';
import './App.css';

// todo - homework: create 3 components - Header, Movie and MovieDetails - to display the following information

const App = () => {
  return (
      <div className="App">
        <Header title="Best movies ever made"
                subtitle="at least according to IMDB"/>
        <ul>
          <Movie name="The Godfather"
                 releaseYear="1972"
                 director="Francis Ford Coppola">
            <MovieDetails oscarsNominations="11"
                          oscarsWon="3"/>
          </Movie>
          <Movie name="Schindler's List"
                 releaseYear="1993"
                 director="Steven Spielberg">
            <MovieDetails oscarsNominations="12"
                          oscarsWon="7"/>
          </Movie>
          <Movie name="12 Angry Men"
                 releaseYear="1957"
                 releaseYear="Sidney Lumet"/>
          <Movie name="Life Is Beautiful"
                 releaseYear="1997"
                 releaseYear="Roberto Benigni">
            <MovieDetails oscarsNominations="7"
                          oscarsWon="3"/>
          </Movie>
          <Movie name="The Good, the Bad and the Ugly"
                 releaseYear="1966"
                 releaseYear="Sergio Leone"/>
        </ul>
      </div>
  );
};

export default App;