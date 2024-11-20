import React, { useState } from "react";
import styles from "./styles/FeedBack.module.css";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";

const feedbacks = [
  {
    id: 1,
    clientName: "Maria Shabbir",
    feedback: `The customer experience was exceptional from
start to finish. The website is user friendly, the
checkout process was smooth and the clothes I
ordered fit prefectly. I’m beyond satified!`,
  },
  {
    id: 2,
    clientName: "Beenish Mumtaz",
    feedback: `I absolutely love the quality and style of the
clothing I purchased from this website. customer
service was outstanding, and I received my order
quickly. Highly recommended !
`,
  },
  {
    id: 3,
    clientName: "Ayra Khan",
    feedback: `I had a great experience shopping on this
website. The clothes I brought are fashionable
and comfortable. Highly satisfied!`,
  },
  {
    id: 4,
    clientName: "Ahmed Ali",
    feedback: `I’ve been shopping online for years, and this website offers the best prices and quality. The shipping was fast, and the clothes fit like a charm. I’m a loyal customer now!`,
  },
  {
    id: 5,
    clientName: "Sara Khan",
    feedback: `The product quality exceeded my expectations! The clothes are not only stylish but also very comfortable. I am absolutely thrilled with my purchase and can’t wait to shop again.`,
  },
  {
    id: 6,
    clientName: "Nashit Usman",
    feedback: `I had some issues with my order, but the customer support team was incredibly helpful and quick to resolve everything. The clothes were perfect, and I will definitely shop here again!`,
  },
];

export default function FeedBack() {
  const [activeFeedback, setActiveFeedback] = useState(2);
  const currentFeedbacks =
  activeFeedback === 1
    ? [
        feedbacks[0],
        feedbacks[1],
        feedbacks[2],
      ]
    : activeFeedback === feedbacks.length
    ? [
        feedbacks[feedbacks.length - 3],
        feedbacks[feedbacks.length - 2],
        feedbacks[feedbacks.length - 1],
      ]
    : [
        feedbacks[activeFeedback - 2],
        feedbacks[activeFeedback - 1],
        feedbacks[activeFeedback],
      ];
  
  const prevFeedback = () => {
    if (activeFeedback > 1) {
      setActiveFeedback(activeFeedback - 1);
    }
    
  };
  const nextFeedback = () => {
    if (activeFeedback < feedbacks.length) {
      setActiveFeedback(activeFeedback + 1);
    }
    
  };
  return (
    <section className={styles.feedbackSection}>
      <h1>Clients Feedback</h1>
      <div className={styles.feedbackCards}>
        {currentFeedbacks.map((feedback) => (
          <Card
            key={feedback.id}
            clientName={feedback.clientName}
            feedback={feedback.feedback}
            isActive={feedback.id === activeFeedback}
          />
        ))}
      </div>

      <div className={styles.arrows}>
        <button className={`${styles.arrow} ${activeFeedback==1? styles.disabledArrow: ''}`}>
          <FaChevronLeft onClick={prevFeedback} />
        </button>
        <button className={`${styles.arrow} ${activeFeedback==feedbacks.length? styles.disabledArrow: ''}`}>
          <FaChevronRight onClick={nextFeedback} />
        </button>
      </div>
    </section>
  );
}

// Card.js
const Card = ({ clientName, feedback, isActive }) => {
  console.log(isActive);
  return (
    <div className={`${styles.card} ${isActive ? styles.activeCard : ""}`}>
      <FaQuoteLeft />
      <h3 className={styles.name}>{clientName}</h3>
      <p>{feedback}</p>
    </div>
  );
};
