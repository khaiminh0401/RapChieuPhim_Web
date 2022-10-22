import { useEffect, useState } from "react";
// import $ from 'jquery';
import $ from 'jquery';
import {Link}from 'react-router-dom';
import  useCookie  from 'react-use-cookie';

function DangNhap() {
    const [data,setData] = useState(false);
    const [inputs, setInputs] = useState({});
const [cookie,setCookie] = useCookie("customer");
    // useEffect(()=>{
    //     handleSubmit();
    // },[]);
    const handleSubmit = (event) => {
      // event.preventDefault();
         //event.preventDefault();
        $.ajax({
            type: "GET",
            url: "http://localhost:8484/api/kh/findKH",
            data: inputs,
            dataType: "json",
            async:false,
            success: function (response,data,setuo) {
              console.log(response);
              setCookie(JSON.stringify(response), {
                days: 2,
                SameSite: 'Strict',
                Secure: true,
              });
                // localStorage.setItem("customer",JSON.stringify(response));
            }
        });
        // const res = await axios.get("http://localhost:8484/api/nv/findNV",JSON.stringify(inputs));
        // console.log(res);
        
        // if(data===false){
        //     event.preventDefault();
        // }
      }
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    };
    

    return (  <div className="container">
    <div className="row  g-3 needs-validation" noValidate>
      <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
      </div>
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div className="position-absolute top-50 start-50 translate-middle">
          <div className="card bg-dark text-white" style={{width: '20rem'}}>
            <div className="card-body">
              <form className="form-horizontal" onSubmit={handleSubmit}>
                <div className="form-group was-validated">
                  {/* <label class="control-label col-sm-2" for="email"></label> */}
                  <div className="col-sm-12">
                    <input type="text" className="form-control" onChange={handleChange} name="email" id="email" placeholder="Enter email" />
                  </div>
                </div>
                <div className="form-group was-validated">
                  <label className="control-label col-sm-2" htmlFor="pwd" />
                  <div className="col-sm-12">
                    <input type="password" name="matKhau" onChange={handleChange} className="form-control" id="pwd" placeholder="Enter password" />
                  </div>
                </div>
                <div className="form-group was-validated">
                  <div className="col-sm-offset-2 col-sm-10">
                    <div className="checkbox">
                      <label><input type="checkbox" /> Remember me</label>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-sm-offset-2 col-sm-10">
                    <Link onClick={handleSubmit} className="btn btn-danger text-white" to="/"> Đăng Nhập</Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default DangNhap;