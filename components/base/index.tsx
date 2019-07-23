import { useState } from "react";
import appState from "state";
import BaseComp from "ui/base";

export default () => {
  const [state, actions] = appState.useState();
  const [counter, setCounter] = useState(0);
  
  const addOneAndPull = () => {
    setCounter(counter + 1);
    actions.pullSomeRepos();
  };

  return (
    <div>
      <h2>Repos:</h2>
      <div>
        <BaseComp counter={counter} onClick={addOneAndPull} />
      </div>
      {state.repos.map(r => (
        <h4 key={r.id}>{r.name}</h4>
      ))}
    </div>
  );
};
