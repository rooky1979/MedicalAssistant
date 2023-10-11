import React, { useState } from "react";
import styles from "../styles/Medical.module.css";
import { chatWithGPT } from "../api/chatGPT";

const MedicalAssistant = () => {
  const [userInput, setUserInput] = useState({
    age: "",
    gender: "",
    location: "",
    history: "",
    symptoms: "",
  });

  const [chatbotMessage, setChatbotMessage] = useState("");

  const handleUserInput = (e) => {
    const { name, value } = e.target;
    setUserInput({ ...userInput, [name]: value });
  };  

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const userMessage = `Age: ${userInput.age}, Gender: ${userInput.gender}, Location: ${userInput.location}, Relevant Medical History: ${userInput.history}, Symptoms: ${userInput.symptoms}`;
    
    try {
      const chatbotResponse = await chatWithGPT(userMessage);
      setChatbotMessage(chatbotResponse);
    } catch (error) {
      console.error('Error:', error);
    }
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
        <label className={styles.label} htmlFor="history">
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
      <div className={styles.response}>
        <p><strong>Dr Bob says:</strong></p>
        {chatbotMessage}
        </div>
    </main>
  );
};

export default MedicalAssistant;
