import HomeworkViewer from "../HomeworkViewer";
import MyClassroom from "../MyClassroom";
import HomeWorkFeed from "../HomeWorkFeed";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "../Header";
import DropDown from "../DropDown";
import useFetch from "../../hooks/useFetch";

function App() {
  useFetch();

  return (
    <>
      <Router>
        <Header />
        <DropDown />
        <Switch>
          <Route path="/homeworkViewer">
            <HomeworkViewer />
          </Route>
          <Route path="/classroom">
            <MyClassroom />
          </Route>
          <Route path="/">
            <HomeWorkFeed />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
