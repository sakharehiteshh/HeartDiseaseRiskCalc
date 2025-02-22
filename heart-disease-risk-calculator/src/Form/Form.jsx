import React, { useState } from 'react';
import './Form.css';

const Form = () => {
    const [formData, setFormData] = useState({
        familyHistory: false,
        smoking: false,
        diabetes: false,
        highBP: false,
        highCholesterol: false,
        age: 0,
    });
    const [riskLevel, setRiskLevel] = useState('');

    const handleChange = (e) => {
        const { name, type, checked, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const highRisk =
            formData.familyHistory ||
            formData.smoking ||
            formData.diabetes ||
            formData.highBP ||
            formData.highCholesterol ||
            formData.age > 60;

        setRiskLevel(highRisk ? 'High Risk' : 'Average Risk');
    };

    return (
        <div className="container">
            <h1>Heart Disease Risk Calculator</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <h2>Family History:</h2> 
                    <input
                        type="checkbox"
                        name="familyHistory"
                        onChange={handleChange}
                    />
                </label>
                <label>
                    <h2>Smoking:</h2> 
                    <input
                        type="checkbox"
                        name="smoking"
                        onChange={handleChange}
                    />
                </label>
                <label>
                    <h2>Diabetes:</h2>
                    <input
                        type="checkbox"
                        name="diabetes"
                        onChange={handleChange}
                    />
                </label>
                <label>
                    <h2>High Blood Pressure:</h2>
                    <input
                        type="checkbox"
                        name="highBP"
                        onChange={handleChange}
                    />
                </label>
                <label>
                   <h2>High Cholesterol:</h2>
                    <input
                        type="checkbox"
                        name="highCholesterol"
                        onChange={handleChange}
                    />
                </label>
                <label>
                    <h2>Age:</h2>
                    <input
                        required
                        type="number"
                        name="age"
                        onChange={handleChange}
                        min="0"
                    />
                </label>
                <button type="submit">Calculate Risk</button>
            </form>
            {riskLevel && <h2>Risk Level: {riskLevel}</h2>}
        </div>
    );
};

export default Form;
