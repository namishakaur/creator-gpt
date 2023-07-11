import React from "react";
import Header from "../../components/Header/Header";
import "./Form.css";

export default function TallyForm() {
  const logoprops = {
    brandname: "creator-gpt.",
    subtitle: "The AI Co-Pilot You’ve Been Waiting For.",
  };
  return (
    <div className="screencont">
      <Header {...logoprops} />
      <div className="tallyform">
        <iframe
          src="https://tally.so/embed/mJdQ6r?transparentBackground=1&dynamicHeight=1"
          loading="lazy"
          width="100%"
          height="931"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          title="Creator-GPT (early access)"
        ></iframe>
      </div>
    </div>
  );
}
