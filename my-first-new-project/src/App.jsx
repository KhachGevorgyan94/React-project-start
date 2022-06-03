import './App.css';

function App() {
  return (
    <div className="App">
        <header>
            <div className="container">
                <div className="logo">Free css layouts</div>
            </div>
        </header>
        <section>
            <div className="container">
                <div className="section-main">
                    <div className="section-part">
                        <p>Content Here</p>
                    </div>
                    <div className="section-part">
                        <p>Content Here</p>
                    </div>
                    <div className="section-part">
                        <p>Content Here</p>
                    </div>
                </div>
                <div className="section-end">
                    <p>Secondari column</p>
                </div>
            </div>
        </section>
        <footer>
            <div className="container">
                <p class="footer-title">Footer</p>
            </div>
        </footer>
    </div>
  );
}

export default App;
