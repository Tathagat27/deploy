import styles from "./style/readmore.module.css";
import Link from "next/link";

function page() {
  return (
    <div className={styles.main_container}>
      <div className={styles.banner_container}>
        <div className={styles.wrapper}>
          {/* First Heading and conponents */}
          <h1 className={styles.heading_text}>
            &quot;Empower Your Learning Journey with Rablo.in:
            <br />
            Your Personalized Path to Success&quot;
          </h1>
          <div className={styles.points_wrapper}>
            <div className={styles.point_container}>
              <h3 className={styles.text1}>Personalized Learning Paths Say</h3>
              <p className={styles.text2}>
                goodbye to one-size-fits-all education. Rablo.in crafts custom
                learning paths that adapt to your pace, style, and aspirations.
                Your success, your way.
              </p>
            </div>
            <div className={styles.point_container}>
              <h3 className={styles.text1}>Smart Content Recommendations</h3>
              <p className={styles.text2}>
                Uncover a world of knowledge with curated content suggestions
                that align with your interests. Learning has never been this
                engaging and relevant.
              </p>
            </div>
            <div className={styles.point_container}>
              <h3 className={styles.text1}>Seamless Progress Tracking</h3>
              <p className={styles.text2}>
                Keep tabs on your achievements effortlessly. Rablo.in tracks
                your progress and highlights milestones, motivating you every
                step of the way.
              </p>
            </div>
            <div className={styles.point_container}>
              <h3 className={styles.text1}>Data-Driven Insights</h3>
              <p className={styles.text2}>
                Harness the power of data to refine your learning strategy.
                Rablo.in provides insights into your strengths and areas for
                growth, helping you optimize your path to success.
              </p>
            </div>
          </div>
          <button className={styles.button}>Find Tutor</button>

          {/* second Heading and conponents */}

          <h1 className={styles.heading_text2}>
            &quot;“Access a world of educational resources <br />
            tailored to your needs”&quot;
          </h1>
          <div className={styles.points_wrapper}>
            <div className={styles.point_container}>
              <h3 className={styles.text1}>Relevant Content </h3>
              <p className={styles.text2}>
                Say goodbye to sifting through irrelevant material. Discover
                resources handpicked to address your specific needs
              </p>
            </div>
            <div className={styles.point_container}>
              <h3 className={styles.text1}>Effortless Exploration</h3>
              <p className={styles.text2}>
                {" "}
                Navigate a sea of knowledge with ease. Rablo.in&apos;s intuitive
                platform guides you to the most fitting resources.
              </p>
            </div>
            <div className={styles.point_container}>
              <h3 className={styles.text1}>Seamless Integration</h3>
              <p className={styles.text2}>
                Integrate learning into your daily life effortlessly. Access
                resources on the go, aligning with your busy schedule.
              </p>
            </div>
            <div className={styles.point_container}>
              <h3 className={styles.text1}>Empower Your Journey</h3>
              <p className={styles.text2}>
                Equip yourself with resources that bolster your journey to
                success. Rablo.in supports your growth, step by step.
              </p>
            </div>
          </div>
          <button className={styles.button}>Find Tutor</button>

          {/* Third Heading and conponents */}

          <h1 className={styles.heading_text2}>
            &quot;Track your achievements and manage <br /> your learning
            journey efficiently&quot;
          </h1>
          <div className={styles.points_wrapper}>
            <div className={styles.point_container}>
              <h3 className={styles.text1}>Achievement Tracking</h3>
              <p className={styles.text2}>
                Stay motivated by monitoring your progress and celebrating
                milestones as you conquer new knowledge.
              </p>
            </div>
            <div className={styles.point_container}>
              <h3 className={styles.text1}>Learning Management</h3>
              <p className={styles.text2}>
                Take control of your learning schedule. Rablo.in empowers you to
                shape your educational journey on your terms.
              </p>
            </div>
            <div className={styles.point_container}>
              <h3 className={styles.text1}>Unified Learning Hub</h3>
              <p className={styles.text2}>
                Access all your learning resources in one place. Streamline your
                experience for efficient, focused learning.
              </p>
            </div>
            <div className={styles.point_container}>
              <h3 className={styles.text1}>Collaborative Tools</h3>
              <p className={styles.text2}>
                Connect with peers, mentors, and educators. Rablo.in fosters an
                environment where learning is a shared experience.
              </p>
            </div>
          </div>
          <button className={styles.button}>Find Tutor</button>
          <Link href={"/student/dashboard"}>
            <button className={styles.button2}>Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default page;
