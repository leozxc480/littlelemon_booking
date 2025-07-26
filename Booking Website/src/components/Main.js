import React, { useReducer } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Booking from "./Booking";
import Header from "./Header";
import Swal from "sweetalert2";

const Main = () => {

    const handleOrder = () => {
        Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500
        });
    }
    
    const seedRandom = function(seed) {
        var m = 2**35 - 31;
        var a = 185852;
        var s = seed % m;
        return function() {
            return (s = s * a % m) / m;
        }
    }

    const fetchAPI = function(date) {
        let result = [];
        let random = seedRandom(date.getDate());
        for (let i = 17; i <=23; i++) {
            if (random() < 0.5) {
                result.push(i + ":00");
            }
            if (random() > 0.5) {
                result.push(i + ":30");
            }
        }
        return result;
    }

    const submitAPI = function (formData) {
        return true;
    }

    const initialState = {availableTimes: fetchAPI(new Date())};
    const [state, dispatch] = useReducer(updateTimes, initialState);

    function updateTimes(state, date) {
        return {availableTimes: fetchAPI(date)}
    }

    const navigate = useNavigate();
    function submitForm(formData) {
        if (submitAPI(formData)) {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Your Reserve has been Received",
                showConfirmButton: false,
                timer: 1500
            });
            navigate("/");
        }
    }

    return (
        <main>
            <Routes>
                <Route path="/" element={<Header />} />
                <Route path="/booking" element={<Booking availableTimes={state} dispatch={dispatch} submitForm={submitForm}/>} />
            </Routes>
        </main>
    );
};

export default Main;