import React, { useState } from 'react';
import styles from "./styles/PlanCard.module.css";
import View_Icon from './Assets/Views.svg';
import Success_rate from './Assets/Success_rate.svg';
import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import { setPlanSelected } from '../../Redux/tutorSlices/CreateYourPlan';

const PlanCard = ({ plan, id }) => {
    const dispatch = useDispatch();
    const { PlanCardShrink, isChooseYourPlan } = useSelector((state) => state.CreateYourPlan);
    const [planCardSelect, setPlanCardSelected] = useState(false);

    return (
        isChooseYourPlan ?
        <div className={PlanCardShrink ? styles.Shrinked_PlanCard_wrapper : styles.PlanCard_wrapper} onClick={() => setPlanCardSelected(!planCardSelect)}>
            <div className={styles.Card_top} style={{ backgroundColor: plan.color }}></div>
            <div className={PlanCardShrink ? styles.Shrinked_Card_background : styles.Card_background}>
                {/* Card Section 1: Contains: Section,Class,Subjects,Cost */}
                <div className={styles.Class_Subjects_and_price_Div}>
                    <h4 style={{ color: plan.color }}>
                        {String.fromCharCode('A'.charCodeAt(0) + id)}
                    </h4>
                    <div className={styles.class_and_subjects}>
                        <div> <p>Class 10</p> <p>{plan.isActive ? "On Proposal" : "Deleted soon"}</p> </div>
                        <h4>Maths, Science + 3</h4>
                    </div>
                    <div className={styles.price} style={{ backgroundColor: plan.color + '99' }}>
                        <h4>₹ 200</h4>
                        <p>Per hour</p>
                    </div>
                </div>
                {/* Card Section 2: Contains: View and Success rate */}
                {planCardSelect &&
                    <div className={styles.View_and_Success_rate}>
                        <div className={styles.Views}>
                            <Image src={View_Icon} />
                            <div>
                                <p>Views</p>
                                <h4>2.5k</h4>
                            </div>
                        </div>
                        <div></div>
                        <div className={styles.Success_rate}>
                            <Image src={Success_rate} />
                            <div>
                                <p>Success Rate</p>
                                <h4>8.6%</h4>
                            </div>
                        </div>
                    </div>
                }
                {/* Card Section 3: Contains: Class Occupancy */}
                {planCardSelect &&
                    <div className={styles.Class_occupancy}>
                        <div>
                            <div className={styles.Class_Occupancy_and_Capacity}>
                                <p>Class Occupancy</p>
                                <span></span>
                                <span>Capacity: <p>01</p> </span>
                            </div>
                            <div className={styles.progress_bar}>
                                <h4>20%</h4>
                                <div>
                                    <div style={{ width: '20%' }}></div>
                                </div>
                            </div>
                        </div>
                        <button onClick={(e) => {
                            e.stopPropagation()
                            dispatch(setPlanSelected({ boolean: true, plan: plan }));
                        }}>Select</button>
                    </div>
                }
            </div>
        </div>
        :
        <div className={PlanCardShrink ? styles.Shrinked_PlanCard_wrapper : styles.PlanCard_wrapper}>
            <div className={styles.Card_top} style={{ backgroundColor: "#F82083" }}></div>
            <div className={PlanCardShrink ? styles.Shrinked_Card_background : styles.Card_background}>
                {/* Card Section 1: Contains: Section,Class,Subjects,Cost */}
                <div className={styles.Class_Subjects_and_price_Div}>
                    <h4 style={{ color: plan.color }}>
                        {String.fromCharCode('A'.charCodeAt(0) + id)}
                    </h4>
                    <div className={styles.class_and_subjects}>
                        <div> <p>Class 10</p> <p>{plan.isActive ? "On Proposal" : "Deleted soon"}</p> </div>
                        <h4>Maths, Science + 3</h4>
                    </div>
                    <div className={styles.price} style={{ backgroundColor: plan.color + '99' }}>
                        <h4>₹ 200</h4>
                        <p>Per hour</p>
                    </div>
                </div>
                {/* Card Section 2: Contains: View and Success rate */}
                <div className={styles.View_and_Success_rate}>
                    <div className={styles.Views}>
                        <Image src={View_Icon} />
                        <div>
                            <p>Views</p>
                            <h4>2.5k</h4>
                        </div>
                    </div>
                    <div></div>
                    <div className={styles.Success_rate}>
                        <Image src={Success_rate} />
                        <div>
                            <p>Success Rate</p>
                            <h4>8.6%</h4>
                        </div>
                    </div>
                </div>
                {/* Card Section 3: Contains: Class Occupancy */}
                <div className={styles.Class_occupancy}>
                    <div>
                        <div className={styles.Class_Occupancy_and_Capacity}>
                            <p>Class Occupancy</p>
                            <span></span>
                            <span>Capacity: <p>01</p> </span>
                        </div>
                        <div className={styles.progress_bar}>
                            <h4>20%</h4>
                            <div>
                                <div style={{ width: '20%' }}></div>
                            </div>
                        </div>
                    </div>
                    <button onClick={() => {
                        dispatch(setPlanSelected({ boolean: true, plan: plan }));
                    }}>Select</button>
                </div>
            </div>
        </div>
    )
}

export default PlanCard;
