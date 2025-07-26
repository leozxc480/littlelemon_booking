import React from "react";
import BookingForm from "./BookingForm";

const Booking = (props) => {
    return (
        <BookingForm
            availableTimes={props.availableTimes}
            dispatch={props.dispatch}
            submitForm={props.submitForm} // Fixed: Use submitForm (lowercase s)
        />
    );
};

export default Booking;