import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../header/Header";
// import Footer from "../footer/Footer";


function Home() {
    const navigate = useNavigate(); 


    // useEffect(() => {
    //     if (loading) return;
    //     // if (!user) navigate("/landing");

    // }, [user, loading]);

    return (
        <>
            <Header />    
        </>
    )
}

export default Home;