import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { DataType } from "./ToDoSymbol";
import { toggleIsClearState } from "../redux/characterListSlice";
import styled, { css } from "styled-components";
import { checkIcon } from "../assets/images";

export function AllChecker({ toDos, calledBy }: Omit<DataType, "data">) {
  const dispatch = useDispatch();
  const listedToDos = Object.keys(toDos).filter((key) => toDos[key].isListed);
  const clearedToDos = Object.keys(toDos).filter((key) => toDos[key].isClear);
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const AllCheckToggle = () => {
    if (!isChecked) {
      listedToDos.map((todo) => {
        !clearedToDos.includes(todo) && dispatch(toggleIsClearState([todo, calledBy]));
      });
      setIsChecked(true);
    }
    if (isChecked) {
      listedToDos.map((todo) => {
        dispatch(toggleIsClearState([todo, calledBy]));
      });
      setIsChecked(false);
    }
  };

  useEffect(() => {
    if (listedToDos.length === clearedToDos.length) {
      setIsChecked(true);
    }
    if (listedToDos.length !== clearedToDos.length) {
      setIsChecked(false);
    }
  }, [listedToDos, clearedToDos]);

  return (
    <AllCheckerDiv onClick={AllCheckToggle} $isChecked={isChecked}>
      <span>전체완료</span>
      <div className="check-box" />
    </AllCheckerDiv>
  );
}

const AllCheckerDiv = styled.div<{ $isChecked: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  cursor: pointer;

  .check-box {
    width: 20px;
    height: 20px;
    border: 1px solid #e5e7eb;
    border-radius: 3px;
    ${({ $isChecked }) => css`
      background: ${$isChecked ? `no-repeat center/cover url(${checkIcon})` : "none"};
    `};
  }
`;
