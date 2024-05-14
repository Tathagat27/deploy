import styles from "./style/tutorinformation.module.css";
import Image from "next/image";

import MsgIcon from "./icons/msgicon.svg";
import CallIcon from "./icons/callicon.svg";
import WhatsappIcon from "./icons/whatsappicon.svg";
import LocationIcon from "./icons/locationicon.svg";
import JobTypeICon from "./icons/suitcaseicon.svg";
import ModeIcon from "./icons/webicon.svg";
import PreferredIcon from "./icons/preferredicon.svg";
import EnIcon from "./icons/Enicon.svg";
import HindiIcon from "./icons/hindiicon.svg";
import CollegeIcon from "./icons/haticon.svg";
import SchoolIcon from "./icons/uniIcon.svg";
import MapImage from "./icons/mapimage.svg";

const TutorInformation = () => {
  return (
    <div className={styles.bottomwrapper}>
      <div className={styles.contactdetails}>
        <div className={styles.bwheading}>Contact Details</div>
        <div className={styles.box}>
          <div className={styles.bwrow}>
            <div className={styles.bwcard}>
              <div className={styles.imgcontainer}>
                <Image src={MsgIcon} className={styles.bwicon} alt="email icon" />
              </div>

              <div className={styles.bwtext}>
                <p className={styles.toptext}>email.address@gmail.com</p>
                <p className={styles.bottomtext}>Email Address</p>
              </div>
            </div>
            <div className={styles.bwcard}>
              <div className={styles.imgcontainer}>
                <Image src={CallIcon} className={styles.bwicon} alt="phone icon" />
              </div>

              <div className={styles.bwtext}>
                <p className={styles.toptext}>+91 7007 881 594</p>
                <p className={styles.bottomtext}>Mobile Number</p>
              </div>
            </div>
          </div>
          <div className={styles.bwrow}>
            <div className={styles.bwcard}>
              <div className={styles.imgcontainer}>
                <Image src={WhatsappIcon} className={styles.bwicon} alt="whatsapp icon" />
              </div>

              <div className={styles.bwtext}>
                <p className={styles.toptext}>+91 7007 881 594</p>
                <p className={styles.bottomtext}>WhatsApp Number</p>
              </div>
            </div>
            <div className={styles.bwcard}>
              <div className={styles.imgcontainer}>
                <Image src={LocationIcon} className={styles.bwicon} alt="location icon" />
              </div>

              <div className={styles.bwtext}>
                <p className={styles.toptext}>Lucknow, Uttar Pradesh</p>
                <p className={styles.bottomtext}>Permanent Address</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.currentlocation}>
        <div className={styles.bwheading}>Current location</div>
        <div className={styles.box}>
          <Image src={MapImage} className={styles.mapImage} alt="map image" />
        </div>
      </div>

      <div className={styles.bwhline}></div>

      <div className={styles.preference}>
        <div className={styles.bwheading}>Prefrence</div>
        <div className={styles.box}>
          <div className={styles.bwrow}>
            <div className={styles.bwcard}>
              <div className={styles.imgcontainer}>
                <Image src={JobTypeICon} className={styles.bwicon} alt="job type icon" />
              </div>
              <div className={styles.bwtext}>
                <p className={styles.toptext}>Full-Time</p>
                <p className={styles.bottomtext}>Job Type</p>
              </div>
            </div>
            <div className={styles.bwcard}>
              <div className={styles.imgcontainer}>
                <Image src={ModeIcon} className={styles.bwicon} alt="mode icon" />
              </div>

              <div className={styles.bwtext}>
                <p className={styles.toptext}>Online</p>
                <p className={styles.bottomtext}>Mode</p>
              </div>
            </div>
          </div>
          <div className={styles.bwrow}>
            <div className={styles.bwcard}>
              <div className={styles.imgcontainer}>
                <Image src={PreferredIcon} className={styles.bwicon} alt="preferred section icon" />
              </div>

              <div className={styles.bwtext}>
                <p className={styles.toptext}>Pre-Primary Section</p>
                <p className={styles.bottomtext}>Preferred Section</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.language}>
        <div className={styles.bwheading}>Language</div>
        <div className={styles.box}>
          <div className={styles.bwlangrow}>
            <div className={styles.bwcard}>
              <div className={styles.imgcontainer}>
                <Image src={EnIcon} className={styles.bwicon} alt="native speaker icon" />
              </div>

              <div className={styles.bwtext}>
                <p className={styles.toptext}>English</p>
                <p className={styles.bottomtext}>Native Speaker</p>
              </div>
            </div>
            <div className={styles.bwcard}>
              <div className={styles.imgcontainer}>
                <Image src={HindiIcon} className={styles.bwicon} alt="fluent speaker icon" />
              </div>

              <div className={styles.bwtext}>
                <p className={styles.toptext}>Hindi</p>
                <p className={styles.bottomtext}>Fluent Speaker</p>
              </div>
            </div>
            <div className={styles.bwcard}>
              <div className={styles.imgcontainer}>GUJ</div>

              <div className={styles.bwtext}>
                <p className={styles.toptext}>Gujrati</p>
                <p className={styles.bottomtext}>Proficient Speaker</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bwhline}></div>

      <div className={styles.educationalinfo}>
        <div className={styles.bwheading}>Educational information</div>
        <div className={styles.box}>
          <div className={styles.bwrow}>
            <div className={styles.bwcard}>
              <div className={styles.imgcontainer}>
                <Image src={CollegeIcon} className={styles.bwicon} alt="college icon" />
              </div>

              <div className={styles.bwtext}>
                <p className={styles.toptext}>
                  B.Tech. Acharya College of Engineering
                </p>
                <p className={styles.bottomtext}>Bangalore, India</p>
              </div>
            </div>
            <div className={styles.bwcard}>
              <div className={styles.imgcontainer}>
                <Image src={SchoolIcon} className={styles.bwicon} alt="school icon" />
              </div>

              <div className={styles.bwtext}>
                <p className={styles.toptext}>ABC ICSE School</p>
                <p className={styles.bottomtext}>Bangalore, India</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorInformation;