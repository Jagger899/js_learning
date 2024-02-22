import { Note } from "./Note.js";

const myNote = new Note(document.getElementById("app"), "Hello");
// console.log(myNote);
// const myNote2 = new Note(document.getElementById("app"), "World");
// console.log(myNote.item);
// myNote.name = "Jagger"

document.getElementById("action").addEventListener("click", () => {
  // myNote.done = true;
  const myNote = new Note(
    document.getElementById("app"),
    prompt("Название дела")
  );
});
