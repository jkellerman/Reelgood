import Head from "next/head";
import SearchBar from "@/components/SearchBar/SearchBar";
import CategoryResults from "@/components/CategoryResults/CategoryResults";

const PopularShows = () => {
  return (
    <>
      <Head>
        <title>Popular Shows | Streaming Movies and TV series guide</title>
        <meta
          name="description"
          content="Entertainment allows you to search and discover any movie or TV show across Netflix, Disney, Amazon and many other other providers in one place."
        />
      </Head>
      <main>
        <SearchBar all />
        <CategoryResults
          endpoint="api/popularshows"
          category="popular shows"
          type="series"
        />
      </main>
    </>
  );
};

export default PopularShows;