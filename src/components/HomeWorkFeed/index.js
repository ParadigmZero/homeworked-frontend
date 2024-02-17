import Post from "./Post";
import css from "./NewsFeed.module.css";
import DropdownTerm from "../SideFilter";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { UseAppContext } from "../../appContext";
import Greeting from "./Greeting";
import * as actions from "../../libs/actions";

const HomeWorkFeed = () => {
  const history = useHistory();
  const { state, dispatch } = UseAppContext();
  const [filter1, setFilter1] = useState("");
  const [filter2, setFilter2] = useState("");

  function goToClassroom(index) {
    dispatch({ type: actions.HOMEWORK_CHANGE, payload: index });
    history.push("/classroom");
  }

  let homeworkList = state.homework;
  console.log(homeworkList);

  function changeFilter(f1, f2) {
    setFilter1(f1);
    setFilter2(f2);
  }


  return (
    <div>
      <Greeting />
      <DropdownTerm handleClick={changeFilter} />
      <ul className={css.post}>
        {homeworkList
          .map((homework, index) => [
            <li key={index}>
              {homework.dateset.includes(filter1) ||
                homework.dateset.includes(filter2) ? (
                <Post
                  homework={homework}
                  index={index}
                  clickToClassroom={goToClassroom}
                />
              ) : null}
            </li>,
          ])
          .reverse()}
      </ul>
    </div>
  );
};

export default HomeWorkFeed;
