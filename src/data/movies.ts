import z from "zod";

export const getRandomMovie = () => {
  const amountOfMovies = movies.length;
  const randomIndex = Math.floor(Math.random() * amountOfMovies);

  return movies.at(randomIndex);
};

const movies = [
  {
    title: "Inception",
    release_year: "2010",
    genres: ["Action", "Adventure", "Sci-Fi"],
    directors: ["Christopher Nolan"],
    featured_actors: [
      "Leonardo DiCaprio",
      "Joseph Gordon-Levitt",
      "Elliot Page",
    ],
    emoji: "🌌💭🕳️💥👨‍👩‍👧‍👦",
  },
  {
    title: "The Shawshank Redemption",
    release_year: "1994",
    genres: ["Drama", "Crime"],
    directors: ["Frank Darabont"],
    featured_actors: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
    emoji: "⛓️🗝️💔👊💡🙌",
  },
  {
    title: "Pulp Fiction",
    release_year: "1994",
    genres: ["Crime", "Drama"],
    directors: ["Quentin Tarantino"],
    featured_actors: ["John Travolta", "Samuel L. Jackson", "Uma Thurman"],
    emoji: "💣💉🍔🕶️💃🎶",
  },
  {
    title: "The Dark Knight",
    release_year: "2008",
    genres: ["Action", "Crime", "Drama"],
    directors: ["Christopher Nolan"],
    featured_actors: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
    emoji: "🦇🃏🌆💥👥💔",
  },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    release_year: "2001",
    genres: ["Adventure", "Drama", "Fantasy"],
    directors: ["Peter Jackson"],
    featured_actors: ["Elijah Wood", "Ian McKellen", "Viggo Mortensen"],
    emoji: "🧝‍♂️👑🌄🗡️🥾💍",
  },
  {
    title: "Fight Club",
    release_year: "1999",
    genres: ["Drama"],
    directors: ["David Fincher"],
    featured_actors: ["Brad Pitt", "Edward Norton", "Helena Bonham Carter"],
    emoji: "👊👥💣🪓🤐🦊",
  },
  {
    title: "The Matrix",
    release_year: "1999",
    genres: ["Action", "Sci-Fi"],
    directors: ["Lana Wachowski", "Lilly Wachowski"],
    featured_actors: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
    emoji: "🔴🔵👁️💊👽🕶️",
  },
  {
    title: "Forrest Gump",
    release_year: "1994",
    genres: ["Drama", "Romance"],
    directors: ["Robert Zemeckis"],
    featured_actors: ["Tom Hanks", "Robin Wright", "Gary Sinise"],
    emoji: "🍃🏃‍♂️❤️🎓🍤👣",
  },
  {
    title: "Interstellar",
    release_year: "2014",
    genres: ["Adventure", "Drama", "Sci-Fi"],
    directors: ["Christopher Nolan"],
    featured_actors: [
      "Matthew McConaughey",
      "Anne Hathaway",
      "Jessica Chastain",
    ],
    emoji: "🚀🌌⏳🌍💔🧑‍🚀",
  },
  {
    title: "The Lion King",
    release_year: "1994",
    genres: ["Animation", "Adventure", "Drama"],
    directors: ["Roger Allers", "Rob Minkoff"],
    featured_actors: ["Matthew Broderick", "Jeremy Irons", "James Earl Jones"],
    emoji: "🦁👑🌍🎶💔👑",
  },
];

export const movieSchema = z.object({
  title: z.string(),
  release_year: z.string(),
  genres: z.array(z.string()),
  directors: z.array(z.string()),
  featured_actors: z.array(z.string()),
  emoji: z.string().emoji(),
});

export type Movie = z.infer<typeof movieSchema>;

export default movies;
