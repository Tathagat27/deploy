"use client"
import React from "react";
import { useRouter } from 'next/navigation'
import "./styles/NextButton.css";

const NextButton = ({link}) => {

    const router = useRouter()
    
    return (
        <button className="nextbutton" onClick={() => router.push(`/${link}`)}>
            {"Next >"}
        </button>
    );
}

export default NextButton;