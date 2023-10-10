import React, { useState } from "react";
import styles from "../styles/Medical.module.css";

const MedicalAssistant = () => {
  const [userInput, setUserInput] = useState({
    age: "",
    gender: "",
    location: "",
    history: "",
    symptoms: "",
  });

  const handleUserInput = (e) => {
    const { name, value } = e.target;
    setUserInput({ ...userInput, [name]: value });
  };  

  const handleSubmit = (e) => {
    return true;
  };

  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <p className={styles.title}>Dr Bob's Cheap Diagnosis</p>
        <p className={styles.subtitle}>
          50% of the time, it's correct everytime!!!
        </p>
      </div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.label} htmlFor="age">
          Age:
        </label>
        <input
          className={styles.input}
          type="text"
          id="age"
          name="age"
          value={userInput.age}
          onChange={handleUserInput}
        />
        <label className={styles.label} htmlFor="gender">
          Gender:
        </label>
        <input
          className={styles.input}
          type="text"
          id="gender"
          name="gender"
          value={userInput.gender}
          onChange={handleUserInput}
        />
        <label className={styles.label} htmlFor="location">
          Location:
        </label>
        <input
          className={styles.input}
          type="text"
          id="location"
          name="location"
          value={userInput.location}
          onChange={handleUserInput}
        />
        <label className={styles.label} htmlFor="medicalhistory">
          Relevant medical history (if applicable):
        </label>
        <textarea
          className={styles.textarea}
          type="text"
          id="history"
          name="history"
          rows="5"
          value={userInput.history}
          onChange={handleUserInput}
        />
        <label className={styles.label} htmlFor="symptoms">
          Symptoms:
        </label>
        <textarea
          className={styles.textarea}
          type="text"
          id="symptoms"
          name="symptoms"
          rows="5"
          value={userInput.symptoms}
          onChange={handleUserInput}
        />
        <button className={styles.button} type="submit">Submit</button>
      </form>
    </main>
  );
};

export default MedicalAssistant;
