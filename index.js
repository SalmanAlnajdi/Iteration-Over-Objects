/******************************
	Q1) Create an object called person with properties name, age, and city.
 Set appropriate values for these properties.
********************************/

const person = {
    name : "Salman",
    age : 29,
    city : "Bayan"

}

console.log(person);
/******************************
	Q2) Add a new key email to the person object and assign it an email address.
********************************/
person.email = "Salman.it095@gmail.com"

console.log(person);


/******************************
	Q3) Write a JavaScript function called hasKey that takes two arguments:
 an object and a key. The function should return true if the object contains
 the specified key, and false otherwise. For example, if the object is
 { name: 'John', age: 25 }, and the key is 'name', the function should return true,
 but if the key is 'city', it should return false.
********************************/
 
// const hasKey = (object , key)=>{
//     if(key in object){
//         return true
//     }else{
//         return false
//     }
//  }

 const hasKey = (object , key)=>{
    if(object[key]){
        return true
    }else{
        return false
    }
 }
 console.log(hasKey(person,'name'));




const movies = [
    {
      title: "The Shawshank Redemption",
      director: "Frank Darabont",
      year: 1994,
      genre: "Drama",
    },
    {
      title: "The Godfather",
      director: "Francis Ford Coppola",
      year: 1972,
      genre: "Crime",
    },
    {
      title: "Pulp Fiction",
      director: "Quentin Tarantino",
      year: 1994,
      genre: "Crime",
    },
    {
      title: "The Dark Knight",
      director: "Christopher Nolan",
      year: 2008,
      genre: "Action",
    },
    {
      title: "Forrest Gump",
      director: "Robert Zemeckis",
      year: 1994,
      genre: "Drama",
    },
  ];
  /******************************
      Q4) Create a function that accepts an array of objects called 'movies' 
  and iterates through it to log the titles of all the movies.
  ********************************/
  
  //const movieTitle = movies.map( (movie)=> movie.title);

  const movieTitle = (movie)=>{
    movie.forEach(element => {
        console.log(element.title);
    });
  }

   console.log(movieTitle(movies));
  
  
  /******************************
      Q5) Create a function that accepts an array of objects called 'movies' 
  and iterates through it to count how many movies were released in the year 1994.
  ********************************/
  
  const moviesCount = movies.reduce( (count ,movie)=> movie.year == 1994? count+1:count ,0);
   console.log(moviesCount);
  
  /******************************
      Q6) Write a function that updates the genre of the movie "The Dark Knight"
   to "Action/Drama" and returns the modified array of movies.
  ********************************/

const q6Movie = movies.map( (movie)=> movie.title === "The Dark Knight"? movie.genre = "Action/Drama": movie.genre)
  
  console.log(q6Movie);
