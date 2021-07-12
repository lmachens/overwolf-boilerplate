import React from 'react';
import styles from './Dev.module.css';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import * as examples from './components/examples';

const examplesList = Object.entries(examples)
  .map(([key, value]) => ({
    title: key.replace(/([a-z])([A-Z])/g, '$1 $2'),
    component: value,
  }))
  .sort((a, b) => a.title.localeCompare(b.title));

function App(): JSX.Element {
  return (
    <Router>
      <div className={styles.container}>
        <aside className={styles.aside}>
          <h2>Examples</h2>
          <nav>
            <ul>
              {examplesList.map((example) => (
                <li key={example.title}>
                  <Link to={`/${example.title}`}>{example.title}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
        <main className={styles.main}>
          <Switch>
            <Route exact path="/">
              Please select an example
            </Route>
            {examplesList.map((example) => (
              <Route key={example.title} exact path={`/${example.title}`}>
                <example.component />
              </Route>
            ))}
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
