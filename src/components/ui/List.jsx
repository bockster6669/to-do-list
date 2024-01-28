import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

export default function List({ list, handleDeleteItem, handleChangeItem }) {
  return (
    <ul className="flex flex-col gap-2">
      {list.map((l) => {
        return (
          <Item
            key={l.id}
            list={l}
            handleDeleteItem={handleDeleteItem}
            handleChangeItem={handleChangeItem}
          />
        );
      })}
    </ul>
  );
}

function Item({ list, handleDeleteItem, handleChangeItem }) {
  return (
    <li>
      <div className="flex justify-between items-center">
        <Checkbox
          id="terms"
          defaultChecked={list.packed}
          onClick={() => {
            handleChangeItem(list);
          }}
        />
        <label
          htmlFor="terms"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {list.label}
        </label>
        <Button
          onClick={() => {
            handleDeleteItem(list.id);
          }}
        >
          Delete
        </Button>
      </div>
    </li>
  );
}
