import React, { useState } from "react";
import "./styles/QualificationForm.css";
import DropDown from "../../../DropDown/DropDown";
import Others from "../../../Others/Others";
import { IoIosArrowDown } from "react-icons/io";
import Checkbox from "../../Checkbox/Checkbox";
import { alphabets } from "../../../data.JS";

const PreferenceForm = ({
  selectedSection,
  setSelectedSection,
  languages,
  setLanguages,
  ModeofClass,
  setModeofClass,
  TimeInvest,
  setTimeInvest,
}) => {
  const addLanguage = (lang) => {
    setLanguages([...languages, lang]);
  };

  alphabets;

  const isLanguagePresent = (lang) => {
    const isPresent = languages.find((langauge) => langauge === lang);
    if (isPresent) return true;
    else return false;
  };

  const removeLanguage = (lang) => {
    const updatedLanguages = languages.filter((langauge) => langauge !== lang);
    setLanguages([...updatedLanguages]);
  };

  const [options, setOptions] = useState([
    "English",
    "Hindi",
    "Bengali",
    "Marathi",
    "Tamil",
    "Malyalam",
    "Gujarati",
    "Urdu",
    "Kanadda",
    "Odia",
    "Punjabi",
    "Assamese",
    "Telegu",
  ]);

  const [classOptions, setClassOptions] = useState([
    "Pre-Primary (Nus - 2nd)",
    "Primary (3rd - 5th)",
    "Junior Section (6th - 8th)",
    "High School (9th - 10th)",
    "Intermediate (11th - 12th)",
    "Exam Prep",
  ]);
  return (
    <div className="qualification-form">
      <div className="container-QF-1">
        <div>
          <div className="label" style={{ width: "17.135vw" }}>
            How much time you can invest?
          </div>
          <DropDown
            option={TimeInvest}
            setOption={setTimeInvest}
            type="Choose Your Job Type"
          />
        </div>
        <div>
          <div className="label">Mode of Class</div>
          <DropDown
            option={ModeofClass}
            setOption={setModeofClass}
            type="Your Preffered Mode Of Class"
          />
        </div>
      </div>
      <div className="container-QF-1">
        <div>
          <div className="label">Current Address</div>
          <div style={{ width: "35.677vw", height: "28.241vh" }}>.</div>
        </div>
      </div>
      <div className="container-QF-1">
        <div>
          <div className="label">
            Select the Section of Class you want to teach?
          </div>
          <div className="label-small" style={{ height: "max-content" }}>
            {
              " Choosing a class section can attract students falling under that range. The first student's preference automatically selects the exact standard. For example, if the first student is from 4th standard, selecting the primary section will auto-select 4th standard as the primary class for that student. "
            }
          </div>
          <div className="container-Sec">
            {classOptions.map((option, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedSection(option)}
                className="selection-input"
                style={
                  selectedSection === option
                    ? { backgroundColor: "rgba(103, 100, 255)", color: "white" }
                    : null
                }
              >
                <Checkbox
                  text={alphabets[idx]}
                  active={selectedSection === option}
                />
                {option}
              </div>
            ))}
            <Others
              classInput
              options={classOptions}
              setOptions={setClassOptions}
            />
          </div>
          <IoIosArrowDown className="bottom-arrow" />
        </div>
      </div>
      <div className="container-QF-1">
        <div>
          <div className="label">
            What will be the Common language of the Class?
          </div>
          <div className="small-selection">
            {options.map((option, idx) => (
              <div
                key={idx}
                onClick={(e) => {
                  isLanguagePresent(option)
                    ? removeLanguage(option)
                    : addLanguage(option);
                }}
                style={
                  isLanguagePresent(option)
                    ? { backgroundColor: "rgba(103, 100, 255)", color: "white" }
                    : null
                }
                className="selection-input-sm"
              >
                {option}
              </div>
            ))}
          </div>
          <Others options={options} setOptions={setOptions} />
          <div className="label-small" style={{ height: "max-content" }}>
            Your common means of Communication will be in{" "}
            {languages.map((lang, index) => (
              <span key={index}>{lang}, </span>
            ))}
            as per the above selection
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreferenceForm;
