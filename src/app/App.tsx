import logo from './logo.svg';
import styles from './App.module.css';
import Welcome from './components/Welcome/Welcome';

function App(): JSX.Element {
  return (
    <div className={styles.container}>
      <img src={logo} className={styles.logo} alt="logo" />
      <Welcome />
      <p>Something great will happen here!</p>
      <button
        onClick={() =>
          overwolf.windows.getCurrentWindow((result) => {
            overwolf.windows.close(result.window.id);
          })
        }
      >
        Close
      </button>
    </div>
  );
}

export default App;
