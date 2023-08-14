import './App.css';

function App() {
  return (
    <div className="main-container">
      <div className="nft-container">
        <div className="container-image">
          <div className="main-image"></div>
          <div className="color-image"></div>
        </div>
        <div className="container-title">
          <h1>Equilibrium #3429</h1>
          <p>Our Equilibrium collection promotes balance and calm.</p>
        </div>
        <div className="container-details">
          <div className="pricing">
            <div className="pricing-img"></div>
            <div>
              <p>0.041ETH</p>
            </div>
          </div>
          <div className="timing">
            <div className="timing-img"></div>
            <div>
              <p>3 days left</p>
            </div>
          </div>
        </div>
        <hr className="container-line" />
        <div className="author">
          <div className="author-img"></div>
          <p>Creation of <p className="author-name">Temur Tsintsadze</p></p>
        </div>
      </div>
    </div>
  );
}

export default App;
