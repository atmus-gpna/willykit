import React, { useRef } from "react";
import { TextField } from "../TextField";

const App: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

  const handleFocus = () => {
    inputRef.current?.focus();
  };

  return (
    <div>
      <TextField
        ref={inputRef}
        label="Username"
        used="header"
        placeholder="Enter your username"
      />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
};

export default App;
