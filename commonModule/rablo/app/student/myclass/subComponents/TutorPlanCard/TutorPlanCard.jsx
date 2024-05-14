"use client";
import styles from "./style/tutorplancard.module.css";
import Image from "next/image";

import batchsizeicon from "./icons/Frame 427319982.svg";
import batchsizeiconpink from "./icons/batchsizepink.svg";
import location from "./icons/Vector (1).svg";
import eye from "./icons/eye_icon.svg";
import eyePink from "./icons/eye_icon_pink.svg";
import heartgreen from "./icons/Vector (3).svg";
import heartpink from "./icons/Vector (4).svg";
import video from "./icons/Vector (2).svg";
import VoidHeart from "./icons/VoidHeart.svg";
import { useState } from "react";

const TutorPlanCard = ({ mode, setViewingPlan }) => {
  const [isGreenHeart, setGreenHeart] = useState(false);
  const [isPinkHeart, setPinkHeart] = useState(false);

  return (
    <div
      className={`${
        mode === "offline" ? styles.offlinecard : styles.onlinecard
      }`}
    >
      <div className={styles.cardtop}></div>
      <div className={styles.maincard}>
        <div className={styles.cardheading}>
          <div className={styles.circle}>A</div>
          <div className={styles.groupheading}>
            <div className={styles.cardclass}>
              Class 10
              <div className={styles.modestyle}>
                {mode === "offline" ? (
                  <>
                    <Image src={location} className={styles.modeicon} alt="offline mode icon" />{" "}
                    <p>Offline</p>
                  </>
                ) : (
                  <>
                    <Image src={video} className={styles.modeicon} alt="online mode icon" />
                    <p>Online</p>
                  </>
                )}
              </div>
            </div>
            <div className={styles.cardsubject}>Maths, Science +3</div>
          </div>
          <div>
            {mode === "offline" ? (
              !isGreenHeart ? (
                <Image
                  src={VoidHeart}
                  className={styles.like}
                  onClick={() => setGreenHeart(!isGreenHeart)}
                  alt="empty like icon"
                />
              ) : (
                <Image
                  src={heartgreen}
                  className={styles.like}
                  onClick={() => setGreenHeart(!isGreenHeart)}
                  alt="green like icon"
                />
              )
            ) : !isPinkHeart ? (
              <Image
                src={VoidHeart}
                className={styles.like}
                onClick={() => setPinkHeart(!isPinkHeart)}
                alt="empty like icon"
              />
            ) : (
              <Image
                src={heartpink}
                className={styles.like}
                onClick={() => setPinkHeart(!isPinkHeart)}
                alt="pink like icon"
              />
            )}
          </div>
        </div>
        <div className={styles.carddetails}>
          <div className={styles.detailbox}>
            <div className={styles.detailiconbox}>
              {mode === "offline" ? <Image src={eye} style={{height: "0.781vw", width: "0.781vw"}} alt="vacancies icon green" /> : <Image src={eyePink} style={{height: "0.781vw", width: "0.781vw"}} alt="vacancies icon pink" />}
            </div>

            <div className={styles.detailinfo}>
              <p className={styles.p1}>Vacancies</p>
              <p className={styles.p2}>4 left</p>
            </div>
          </div>
          <div className={styles.detailhorizontalline}></div>
          <div className={styles.detailbox}>
            <div className={styles.detailiconbox}>
              {mode === "offline" ? (
                <Image src={batchsizeicon} style={{height: "0.781vw", width: "0.781vw"}} alt="batch size icon green" />
              ) : (
                <Image src={batchsizeiconpink} style={{height: "0.781vw", width: "0.781vw"}}  alt="batch size icon pink"/>
              )}
            </div>
            <div className={styles.detailinfo}>
              <p className={styles.p1}>Batch Size</p>
              <p className={styles.p2}>20</p>
            </div>
          </div>
        </div>
        <div className={styles.cardbottom}>
          <div className={styles.pricedetail}>
            <p className={styles.price}>₹ 220</p>
            per hour
          </div>
          <button
            className={
              mode === "offline"
                ? styles.viewplanbuttongreen
                : styles.viewplanbuttonpink
            }
            onClick={() => setViewingPlan(true)}
          >{`View Plan >`}</button>
        </div>
      </div>
    </div>
  );
};

export default TutorPlanCard;
