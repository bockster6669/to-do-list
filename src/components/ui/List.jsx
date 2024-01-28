import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

export default function List({ state, dispatch }) {
  return (
    <ul className="flex flex-col gap-2">
      {state.list.map((item) => {
        return <Item key={item.id} item={item} dispatch={dispatch} />;
      })}
    </ul>
  );
}

function Item({ item, dispatch }) {
  return (
    <li>
      <div className="flex justify-between items-center">
        <Checkbox
          id="terms"
          defaultChecked={item.packed}
          onClick={() => {
            dispatch({ type: "CHANGE", payload: item });
          }}
        />
        <label
          htmlFor="terms"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {item.label}
        </label>
        <Button
          onClick={() => {
            dispatch({ type: "DELETE", payload: item.id });
          }}
        >
          Delete
        </Button>
      </div>
    </li>
  );
}
