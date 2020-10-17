import React, { useState, useEffect } from "react";
import "./Header.css";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
import db from "./firebase";

function TinderCards() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const unsubscribe = db
      .collection("people")
      .onSnapshot((snapshot) =>
        setPeople(snapshot.docs.map((doc) => doc.data()))
      );

    return () => {
      // clean up detach listner in browser
      unsubscribe();
    };
  }, []);

  console.log(people);
  return (
    <div>
      <h1>Tinder Cards</h1>
      <div className="tinderCards__tinderCardContainer ">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
