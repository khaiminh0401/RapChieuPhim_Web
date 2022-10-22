import React from 'react';
import { useEffect } from 'react';
import ChuThich from './ChuThich';
import Ghe from './Ghe';
import HangGhe from './HangGhe';
import TieuDePhong from './TieuDePhong';
import { Link, useLocation } from 'react-router-dom';

// import { useEffect } from "react";
function MainChoNgoi() {
    const data = useLocation();
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    }, []);
    function handleClick(event) {
        if((sessionStorage.getItem("ghe")) == null || (sessionStorage.getItem("ghe"))==""){
            event.preventDefault();
            alert("chưa chọn ghé");
        }
    }
    return (

        <div className='container bg-white '>
            <TieuDePhong />
            <div className='container'>
                <div className='row'>
                    <HangGhe />
                    <Ghe obj={data.state} />
                    <ChuThich />
                    <Link className="btn btn-primary" onClick={handleClick} to="/thanhtoan">Tiếp theo</Link>
                </div>
            </div>
        </div>





    );
}

export default MainChoNgoi;