"use client";
import UnsubscribeCard from "../../GlobalComponents/UnsubscribedCard/UnsubscribeCard";
import styles from "./style/dashboard.module.css";
import Slider from "../../GlobalComponents/Slider/Slider";
import ReadMore from "../../GlobalComponents/Buttons_student/ReadMore/ReadMore";
import communication from "../../GlobalComponents/Assets_student/Images/Vector.svg";
import datasecurity from "../../GlobalComponents/Assets_student/Images/Group.svg";
import personalized from "../../GlobalComponents/Assets_student/Images/Vector (1).svg";
import resources from "../../GlobalComponents/Assets_student/Images/Supply Chain.svg";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams, useRouter } from "next/navigation";

const Page = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const studentID = localStorage.getItem("query1");
  const authtoken = localStorage.getItem("query2");

  // if (!studentID || !authtoken) {
  //   router.push('/login');
  //   return null;
  // }

  // const[user,setUser] = useState({
  //   studentID:"",
  //   tokenID:""
  // })

  // useEffect(() => {
  //   const tutorId = localStorage.getItem("query1");
  //   const authtoken = localStorage.getItem("query2");
  //   const userID = searchParams.get('query1');
  //   const tokenID = searchParams.get('query2');

  //   if (!tutorId || !authtoken) {
  //     if (userID && tokenID) {
  //       localStorage.setItem("query1", userID);
  //       localStorage.setItem("query2", tokenID);
  //       setUser({
  //         studentID: userID,
  //         tokenID: tokenID
  //       });
  //     } else {
  //       router.push('/login');
  //     }
  //   } else {
  //     setUser({
  //       studentID: tutorId,
  //       tokenID: authtoken
  //     });
  //   }
  // },[]);

  const [recommededTutors, setRecommedTutors] = useState([]);
  const STUDENT_BACKEND_URL = process.env.NEXT_PUBLIC_STUDENT_BACKEND_URL;
  useEffect(() => {
    getTutorDetails();
  }, []);
  const getTutorDetails = async () => {
    try {
      const response = await axios.get(`${STUDENT_BACKEND_URL}/api/tutors`);
      setRecommedTutors(response.data.data);
      console.log(response.data.data);
    } catch (err) {
      console.log(err.response);
    }
  };
  return (
    <div className={styles.container}>
      <Slider />
      <div className={styles.container2}>
        <div className={styles.wrapper4}>
          <div className={styles.heading}>Our recommeded Tutors for you</div>
          <div className={styles.sub_heading}>
            These are the top recommended tutors for you which matches with your
            needs
          </div>
          {/* Tutor Card conponents */}
          <div className={styles.scroller}>
            {recommededTutors?.map((items, index) => (
              <UnsubscribeCard key={index} items={items} index={index} />
            ))}
          </div>
        </div>
        {/* Second Page of dashboard page */}
        <div className={styles.wrapper5}>
          <div>
            <div className={styles.heading}>
              Your Learning, Your Way: Progress Meets Personalization.
            </div>
            <div className={styles.sub_heading}>
              Welcome to a New Era of Education Technology: Where Seamlessly
              Integrated Tools and Curricula Elevate Learning for Speed, Scale,
              and Success.
            </div>
          </div>
          <ReadMore text={"know More"} />
          <div className={styles.frame_wrapper}>
            <div className={styles.frame_main}>
              <Image
                className={styles.frame_icon}
                alt="communication"
                src={communication}
              />

              <div className={styles.frame_text1}>Communication </div>
              <ul className={styles.frame_text2}>
                <li>Discussion forums for peer interaction.</li>
                <li>
                  Direct messaging and chat with instructors and fellow
                  students.
                </li>
                <li>Collaborative project spaces.</li>
              </ul>
            </div>
            <div className={styles.frame_main}>
              <Image
                className={styles.frame_icon}
                alt="datasecurity"
                src={datasecurity}
              />

              <div className={styles.frame_text1}>Data Security</div>
              <ul className={styles.frame_text2}>
                <li>Strong data encryption and secure user profiles.</li>
                <li>Compliance with data protection regulations.</li>
                <li>Privacy controls and permissions.</li>
              </ul>
            </div>
            <div className={styles.frame_main}>
              <Image
                className={styles.frame_icon}
                alt="personalized"
                src={personalized}
              />

              <div className={styles.frame_text1}>Personalized</div>
              <ul className={styles.frame_text2}>
                <li>Customized routes based on progress.</li>
                <li>Compliance with data protection regulations.</li>
                <li>Privacy controls and permissions.</li>
              </ul>
            </div>
            <div className={styles.frame_main}>
              <Image
                className={styles.frame_icon}
                alt="resources"
                src={resources}
              />

              <div className={styles.frame_text1}>Resources</div>
              <ul className={styles.frame_text2}>
                <li>Self-paced learning options.</li>
                <li>
                  Access to e-books, journals, and other reference materials.
                </li>
                <li>Real-time access to updated course materials.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
