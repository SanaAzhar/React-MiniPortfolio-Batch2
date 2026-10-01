import ProductCard from "./components/ProductCard"
import Card from "./components/Card"

import laptop from "./assets/laptop.jpg"
import smartphone from "./assets/smartphone.jpg"
import headphones from "./assets/headphones.jpg"
import profile from "./assets/profile.jpg"

function App() {
  return (
    <div className="app">
      <header className="page-header">
        <h1>My Product & Card Collection</h1>
        <p>React Assignment 2</p>
      </header>

      <main>
        <section className="products-section">
          <h2 className="section-title">Products</h2>

          <div className="product-container">
            <ProductCard
              productName="Laptop"
              price="$850"
              inStock={true}
              image={laptop}/>

            <ProductCard
              productName="Smartphone"
              price="$550"
              inStock={false}
              image={smartphone}/>

            <ProductCard
              productName="Wireless Headphones"
              price="$120"
              inStock={true}
              image={headphones}/>
          </div>
        </section>

        <hr></hr>

  <section className="cards-section">
  <h2 className="section-title">My Profile</h2>

  <div className="cards-container">
    <Card title="Sana Azhar">
      <img
        src={profile}
        alt="Sana Azhar"
        className="profile-image" />

      <h3>Software Engineering Graduate</h3>

      <p>I am an aspiring full stack developer interested in creating
        modern and user-friendly websites.</p>

      <div className="profile-skills">
        <span>HTML</span>
        <span>CSS</span>
        <span>JavaScript</span>
        <span>Bootstrap</span>
      </div>

      <button>View Profile</button>
    </Card>
  </div>
</section>       
        
      </main>
    </div>
  )
}

export default App