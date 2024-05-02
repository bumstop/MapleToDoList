import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { ToDoListCharacter } from "./ToDoListCharacter";

export function ToDoList() {
  const CharacterList = useSelector((state: RootState) => state.CharacterList);
  const ListedCharacterName = Object.keys(CharacterList);

  return (
    <>
      {ListedCharacterName.map((key) => (
        <div key={key}>
          <ToDoListCharacter
            characterListKey={key}
            characterListValue={CharacterList[key]}
          />
        </div>
      ))}
    </>
  );
}
