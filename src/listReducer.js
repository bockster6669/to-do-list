export const initialList = [
  { id: 0, label: "Da nahranq kokoshkite", packed: true },
  { id: 1, label: "Da nahranq zaicite", packed: false },
  { id: 2, label: "Da nahranq sviniete", packed: false },
];

let initialId = initialList.length;

export function listReducer(state, action) {
  switch (action.type) {
    case "DELETE":
      return {
        list: state.list.filter((l) => l.id !== action.payload),
        input: state.input,
      };
    case "ADD":
      return {
        list: [
          ...state.list,
          {
            id: initialId++,
            label: action.payload + initialId,
            packed: false,
          },
        ],
        input: state.input,
      };
    case "CHANGE":
      return {
        list: state.list.map((l) => {
          if (l.id === action.payload.id) {
            return { ...action.payload, packed: !action.payload.packed };
          } else {
            return l;
          }
        }),
        input: state.input,
      };
    case "CHANGE_INPUT":
      return {
        list: state.list,
        input: action.payload,
      };
    default:
      return state;
  }
}
