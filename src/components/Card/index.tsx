import { FC } from "react";
import styles from "./Card.module.scss";
import cn from "classnames";
import hero from "../../assets/hero-image-business-card.png";
import overlay from "../../assets/white-overlay.svg";
import avatar from "../../assets/avatar-image-business-card.png";
export const Card: FC = () => {
  const classnames = {
    container: cn(styles.container),
    "hero-container": cn(styles["hero--container"]),
    "overlay-image": cn(styles.overlayImage),
    content: cn(styles.content),
    title: cn(styles.title),
    body: cn(styles.body),
    footer: cn(styles.footer),
    author: cn(styles.author),
    avatar: cn(styles.avatar),
    authorDescription: cn(styles.authorDescription),
  };
  return (
    <div className={classnames.container}>
      <div className={classnames["hero-container"]}>
        <img src={hero} alt="hero" />
        <img
          src={overlay}
          className={classnames["overlay-image"]}
          alt="overlay"
        />
      </div>
      <div className={classnames.content}>
        <p className={classnames.title}>Perfect solution for small business</p>
        <p className={classnames.body}>
          Small businesses need to generate leads to grow. You can use tools
          like Ringy.
        </p>
      </div>
      <div className={classnames.footer}>
        <img className={classnames.avatar} src={avatar} alt="avatar" />

        <span style={{ marginLeft: "12px" }}>
          <span className={classnames.author}>Amy Burgess</span>
          <p className={classnames.authorDescription}>
            Customer Manger, Solution Oy
          </p>
        </span>
      </div>
    </div>
  );
};
