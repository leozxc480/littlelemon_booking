import React, { useState } from "react";


const BookingForm = (props) => {
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guest, setGuest] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = { name, date, time, guest };
        console.log("Form submitted with data:", formData); // For debugging
        props.submitForm(formData); // Fixed: Use submitForm (lowercase s)
    };

    const handleChange = (e) => {
        const selectedDate = e.target.value;
        setDate(selectedDate);
        props.dispatch(new Date(selectedDate)); // Pass Date object
    };

    return (
        <header>
            <section className="form">
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <div>
                            <label htmlFor="book-name">Name:</label>
                            <input
                                id="book-name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="book-date">Choose Date:</label>
                            <input
                                id="book-date"
                                value={date}
                                onChange={handleChange}
                                type="date"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="book-time">Choose Time:</label>
                            <select
                                id="book-time"
                                value={time}
                                onChange={(e) => setTime(e.target.value)}
                                required
                            >
                                <option value="">Select a Time</option>
                                {props.availableTimes.availableTimes.map((availableTime) => (
                                    <option key={availableTime}>{availableTime}</option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label htmlFor="book-guests">Number of Guests:</label>
                            <input
                                id="book-guests"
                                min="1"
                                value={guest}
                                onChange={(e) => setGuest(e.target.value)}
                                required
                            />
                        </div>

                        <div className="btnReceive">
                            <input
                                aria-label="On Click"
                                type="submit"
                                value="Make Your Reservation"
                            />
                        </div>
                    </fieldset>
                </form>
            </section>
        </header>
    );
};

export default BookingForm;