import logo from './logo.svg';
import './App.css';

let name = "Lakhan";
function App() {
  return (
   <>
   <nav>
   <li>Home1</li>
   <li>About</li>
   <li>Contact</li>
   </nav>
   <div className="container">
    <h1>Welcome {name}</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem corrupti qui officiis ipsum consequatur et accusantium mollitia soluta molestias pariatur veniam officia eaque numquam nulla exercitationem consectetur, assumenda eligendi unde?
    </p>
   </div>
   </>
  );
}

export default App;
