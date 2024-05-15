"use client";
import styles from "./style/myclass.module.css";

import SearchIcon from "./icons/ic_outline-search.svg";
import AddIcon from "./icons/Frame 427319903.svg";
import RedTick from "./icons/Vector.svg";
import DownwardKey from "./icons/downkey.svg";
import CrossIcon from "./icons/cross (1).svg";

import Image from "next/image";
import { useSelector } from "react-redux";
import { useLayoutContext } from "./layout";
import { useState } from "react";

import ClassCard from "./subComponents/ClassCard/ClassCard";
import ReportCard from "./subComponents/ReportCard/ReportCard";
import TutorCard from "./subComponents/TutorCard/TutorCard";
import TutorPlanCard from "./subComponents/TutorPlanCard/TutorPlanCard";
import ClassOverview from "./subComponents/ClassOverview/ClassOverview";
import TutorDetailCard from "./subComponents/TutorDetaillCard/TutorDetailCard";
import TutorInformation from "./subComponents/TutorInformation/TutorInformation";
import SubscribedTutors from "./subComponents/SubscribedTutors/SubscribedTutors";

const Page = () => {
  const isSidebarOpen = useSelector((state) => state.sideNavBar.isSidebarOpen);
  const { myclassPages, setMyclassPages } =
    useLayoutContext();

  const [selectedClass, setSelectedClass] = useState(1);
  const [isReport, setIsReport] = useState(false);
  const [viewingPlan, setViewingPlan] = useState(false);
  const [unsubscribedTutorView, setUnsubscribedTutorView] = useState(false);
  const [type, setType] = useState("");
  const [about, setAbout] = useState("");

  const classesList = [1, 2, 3];

  function handleOnClasses() {
    setMyclassPages(0);
  }
  function handleOnTutor() {
    setMyclassPages(1);
  }
  function handleUnsubscribeClass() {
    setType("Unsubscribe");
    setAbout("Class");
    setIsReport(true);
  }
  function handleReportClass() {
    setType("Report");
    setAbout("Class");
    setIsReport(true);
  }

  const dummyTutor = {
    name: "Nishant Patwardhan",
    degree: "Bsc(Phy)",
    experience: "5 yrs exp",
    languages: ["English", "Hindi"],
    subjects: ["Maths", "Science", "Hindi"],
    subscribers: 180,
    freeClasses: 3,
  };
  const [recommededTutors, setRecommedTutors] = useState([dummyTutor, dummyTutor, dummyTutor, dummyTutor, dummyTutor, dummyTutor, dummyTutor, dummyTutor]);

  return (
    <div className={styles.container}>
      {isReport && (
        <div>
          <ReportCard type={type} about={about} setIsReport={setIsReport} />
        </div>
      )}
      {viewingPlan && (
        <div className={styles.viewplancard}>
          <button
            onClick={() => setViewingPlan(false)}
            className={styles.crossicon}
          >
            <Image
              src={CrossIcon}
              style={{ width: "0.938vw", height: "0.938vw" }} alt="cross icon"
            />
          </button>
          <ClassOverview
            mode="online"
            setMyclassPages = {setMyclassPages}
          />
          <div className={styles.bottomviewplancard}>
            <button className={styles.sharebutton}>{`< Share`}</button>
            <button className={styles.subscribebutton}>{`Subscribe >`}</button>
          </div>
        </div>
      )}
      {(isReport || viewingPlan) && (
        <div className={styles.lightbrightness}></div>
      )}
      <div className={styles.leftContainer}>
        <div className={styles.myclassTabs}>
          <div className={styles.top}>
            <p>My Class</p>
            <div className={styles.searchbox}>
              <Image src={SearchIcon} className={styles.searchIcon} alt="search icon" />
              <input type="text" placeholder="Search for tutors, classes..." />
            </div>
          </div>
          <div className={styles.bottom}>
            <button
              className={`${(myclassPages === 0) && styles.selected}`}
              onClick={handleOnClasses}
            >
              Classes
            </button>
            <button
              className={`${(myclassPages !== 0) && styles.selected}`}
              onClick={handleOnTutor}
            >
              Tutors
            </button>
          </div>
        </div>
        {(myclassPages === 0) ? (
          <div className={styles.classContent}>
            <div className={styles.left}>
              <div className={styles.list}>
                <p className={styles.listheading}>
                  List of your existing classes
                </p>
                <button>
                  <Image src={AddIcon} className={styles.addicon} alt="add icon" />
                  Add new class
                </button>

                <div className={styles.classCardContainer}>
                  {classesList.map((num, index) => (
                    <ClassCard
                      key={index}
                      selectedClass={selectedClass}
                      setSelectedClass={setSelectedClass}
                      num={num}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className={styles.horizontalline}></div>
            <div className={styles.right}>
              <div className={styles.overview}>
                {selectedClass % 2 === 0 ? (
                  <ClassOverview
                    mode="offline"
                    setMyclassPages={setMyclassPages}
                  />
                ) : (
                  <ClassOverview
                    mode="online"
                    setMyclassPages={setMyclassPages}
                  />
                )}

                <div className={styles.bottombuttons}>
                  <a onClick={handleReportClass}>Report Class</a>
                  <button onClick={handleUnsubscribeClass}>
                    {"<"} Unsubscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (myclassPages === 1) ? (
          <div className={styles.tutorcontainer}>
            <SubscribedTutors
              recommededTutors={recommededTutors}
              setUnsubscribedTutorView={setUnsubscribedTutorView}
              setMyclassPages={setMyclassPages}
            />
            <div className={styles.wrapper4}>
              <div className={styles.heading}>
                Our recommeded Tutors for you
              </div>
              <div className={styles.sub_heading}>
                These are the top recommended tutors for you which matches with
                your needs
              </div>
              {/* Tutor Card conponents */}
              <div className={styles.scroller}>
                {recommededTutors?.map((items, index) => (
                  <TutorCard
                    items={items}
                    index={index}
                    key={index}
                    setMyclassPages={setMyclassPages}
                    setUnsubscribedTutorView={setUnsubscribedTutorView}
                  />
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className={styles.leftcontainer}>
            <TutorDetailCard unsubscribedTutorView={unsubscribedTutorView} setType={setType} setAbout={setAbout} setIsReport={setIsReport} />
            <TutorInformation />
          </div>
        )}
      </div>
      {(myclassPages === 2) && !isSidebarOpen && (
        <div className={styles.rightContainer}>
          <div className={styles.verticallineright}></div>
          <div className={styles.rightwrapper}>
            <div className={styles.heading}>
              Learn from the best & start your preparation
            </div>
            <div className={styles.points}>
              <div className={styles.point}>
                <Image src={RedTick} className={styles.redtick} alt="red color tick mark" />
                <p>Live classes</p>
              </div>
              <div className={styles.point}>
                <Image src={RedTick} className={styles.redtick} alt="red color tick mark" />
                <p>Budget friendly</p>
              </div>
            </div>
            <div className={styles.planline}>Existing Plans of this tutor</div>
            <div className={styles.plans}>
              <TutorPlanCard mode="offline" setViewingPlan={setViewingPlan} />
              <TutorPlanCard mode="online" setViewingPlan={setViewingPlan} />
            </div>
            <div className={styles.downkey}>
              <Image src={DownwardKey} style={{width: "0.963vw", height: "0.963vw"}} alt="downward arrow" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Page;