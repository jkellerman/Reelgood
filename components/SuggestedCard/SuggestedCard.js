import styles from "@/components/SuggestedCard/SuggestedCard.module.css";
import Link from "next/link";
import Image from "next/image";
import { BASE_URL_IMAGE, shimmer, toBase64 } from "@/utils/utils";

const SuggestedCard = ({ closeReadMore, id, title, name, backdrop }) => {
  return (
    <>
      <article className={styles.linkContainer}>
        <Link
          href={
            title !== undefined
              ? `/movies/${id}/${title.replace(/\s+/g, "-")}`
              : `/series/${id}/${name.replace(/\s+/g, "-")}`
          }
        >
          <a
            className={styles.suggestionContainer}
            onClick={() => closeReadMore()}
          >
            <Image
              src={`${BASE_URL_IMAGE}${backdrop}`}
              alt={title !== undefined ? `${title}` : `${name}`}
              layout="fill"
              unoptimized={true}
              objectFit="cover"
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,${toBase64(
                shimmer(240, 140)
              )}`}
            />
          </a>
        </Link>
        {title !== undefined ? (
          <div className={styles.name}>
            {title.length > 40 ? `${title.slice(0, 35)}...` : title}
          </div>
        ) : (
          <div className={styles.name}>
            {name.length > 40 ? `${name.slice(0, 35)}...` : name}
          </div>
        )}
      </article>
    </>
  );
};

export default SuggestedCard;
