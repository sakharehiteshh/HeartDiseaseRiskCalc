import React, { useState } from 'react';
import './Form.css';

const Form = () => {
    const [formData, setFormData] = useState({
        familyHistory: '',
        smoking: '',
        diabetes: '',
        highBP: '',
        highCholesterol: '',
        age: '',
    });
    const [riskLevel, setRiskLevel] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const highRisk = 
            formData.familyHistory === 'yes' ||
            formData.smoking === 'yes' ||
            formData.diabetes === 'yes' ||
            formData.highBP === 'yes' ||
            formData.highCholesterol === 'yes' ||
            parseInt(formData.age) > 60;

        setRiskLevel(highRisk ? 'Higher than Average Risk' : 'Average Risk');
    };

    return (
        <div className="container">
            <h1>Heart Disease Risk Calculator</h1>
            <form onSubmit={handleSubmit}>
                {[
                    { label: 'Family History of Heart Disease', name: 'familyHistory' },
                    { label: 'Smoking', name: 'smoking' },
                    { label: 'Diabetes', name: 'diabetes' },
                    { label: 'High Blood Pressure', name: 'highBP' },
                    { label: 'High Cholesterol', name: 'highCholesterol' }
                ].map(({ label, name }) => (
                    <div key={name} className="question">
                        <h2>{label}:</h2>
                        <label>
                            <input
                                type="radio"
                                name={name}
                                value="yes"
                                onChange={handleChange}
                                required
                            /> Yes
                        </label>
                        <label>
                            <input
                                type="radio"
                                name={name}
                                value="no"
                                onChange={handleChange}
                                required
                            /> No
                        </label>
                    </div>
                ))}

                <div className="question">
                    <h2>Age:</h2>
                    <input
                        required
                        type="number"
                        name="age"
                        onChange={handleChange}
                        min="0"
                        placeholder="Enter your age"
                    />
                </div>

                <button type="submit">Calculate Risk</button>
            </form>

            {riskLevel && <h2>Risk Level: {riskLevel}</h2>}
        </div>
    );
};

export default Form;
