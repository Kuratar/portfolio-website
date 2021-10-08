import Navbar from "./components/Navbar";
import { makeStyles } from "@mui/styles";
import { Route, Switch} from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import "./App.css";

const useStyles = makeStyles({
  page: {
    backgroundColor: "#242c38",
    paddingTop: 64,
    fontFamily: "Roboto",
  },
});

function App() {
  const classes = useStyles();

  return (
    <div className={classes.page}>
      <Navbar />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/" exact component={Home} />
      </Switch>
    </div>
  );
}

export default App;
