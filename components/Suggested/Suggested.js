import styles from "@/components/Suggested/Suggested.module.css";
import SuggestedCard from "../SuggestedCard/SuggestedCard";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";

const Suggested = ({ suggested, closeReadMore }) => {
  const swiperNavPrevRef = useRef(null);
  const swiperNavNextRef = useRef(null);
  const suggestedArr = suggested.results.filter(
    (suggested) => suggested.backdrop_path !== null
  );

  return (
    <section className={styles.container}>
      <div className={styles.heading}>suggested</div>
      {suggested.results.length > 0 ? (
        <div className={styles.suggestions}>
          <Swiper
            spaceBetween={16}
            slidesPerView={"auto"}
            modules={[Navigation]}
            navigation={{
              prevEl: swiperNavPrevRef.current,
              NextEl: swiperNavNextRef.current,
            }}
            grabCursor={true}
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = swiperNavPrevRef.current;
              swiper.params.navigation.nextEl = swiperNavNextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
          >
            {suggestedArr.map((suggestion) => {
              return (
                <SwiperSlide className={styles.swiperSlide} key={suggestion.id}>
                  <SuggestedCard
                    closeReadMore={closeReadMore}
                    id={suggestion.id}
                    title={suggestion.title}
                    name={suggestion.name}
                    backdrop={suggestion.backdrop_path}
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
      ) : (
        <div className={styles.message}>No suggestions yet</div>
      )}
    </section>
  );
};

export default Suggested;
