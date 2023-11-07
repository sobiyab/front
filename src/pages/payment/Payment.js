import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Payment = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const totalAmt = queryParams.get("totalAmt");
  const [amount, setAmount] = useState("");
  const [doorNo, setDoorNo] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [landmark, setLandmark] = useState("");
  const [size,setSize]=useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("India");
  const [mobileNumber, setMobileNumber] = useState("");
  const [pincode, setPincode] = useState("");
  const [formValid, setFormValid] = useState(false);
  const [isDeliveryConfirmed, setIsDeliveryConfirmed] = useState(false);

  const handleDelivery = () => {
    if (formValid) {
      const deliveryData = {
        doorNo,
        address,
        city,
        landmark,
        size,
        state,
        country,
        mobileNumber,
        pincode,
      };
  
      fetch('https://backenddd-w6f5.onrender.com/delivery', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(deliveryData),
      })
        .then((response) => response.json())
        .then((data) => {
          alert(data.message);
          setIsDeliveryConfirmed(true);
        })
        .catch((error) => {
          alert('An error occurred while saving delivery information');
        });
    } else {
      alert('Please fill in all required fields correctly before confirming delivery.');
    }
  };
  

  const handleProceedToPayment = () => {
    if (formValid) {
      var options = {
        key: "rzp_test_uaVirH0l7urXF1",
        key_secret: "vi1qVSmjBNPwGihiDqkDzNIf",
        amount: totalAmt * 100,
        currency: "INR",
        name: "Fictionated Payments",
        description: "Payment",
        handler: function (response) {
          alert(response.razorpay_paymentid);
        },
        prefill: {
          name: "Nihasini",
          email: "nihasinips@gmail.com",
          contact: "9443020636",
        },
        notes: {
          address: "Fictionated Admin office",
        },
        theme: {
          color: "#456782",
        },
      };
      var pay = new window.Razorpay(options);
      pay.open();
    }
  };

  // Function to validate the form
  const validateForm = () => {
    const mobilePattern = /^\d{10}$/;
    const pincodePattern = /^\d{6}$/;
    const isValidMobile = mobilePattern.test(mobileNumber);
    const isValidPincode = pincodePattern.test(pincode);
    const isFormValid =
      doorNo.trim() !== "" &&
      address.trim() !== "" &&
      city.trim() !== "" &&
      landmark.trim() !== "" &&
      size.trim() !=="" &&
      state.trim() !== "" &&
      country.trim() !== "" &&
      isValidMobile &&
      isValidPincode;
    setFormValid(isFormValid);
  };

  useEffect(() => {
    validateForm();
  }, [doorNo, address, city, landmark, state,size, country, mobileNumber, pincode]);

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div className="max-w-screen-md p-4 border border-gray-200 rounded-lg overflow-y-auto">
        <h1 className="font-titleFont underline underline-offset-4 decoration-[1px] font-semibold text-2xl mdl:text-3xl mb-4">
          Payment Gateway
        </h1>
        <b>
          <p>Total Amount: ${totalAmt}</p>
        </b>

        <form>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Door No"
              value={doorNo}
              onChange={(e) => setDoorNo(e.target.value)}
              className="bg-gray-100 border border-gray-300 rounded-md p-2"
            />
            <input
              type="text"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="bg-gray-100 border border-gray-300 rounded-md p-2"
            />
            <input
              type="text"
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="bg-gray-100 border border-gray-300 rounded-md p-2"
            />
            <input
              type="text"
              placeholder="Landmark"
              value={landmark}
              onChange={(e) => setLandmark(e.target.value)}
              className="bg-gray-100 border border-gray-300 rounded-md p-2"
            />
            <select
              value={size}
              onChange={(e) => setSize(e.target.value)}
              className="bg-gray-100 border border-gray-300 rounded-md p-2"
            >
              <option value="">Select size</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
              <option value="XXL">XXL</option>
              <option value="XXXL">XXXL</option>
              {/* Add more states here */}
            </select>


            <select
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="bg-gray-100 border border-gray-300 rounded-md p-2"
            >
              <option value="">Select State</option>
              <option value="Andhra Pradesh">Andhra Pradesh</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
              {/* Add more states here */}
            </select>
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="bg-gray-100 border border-gray-300 rounded-md p-2"
            >
              <option value="India">India</option>
              {/* Add other countries here */}
            </select>
            <input
              type="text"
              placeholder="Mobile Number (10 digits)"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              className="bg-gray-100 border border-gray-300 rounded-md p-2"
            />
            <input
              type="text"
              placeholder="Pincode (6 digits)"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
              className="bg-gray-100 border border-gray-300 rounded-md p-2"
            />
          </div>
        </form>
        <button
          onClick={handleDelivery}
          className={`bg-primeColor hover:bg-black text-gray-200 hover:text-white cursor-pointer w-full text-base font-medium h-10 rounded-md duration-300 ${!(isDeliveryConfirmed && formValid) ? "opacity-50 cursor-not-allowed" : ""
            }`}
        >
          Confirm delivery address
        </button>
        <button
          onClick={handleProceedToPayment}
          className={`bg-primeColor hover:bg-black text-gray-200 hover:text-white cursor-pointer w-full text-base font-medium h-10 rounded-md duration-300 ${!(isDeliveryConfirmed && formValid) ? "opacity-50 cursor-not-allowed" : ""
            }`}
        >
          Pay
        </button>
      </div>
    </div>
  );

};

export default Payment;
