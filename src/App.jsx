import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import List from "./components/ui/List";

const cw = console.log.bind(console);

const initialList = [
  { id: 0, label: "Da nahranq kokoshkite", packed: true },
  { id: 1, label: "Da nahranq zaicite", packed: false },
  { id: 2, label: "Da nahranq sviniete", packed: false },
];

let initialId = initialList.length;

function App() {
  const [list, setList] = useState(initialList);
  const [input, setInput] = useState("");

  let packed = list.filter((l) => l.packed == true).length;

  function handleDeleteItem(id) {
    setList(list.filter((l) => l.id !== id));
  }

  function handleAddItem() {
    setList([
      ...list,
      { id: initialId++, label: input + initialId, packed: false },
    ]);
  }

  function handleChangeItem(item) {
    setList(
      list.map((l) => {
        if (l.id === item.id) {
          return { ...item, packed: !item.packed };
        } else {
          return l;
        }
      })
    );
  }

  return (
    <div className="w-[300px] h-[400px] overflow-y-auto">
      <div className="flex gap-2">
        <Input
          type="text"
          placeholder="Add item"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button onClick={handleAddItem}>Click me</Button>
      </div>
      <br></br>
      <List
        list={list}
        handleDeleteItem={handleDeleteItem}
        handleChangeItem={handleChangeItem}
      ></List>
      <Separator className="my-4" />
      {packed} of {list.length} packed!
    </div>
  );
}

export default App;
