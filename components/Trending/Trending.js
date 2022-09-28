import TrendingCard from "@/components/TrendingCard/TrendingCard";
import styles from "@/components/Trending/Trending.module.css";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation, Autoplay } from "swiper";

const Trending = ({ arr }) => {
  const swiperNavPrevRef = useRef(null);
  const swiperNavNextRef = useRef(null);

  return (
    <section>
      <h1>Trending</h1>
      <div className={styles.container}>
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={16}
          speed={700}
          breakpoints={{
            768: {
              spaceBetween: 40,
            },
          }}
          modules={[Navigation, Autoplay]}
          navigation={{
            prevEl: swiperNavPrevRef.current,
            NextEl: swiperNavNextRef.current,
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          grabCursor={true}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = swiperNavPrevRef.current;
            swiper.params.navigation.nextEl = swiperNavNextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
        >
          {arr.map((item) => {
            return (
              <SwiperSlide className={styles.swiperSlide} key={item.id}>
                <TrendingCard
                  id={item.id}
                  image={item.backdrop_path}
                  movieTitle={item.title}
                  year={item.release_date}
                  type={item.media_type}
                  seriesName={item.name}
                  airDate={item.first_air_date}
                />
              </SwiperSlide>
            );
          })}

          <button
            className={`${styles.swiperNav} ${styles.swiperNavPrev}`}
            ref={swiperNavPrevRef}
          ></button>
          <button
            className={`${styles.swiperNav} ${styles.swiperNavNext}`}
            ref={swiperNavNextRef}
          ></button>
        </Swiper>
      </div>
    </section>
  );
};

export default Trending;
