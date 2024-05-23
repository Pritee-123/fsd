import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
     
      <nav class="navbar navbar-expand-lg navbar-light bg-info">
    <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src={logo} className="App-logo" alt="logo"  width="30" height="24"/>
      MINISTRY  OF WOMEN & CHILD DEVELOPMEN
    </a>
      
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Ragistration</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">NGO</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              STEP
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li><a class="dropdown-item" href="#">AGRICULTURE</a></li>
              <li><a class="dropdown-item" href="#">TRAINING</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  
        <a
        
        >
          <h1>It is Home Page</h1>
        </a>
    
    </div>
  );
}

export default App;
