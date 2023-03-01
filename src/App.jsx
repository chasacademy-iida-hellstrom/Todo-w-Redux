import { useState } from "react";
import "./App.css";
import { todoList, add, remove, done } from "./todos";

function App() {
  //1. skapa todolist state
  //2. visa listan i html-koden. Använd list.map(). Se hacker stories.
  //3. lägg till nya objekt till arrayen med ett input fält och en add knapp.
  //

  const [text, setText] = useState();

  // spara till en variabel
  function handleAdd(event) {
    setText(event.target.value);
  }

  return (
    <div className="App">
      <input type="text" onChange={handleAdd} />
      <button onClick={() => add({ title: text })}>Add</button>
      {todoList().map((item) => {
        return (
          <div key={item.id}>
            {item.title} {item.done}
            <button onClick={() => done(item.id)}>
              {item.done ? "Undo" : "Done"}
            </button>
            <button onClick={() => remove(item.id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
