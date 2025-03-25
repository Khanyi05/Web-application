// App.js
import nameThatIChooseForAnImage from "./image-1.jpg";
import "./App.css";

function App() {
  return (
    <div className="main-container">
      <div className = "card1">
      <img 
      src={nameThatIChooseForAnImage} 
      alt="desk" 
      className="image" 
    />
    <div className="content">
      <p className="date">4 days ago</p>
      <p className="title">Post One</p>
      <p className="description">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error eaque
        temporibus atque facilis, commodi voluptas quisquam ab tenetur
        obcaecati nisi.
      </p>
    </div>
    <div className="footer">
      <div className="footerItem">
        <p className="footerValue">
          4 <sup>m</sup>
        </p>
        <p className="footerLabel">READ</p>
      </div>
      <div className="footerItem">
        <p className="footerValue">5132</p>
        <p className="footerLabel">VIEWS</p>
      </div>
      <div className="footerItem">
        <p className="footerValue">4</p>
        <p className="footerLabel">COMMENTS</p>
      </div>
    </div>
      </div>
      <div className="card2">
      <img 
      src={nameThatIChooseForAnImage} 
      alt="desk" 
      className="image" 
    />
    <div className="content">
      <p className="date">4 days ago</p>
      <p className="title">Post One</p>
      <p className="description">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error eaque
        temporibus atque facilis, commodi voluptas quisquam ab tenetur
        obcaecati nisi.
      </p>
    </div>
    <div className="footer">
      <div className="footerItem">
        <p className="footerValue">
          4 <sup>m</sup>
        </p>
        <p className="footerLabel">READ</p>
      </div>
      <div className="footerItem">
        <p className="footerValue">5132</p>
        <p className="footerLabel">VIEWS</p>
      </div>
      <div className="footerItem">
        <p className="footerValue">4</p>
        <p className="footerLabel">COMMENTS</p>
      </div>
    </div>
      </div>
      <div className="card3">
      <img 
      src={nameThatIChooseForAnImage} 
      alt="desk" 
      className="image" 
    />
    <div className="content">
      <p className="date">4 days ago</p>
      <p className="title">Post One</p>
      <p className="description">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error eaque
        temporibus atque facilis, commodi voluptas quisquam ab tenetur
        obcaecati nisi.
      </p>
    </div>
    <div className="footer">
      <div className="footerItem">
        <p className="footerValue">
          4 <sup>m</sup>
        </p>
        <p className="footerLabel">READ</p>
      </div>
      <div className="footerItem">
        <p className="footerValue">5132</p>
        <p className="footerLabel">VIEWS</p>
      </div>
      <div className="footerItem">
        <p className="footerValue">4</p>
        <p className="footerLabel">COMMENTS</p>
      </div>
    </div>
      </div>
      <div className="card4">
      <img 
      src={nameThatIChooseForAnImage} 
      alt="desk" 
      className="image" 
    />
    <div className="content">
      <p className="date">4 days ago</p>
      <p className="title">Post One</p>
      <p className="description">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error eaque
        temporibus atque facilis, commodi voluptas quisquam ab tenetur
        obcaecati nisi.
      </p>
    </div>
    <div className="footer">
      <div className="footerItem">
        <p className="footerValue">
          4 <sup>m</sup>
        </p>
        <p className="footerLabel">READ</p>
      </div>
      <div className="footerItem">
        <p className="footerValue">5132</p>
        <p className="footerLabel">VIEWS</p>
      </div>
      <div className="footerItem">
        <p className="footerValue">4</p>
        <p className="footerLabel">COMMENTS</p>
      </div>
    </div>
      </div>
    </div>
  );
}

export default App;