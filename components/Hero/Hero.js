import styles from "../Hero/Hero.module.css";
import Image from "next/image";
import { BASE_URL_IMAGE } from "@/utils/utils";
import HeroContent from "../HeroContent/HeroContent";

const Hero = ({
  image,
  name,
  tagline,
  age_rating,
  release_date,
  runtime,
  rating,
  overview,
  poster,
}) => {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.imageContainer}>
        <Image
          src={`${BASE_URL_IMAGE}${image}`}
          alt={`${name} backdrop`}
          layout="fill"
          objectFit="cover"
          objectPosition={"top"}
          priority
        />
      </div>
      <HeroContent
        title={name}
        tagline={tagline}
        age_rating={age_rating}
        release_date={release_date}
        runtime={runtime}
        rating={rating}
        overview={overview}
        poster={poster}
      />
    </section>
  );
};

export default Hero;