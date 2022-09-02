import { useRouter } from "next/router";
import Head from "next/head";
import Search from "@/components/Search/Search";
import Genre from "@/components/Genre/Genre";

const SeriesGenre = ({ genreList }) => {
  const router = useRouter();
  const { id } = router.query;
  const genre = genreList.genres.find((genre) => genre.id.toString() === id);
  const { name } = genre;

  return (
    <>
      <Head>
        <title>{`${name} | Entertainment`}</title>
        <meta
          name="description"
          content={`Search for the best ${name} movies`}
        />
      </Head>
      <main>
        <Search series />
        <Genre type="series" endpoint={`/api/series/genre/${id}`} name={name} />
      </main>
    </>
  );
};

export default SeriesGenre;

export async function getStaticPaths() {
  const response = await fetch(
    `https://api.themoviedb.org/3/genre/tv/list?api_key=${process.env.API_KEY}&language=en-GB`
  );
  const data = await response.json();
  const paths = data.genres.map((genre) => {
    return {
      params: {
        id: `${genre.id}`,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.API_KEY}&language=en-GB&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=${params.id}`
  );
  const genrePage = await response.json();

  const response2 = await fetch(
    `https://api.themoviedb.org/3/genre/tv/list?api_key=${process.env.API_KEY}&language=en-GB`
  );
  const genreList = await response2.json();

  return {
    props: {
      genrePage,
      genreList,
    },
  };
}
