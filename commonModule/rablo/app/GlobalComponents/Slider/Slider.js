"use client";
import stlyes from "./style/Slider.module.scss";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import ReadMore from "../../GlobalComponents/Buttons_student/ReadMore/ReadMore";
import Image from "next/image";
import image2 from "../Assets_student/Images/image-removebg-preview (13) 2.png";
import image3 from "../Assets_student/Images/image-removebg-preview (13) 4.png";
import image from "../Assets_student/Images/image-removebg-preview (13) 2.png";

function Slider() {
  const router = useRouter();
  const [slideIndex, setSlideIndex] = useState(0);

  // Function to handle sliding to the next image
  const slideNext = () => {
    setSlideIndex((prev) => (prev + 1) % 3);
  };

  // Function to handle routing to the read more page
  const handler = () => {
    router.push("/student/dashboard/read-more");
  };

  useEffect(() => {
    // Set interval to slide to the next image every 6 seconds
    const interval = setInterval(slideNext, 6000);

    // Cleanup function to clear interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={stlyes.wrapper}>
      {/* Slider slides */}
      <div className={stlyes.main_slider}>
        <div className={slideIndex === 0 ? stlyes.slide : stlyes.slide_hidden}>
          <div className={stlyes.container}>
            <div className={stlyes.subcontainer}>
              <p className={stlyes.text}>
                Empower Your Learning Journey with Rablo.in:
                <br />
                Your Personalized Path to Success{" "}
              </p>
              <ReadMore text={"Read More"} handler={handler} />
            </div>
            <Image className={stlyes.images} alt="webniar" src={image} />
          </div>
        </div>
        <div className={slideIndex === 1 ? stlyes.slide : stlyes.slide_hidden}>
          <div className={stlyes.container1}>
            <div className={stlyes.subcontainer}>
              <p className={stlyes.text}>
                Access a world of educational resources
                <br /> tailored to your needs.
              </p>
              <ReadMore text={"Read More"} handler={handler} />
            </div>
            <Image className={stlyes.images} alt="online" src={image2} />
          </div>
        </div>
        <div className={slideIndex === 2 ? stlyes.slide : stlyes.slide_hidden}>
          <div className={stlyes.container2}>
            <div className={stlyes.subcontainer}>
              <p className={stlyes.text}>
                Track your achievements and manage <br /> your learning journey
                efficiently.
              </p>
              <ReadMore text={"Read More"} handler={handler} />
            </div>
            <Image className={stlyes.images} alt="offline" src={image3} />
          </div>
        </div>
      </div>
      {/* Slider indicators */}
      <div className={stlyes.indicators}>
        <div
          onClick={() => setSlideIndex(0)}
          className={
            slideIndex === 0 ? stlyes.indicator_active : stlyes.indicator
          }
        ></div>
        <div
          onClick={() => setSlideIndex(1)}
          className={
            slideIndex === 1 ? stlyes.indicator_active : stlyes.indicator
          }
        ></div>
        <div
          onClick={() => setSlideIndex(2)}
          className={
            slideIndex === 2 ? stlyes.indicator_active : stlyes.indicator
          }
        ></div>
      </div>
    </div>
  );
}

export default Slider;
