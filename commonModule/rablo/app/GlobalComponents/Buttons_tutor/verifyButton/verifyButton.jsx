"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import './styles/plans.scss'

const VerifyButton = () => {
    const router = useRouter()
    return( 
    <div className="button">
        <button onClick={() => router.push(`/${link}`)}>Get Verified</button>
    </div>
    );
}

export default VerifyButton;