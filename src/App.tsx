import React, { useEffect } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import { fetchElementList } from "store/elements";
import { fetchCurrencyList } from "store/currencies";
import { fetchTagList } from "store/tags";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { ElementPage, TagPage } from "pages"
import { Alert } from "components/Alert"
import styled from "styled-components"

const StyledUl = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 16px 0;
`
const StyledLink = styled(Link)`
  color: ${p=>p.theme.colors.primary};
  font-size: 16px;
  font-weight: 700;
  &.mr {
    margin-right: 16px;
  }
`

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchElementList());
    dispatch(fetchCurrencyList());
    dispatch(fetchTagList());
  }, [dispatch]);
  return (
    <div className="App">
       <Router>
      <div>
        <nav>
          <StyledUl>
            <li>
              <StyledLink className={"mr"} to="/">Tags</StyledLink>
            </li>
            <li>
              <StyledLink to="/elements">Elements</StyledLink>
            </li>
          </StyledUl>
        </nav>
        <Alert />
        <Switch>
          <Route path="/elements">
            <ElementPage />
          </Route>
          <Route path="/">
            <TagPage />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
