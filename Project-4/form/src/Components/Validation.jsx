import "./Validation.css";
import { useState } from "react";

const Validation = () => {
    const [inputForm, setInputForm] = useState({
        fname: "",
        lname: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
        dob: "",
        gender: "",
        review: "",
        rating: "",
        terms: false
    });

    const [errors, setErrors] = useState({});
    const [submittedData, setSubmittedData] = useState(null);

    const handleChanged = (e) => {
        const { name, value, type, checked } = e.target;
        setInputForm({
            ...inputForm,
            [name]: type === "checkbox" ? checked : value
        });
    };

    const validateForm = () => {
        const newErrors = {};

        if (!inputForm.fname.trim()) newErrors.fname = "First name is required";
        if (!inputForm.lname.trim()) newErrors.lname = "Last name is required";

        if (!inputForm.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(inputForm.email)) {
            newErrors.email = "Invalid email format";
        }

        if (!inputForm.phone.trim()) {
            newErrors.phone = "Phone number is required";
        } else if (!/^[0-9]{10}$/.test(inputForm.phone)) {
            newErrors.phone = "Enter a valid 10-digit number";
        }

        if (!inputForm.password.trim()) {
            newErrors.password = "Password is required";
        } else if (inputForm.password.length < 6) {
            newErrors.password = "Minimum 6 characters required";
        }

        if (!inputForm.confirmPassword.trim()) {
            newErrors.confirmPassword = "Confirm password is required";
        } else if (inputForm.password !== inputForm.confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match";
        }

        if (!inputForm.gender) newErrors.gender = "Please select gender";
        if (!inputForm.dob) newErrors.dob = "Date of birth is required";
        if (!inputForm.review.trim()) newErrors.review = "Review is required";

        if (!inputForm.rating) {
            newErrors.rating = "Select a rating";
        } else if (parseInt(inputForm.rating) < 1 || parseInt(inputForm.rating) > 5) {
            newErrors.rating = "Rating must be 1 to 5";
        }

        if (!inputForm.terms) newErrors.terms = "You must agree to terms";

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setSubmittedData(inputForm);
            alert("Form submitted successfully!");

            // Reset form
            setInputForm({
                fname: "",
                lname: "",
                email: "",
                phone: "",
                password: "",
                confirmPassword: "",
                dob: "",
                gender: "",
                review: "",
                rating: "",
                terms: false
            });
            setErrors({});
        }
    };

    return (
        <div className="container">
            <h2>User Review Form</h2>
            <form onSubmit={handleSubmit} className="form-container">
                <label>First Name:</label>
                <input type="text" name="fname" value={inputForm.fname} onChange={handleChanged} />
                <span className="error">{errors.fname}</span>

                <label>Last Name:</label>
                <input type="text" name="lname" value={inputForm.lname} onChange={handleChanged} />
                <span className="error">{errors.lname}</span>

                <label>Email:</label>
                <input type="email" name="email" value={inputForm.email} onChange={handleChanged} />
                <span className="error">{errors.email}</span>

                <label>Phone:</label>
                <input type="text" name="phone" value={inputForm.phone} onChange={handleChanged} />
                <span className="error">{errors.phone}</span>

                <label>Password:</label>
                <input type="password" name="password" value={inputForm.password} onChange={handleChanged} />
                <span className="error">{errors.password}</span>

                <label>Confirm Password:</label>
                <input type="password" name="confirmPassword" value={inputForm.confirmPassword} onChange={handleChanged} />
                <span className="error">{errors.confirmPassword}</span>

                <label>Gender:</label>
                <div className="radio-group">
                    <label><input type="radio" name="gender" value="Male" onChange={handleChanged} checked={inputForm.gender === "Male"} /> Male</label>
                    <label><input type="radio" name="gender" value="Female" onChange={handleChanged} checked={inputForm.gender === "Female"} /> Female</label>
                    <label><input type="radio" name="gender" value="Other" onChange={handleChanged} checked={inputForm.gender === "Other"} /> Other</label>
                </div>
                <span className="error">{errors.gender}</span>

                <label>Date of Birth:</label>
                <input type="date" name="dob" value={inputForm.dob} onChange={handleChanged} />
                <span className="error">{errors.dob}</span>

                <label>Review Text:</label>
                <textarea name="review" value={inputForm.review} onChange={handleChanged}></textarea>
                <span className="error">{errors.review}</span>

                <label>Rating:</label>
                <div className="star-rating">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <span
                            key={star}
                            className={inputForm.rating >= star ? "star filled" : "star"}
                            onClick={() => setInputForm({ ...inputForm, rating: star.toString() })}
                            role="button"
                            tabIndex={0}
                            aria-label={`${star} Star`}
                        >
                            &#9733;
                        </span>
                    ))}
                </div>
                <span className="error">{errors.rating}</span>

                <label>
                    <input type="checkbox" name="terms" checked={inputForm.terms} onChange={handleChanged} />
                    I agree to the terms & conditions
                </label>
                <span className="error">{errors.terms}</span>

                <button type="submit">Submit</button>
            </form>

            {/* Display submitted data in card */}
            {submittedData && (
                <div className="card">
                    <h3>{submittedData.fname} {submittedData.lname}</h3>
                    <p><strong>Email:</strong> {submittedData.email}</p>
                    <p><strong>Phone:</strong> {submittedData.phone}</p>
                    <p><strong>Gender:</strong> {submittedData.gender}</p>
                    <p><strong>Date of Birth:</strong> {submittedData.dob}</p>
                    <p><strong>Review:</strong> {submittedData.review}</p>
                    <p><strong>Rating:</strong> {submittedData.rating} / 5</p>
                </div>
            )}
        </div>
    );
};

export default Validation;
