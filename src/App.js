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
          <h1><a href="https://fb.com/temo.tsintsadze">Equilibrium #3429</a></h1>
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
          <p>Creation of <a href="https://fb.com/temo.tsintsadze" className="author-name">Temur Tsintsadze</a></p>
        </div>
      </div>
    </div>
  );
}

export default App;
