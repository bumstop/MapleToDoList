import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useEffect } from "react";

export function ToDoList() {
  const CharacterList = useSelector((state: RootState) => state.CharacterList);
  const ListedCharacterName = Object.entries(CharacterList);
  useEffect(() => {
    ListedCharacterName.map(([key, value]) => {
      console.log(key, value);
    });
  }, [ListedCharacterName]);
  return (
    <>
      {/* {ListedCharacterName.map(([key, value]) => (
        <>
          <div>{key}</div>
          <div>{value.character_level}</div>
        </>
      ))} */}

    </>
  );
}
