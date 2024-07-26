import { useState } from "react";

export function CreateTodo(props) {
  const [title, setTitle] = useState("");
  const [description, serDescription] = useState("");
  return (
    <div>
      <input
        style={{
          padding: 10,
          margin: 10,
        }}
        type="text"
        placeholder="title"
      />
      <br />
      <input
        style={{
          padding: 10,
          margin: 10,
        }}
        type="text"
        placeholder="description"
      />
      <br />
      <button
        style={{
          padding: 10,
          margin: 10,
        }}
        onClick={() => {
          fetch("http://localhost:3000/todos"),
            {
              method: "POST",
              body: {
                title: title,
                description: description,
              },
            }.then(async function (res) {
              const json = await res.json();
            });
        }}
      >
        Add a Todo
      </button>
    </div>
  );
}
