import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import Collapse from './collapse';
import { Link } from 'react-router-dom';

function TieuDePhim(props) {
    const [data, setData] = useState(props.maPhim);
    // console.log(data);
    const [a, setA] = useState(new Array());
    const [isHide, setIsHide] = useState(false);
    const [ngay,setNgay] = useState('');
    useEffect(() => {
        $.ajax({
            type: "get",
            async: false,
            url: "http://localhost:8484/api/phim/getMaPhim",
            data: { maPhim: data },
            dataType: "json",
            success: function (response) {
                response.listTheloai = Object.values(response.listTheloai).toString();
                response.traller = response.traller.replace("watch?v=", "embed/");
                setA(response.khunggio);
                console.log(response);
                //  console.log(Object.values(response.khunggio));
                setData(response);

            }
        });
        // console.log(isHide);
    }, []);
    const handleChange = (e) =>{
        // console.log(e.target.value);
        setNgay(e.target.value);
    }
    useEffect(() => {
        // console.log(isHide);

    }, [isHide]);
    // console.log(data.);
    // const temp = "";
    // for (x of data.khunggio){
    //     temp+= `<div key=${x} className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
    //         <button type="button">${x}</button><br></br>

    //     </div>`
    //         ;


    // };
    // console.log(a);
    const temp = a.map(s => {
        return <div key={s} className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <Link className='btn btn-primary' state={{
                maPhim: data.maPhim,
                ngay: '2022-09-01',
                gioBatDau: s
            }} to={`/cn/${props.maPhim}`}>{s}</Link><br></br>

        </div>
    })
    let nd = null;
    if (!isHide) {
        nd = (<div className="row mt-10" style={{height:500}}>
            <div>
                <h4>NỘI DUNG PHIM</h4>
                <hr style={{ width: 182, height: 2, backgroundColor: 'red', marginLeft: 0, marginTop: '-2px' }} />
            </div>
            <div>
                <p>{data.moTa}</p>
            </div>
        </div>);
    } else {
        nd = (<iframe className='w-100 pt-10' height={500} src={data.traller} ></iframe>);
    }
    // console.log(temp);
    return (
        <div className="container bg-white ">
            <div className="row">
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    <img src={process.env.PUBLIC_URL + `/image/poster/${data.hinh}`} className="float-start" width={204} height={300} />
                    {/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
                        Trailer
                    </button> */}
                    {/* <iframe width={200} height={150} src={data.traller} ></iframe> */}
                </div>
                <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9">
                    <h2 style={{ color: "red" }}>{data.tenPhim}</h2>
                    <hr style={{ width: 560, height: 2, backgroundColor: 'red', marginLeft: 0, marginTop: '-2px' }} />
                    <p>Hàng ghế, phòng</p>
                    <p>Diễn viên: {data.dienVien}</p>
                    <p>Thể loại: {data.listTheloai}</p>
                    <p>Quốc gia: {data.quocGia}</p>
                    <p>Đạo diễn: {data.daoDien}</p>
                </div>
                <div className="container mt-3">

                    <div className="row">
                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                            <button type="button" className="btn btn-danger " onClick={() => setIsHide(false)} >Nội dung</button>

                        </div>

                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                            <button type="button" className="btn btn-danger " onClick={() => setIsHide(true)} data-bs-toggle="collapse" data-bs-target="#demo">Trailer</button>
                        </div>
                        <div className="container mt-10" >
                            {nd}
                        </div>
                    </div>

                </div>




                <div className="row">
                    <div>
                        <h4>LỊCH CHIẾU</h4>
                        <hr style={{ width: 130, height: 2, backgroundColor: 'red', marginLeft: 0, marginTop: '-2px' }} />
                    </div>
                </div>
                <div className="w-100">
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <input type="date" name="date" id="inputdate" className="form-control" onChange={handleChange} defaultValue="2022-09-01" required="required" /><br />
                    </div>
                </div>

                <div className="row w-100">
                    <div>
                        <button type="button" className="btn btn-danger">Rạp gà rán</button>
                    </div>
                    <div className="row w-100">
                        {temp}
                        {/* </div> */}
                    </div>
                </div>
            </div>

        </div>
    );
}
export default TieuDePhim;

