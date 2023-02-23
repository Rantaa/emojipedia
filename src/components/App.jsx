import React from "react";
import Term from "./Term";
import emojipedia from "../emojipedia";

function createTerms(term) {
  return <Term img={term.emoji} title={term.name} desc={term.meaning} />;
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(createTerms)}</dl>
    </div>
  );
}

export default App;
