import React, { useEffect, useState } from "react";
import DaumPostcode from "react-daum-postcode";
import "../../../styles/ApiModal.css";

const Api = (props) => {
  
    const complete = (data) =>{
        let fullAddress = data.sigungu;
        let extraAddress = '';
        let themeObj = {
          bgColor: "#FEE6DF", //바탕 배경색
          pageBgColor: "#ED9071" //페이지 배경색
        };
        if (data.addressType === 'R') {
            if (data.bname !== '') {
                extraAddress += data.bname;
            }
            if (data.buildingName !== '') {
                extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
            }
            fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
        }
        console.log(data)
        console.log(fullAddress)
        console.log(data.zonecode)
        props.setcompany({
            ...props.company,
            address:fullAddress,
        })
    }
    return (
        <div >
            <DaumPostcode
                themeObj
                className="postmodal"
                autoClose
                onComplete={complete} />
        </div>
    );
};

export default Api;
