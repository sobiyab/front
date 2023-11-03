import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
const Payment = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const totalAmt = queryParams.get("totalAmt");
  const [amount,setamount]=useState('');
  const handleProceedToPayment = () => {
    var options={
      key:"rzp_test_JLQhYwQM9YCfDz",
      key_secret:"XIbzpgbtcia64ooRlXrRvool",
      amount: totalAmt * 100,
      currency:"INR",
      name:"Fictionated Payments",
      description:"Payment",
      handler:function(response){
        alert(response.razorpay_paymentid);
      },
      prefill:{
        name:"sobiya",
        email:"bshobia75@gmail.com",
        contact:"9360851041",
      },
      notes:{
        address:"Fictionated Admin office"
      },
      theme:{
        color:"#456782"
      }
    };
    var pay= new window.Razorpay(options);
    pay.open();
  };
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div className="max-w-screen-md p-4 border border-gray-200 rounded-lg overflow-y-auto">
        <h1 className="font-titleFont underline underline-offset-4 decoration-[1px] font-semibold text-2xl mdl:text-3xl mb-4">
          Payment Gateway
        </h1>
        <b>
          <p>Total Amount: ${totalAmt} </p>
        </b>
        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={handleProceedToPayment}
            className="bg-primeColor hover:bg-black text-gray-200 hover:text-white cursor-pointer w-full text-base font-medium h-10 rounded-md  duration-300" 
          >
          Pay 
          </button>

        </div>
      </div>
    </div>
  );
};
export default Payment;

