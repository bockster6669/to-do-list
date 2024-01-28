import { useReducer, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import List from "./components/ui/List";
import { listReducer, initialList } from "./listReducer.js";

const cw = console.log.bind(console);

function App() {
  const [state, dispatch] = useReducer(listReducer, {
    list: initialList,
    input: "",
  });

  return (
    <div className="w-[300px] h-[400px] overflow-y-auto">
      <div className="flex gap-2">
        <Input
          type="text"
          value={state.input}
          placeholder="Add item"
          onChange={(e) => {
            dispatch({
              type: "CHANGE_INPUT",
              payload: e.target.value,
            });
          }}
        />
        <Button
          onClick={() => {
            dispatch({ type: "ADD", payload: state.input });
          }}
        >
          Add
        </Button>
      </div>
      <br></br>
      <List state={state} dispatch={dispatch}></List>
      <Separator className="my-4" />
      {/* {packed} of {state.length} packed! */}
    </div>
  );
}

export default App;
