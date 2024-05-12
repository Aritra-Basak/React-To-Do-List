import logo from './logo.svg';
import './App.css';


function App() {
    
  return (
    
    <div className="App">
         <header className="App-header">
              <figure className="text-center">
                  <blockquote className="blockquote">
                    <p className='fs-1 text-info'>Welcome to React.</p>
                  </blockquote>
                  <figcaption className="blockquote-footer">
                    Aritra Basak <cite title="Source Title">EY</cite>
                  </figcaption>
              </figure>
      
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <button className='btn btn-outline-warning my-4'>
              <a
                className="App-link text-decoration-none"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a></button>

              <button onClick={helloALert} className='btn btn-outline-info'>Click here</button>
      </header>
    </div>
  );
}
function helloALert()
{
  alert("Hello React");
}
export default App;
