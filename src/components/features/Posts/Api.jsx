import React from "react";
import DaumPostcode from "react-daum-postcode";
import "../../../styles/ApiModal.css";

const Api = (props) => {
  
    const complete = (data) =>{
        let fullAddress = data.sigungu;
        let extraAddress = '';
        if (data.addressType === 'R') {
            if (data.bname !== '') {
                extraAddress += data.bname;
            }
            if (data.buildingName !== '') {
                extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
            }
            fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
        }
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
