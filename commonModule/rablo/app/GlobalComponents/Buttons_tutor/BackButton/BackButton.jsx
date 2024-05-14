"use client"
import { useRouter } from 'next/navigation'
import "./styles/BackButton.css";

const BackButton = () => {
    const router = useRouter()

    return (
        <div className="backbutton" onClick={() => router.back()}>
            <span style={{
                marginBottom:"2px",
                marginRight: "5px"
            }}>
                <svg width="6" height="14" viewBox="0 0 6 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.33533 13.4258C5.03184 13.8298 4.42561 13.8298 4.12212 13.4258L1.31122 9.68383C0.168821 8.16303 0.168821 6.0703 1.31122 4.5495L4.12212 0.807537C4.42561 0.403514 5.03184 0.403514 5.33533 0.807536V0.807536C5.53811 1.07748 5.53811 1.44894 5.33533 1.71888L3.47912 4.18994C2.17671 5.92375 2.17671 8.30958 3.47912 10.0434L5.33533 12.5145C5.53811 12.7844 5.53811 13.1559 5.33533 13.4258V13.4258Z" fill="#6764FF" />
                </svg>
            </span> 
            Back
        </div>
    )
}

export default BackButton;