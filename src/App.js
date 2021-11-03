import React, { Component } from "react";
import "./App.css";
import logo from "./logo.svg";

/*
Use React and the data below to display a list of users alongside their favorite movies.

For detailed instructions, refer to instructions.md.
*/

const profiles = [
  {
    id: 1,
    userID: "1",
    favoriteMovieID: "1",
  },
  {
    id: 2,
    userID: "2",
    favoriteMovieID: "1",
  },
  {
    id: 3,
    userID: "4",
    favoriteMovieID: "5",
  },
  {
    id: 4,
    userID: "5",
    favoriteMovieID: "2",
  },
  {
    id: 5,
    userID: "3",
    favoriteMovieID: "5",
  },
  {
    id: 6,
    userID: "6",
    favoriteMovieID: "4",
  },
];

const users = {
  1: {
    id: 1,
    name: "Jane Cruz",
    userName: "coder",
  },
  2: {
    id: 2,
    name: "Matthew Johnson",
    userName: "mpage",
  },
  3: {
    id: 3,
    name: "Autumn Green",
    userName: "user123",
  },
  4: {
    id: 4,
    name: "John Doe",
    userName: "user123",
  },
  5: {
    id: 5,
    name: "Lauren Carlson",
    userName: "user123",
  },
  6: {
    id: 6,
    name: "Nicholas Lain",
    userName: "user123",
  },
};

const movies = {
  1: {
    id: 1,
    name: "Planet Earth 1",
  },
  2: {
    id: 2,
    name: "Selma",
  },
  3: {
    id: 3,
    name: "Million Dollar Baby",
  },
  4: {
    id: 4,
    name: "Forrest Gump",
  },
  5: {
    id: 5,
    name: "Get Out",
  },
};

class App extends Component {
  constructor(props) {
    super(props);
    this.likes = {};

    profiles.forEach((a_profile) => {
      //create a frequency object for movie and who likes it
      if (this.likes[a_profile.favoriteMovieID]) {
        this.likes[a_profile.favoriteMovieID].push(a_profile.userID);
      } else {
        this.likes[a_profile.favoriteMovieID] = [a_profile.userID];
      }
    });
    console.log(this.likes);
    //   console.log(Object.keys(this.likes));
    //   console.log(Object.values(this.likes));
  }

  render() {
    return (
      <div className="app-container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <h1>Who Likes What</h1>
        {Object.keys(this.likes).map((a_movieId) => {
          return (
            <div className="list-container">
              <h2>{movies[a_movieId].name}</h2>
              <p>Is liked by:</p>

              {this.likes[a_movieId].map((a_user_id) => {
                return (
                  <ul>
                    <li>{users[a_user_id].name}</li>
                  </ul>
                );
              })}
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;

// const popular = musicData
//   .filter((a_item) => a_item.sales > 1_000_000)
//   .map((filtered_item) => `${filtered_item.artist} is a great performer.`);

{
  /* 
  <h2>Forrest Gump</h2>
<p>Liked By:</p>
<ul>
  <li>Nicholas Lain</li>
</ul> 
*/
}

// {profiles.map((a_profile) => {
//   return (
//     <li key={a_profile.id}>{`${
//       users[a_profile.userID].name
//     }'s favourite movie is
//                 ${movies[a_profile.favoriteMovieID].name}.`}</li>
//   );

// const favMovies = [];
// profiles.forEach((a_profile) => {
//   const item = new Object();
//   item.theUserId = a_profile.userID;
//   item.favMovie = a_profile.favoriteMovieID;
//   favMovies.push(item);
// });
// // debug
// favMovies.forEach((an_obj) => console.log(an_obj));
//{theUserId: '1', favMovie: '1'}
