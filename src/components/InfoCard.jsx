import React from "react";

const isIncome = Math.round(Math.random());

const InfoCard = () => {
  return (
    <div style={{ textAlign: "center", padding: "0 10%" }}>
      Try saying: <br />
      Add {isIncome ? "Income " : "Expense "}
      of {isIncome ? "$100 " : "$80 "}
      in Category {isIncome ? "Salary " : "Travel "}
      for {isIncome ? "Monday..." : "Next Wednesday..."}
    </div>
  );
};

export default InfoCard;
