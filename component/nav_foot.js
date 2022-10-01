function navbar() {
  return `<div id="topDiv">
  <h4 id="offer">
    Get $40 Bonus Note!
    <span style="font-weight: normal; text-decoration: underline;"
      >An exclusive offer for new Nordstrom credit
      cardmembers.Restrictions apply.</span
    >
  </h4>
  <button>
    <img
      style="border-radius: 20%; margin-right: 3px"
      src="https://n.nordstrommedia.com/alias/IN.gif"
      alt=""
    />
    <h3 id="ind">India</h3>
  </button>
</div>
<div id="navCont">
  <div id="mid">
    <img id="Nlogo" src="nord_logo.png" alt="" />
    <div id="sear">
      <ion-icon id="lens" name="search-outline"></ion-icon>
      <input
        id="input"
        type="text"
        placeholder="Search for products or brands"
      />
    </div>
    <span style="cursor: pointer" id="signIn"
      >Sign In <ion-icon name="chevron-down-outline"></ion-icon
    ></span>
    <div id="ss"></div>
    <span> <ion-icon name="storefront-outline"></ion-icon> Stores </span>
    <span> <ion-icon name="bag-outline"></ion-icon> Purchases </span>
    <span>
      <a href="cart.html"><ion-icon name="bag-outline"></ion-icon></a>
    </span>
  </div>
</div>
<hr />
<div id="botDiv">
  <span id="sale" style="color: rgba(255, 0, 0, 0.98); cursor: pointer"
    >Sale</span
  >
  <span style="cursor: pointer" id="women">Women</span>
  <span style="cursor: pointer" id="men">Men</span>
  <span style="cursor: pointer" id="kids">Kids</span>
  <span style="cursor: pointer" id="young">Young Adults</span>
  <span style="cursor: pointer" id="active">Activewear</span>
  <span style="cursor: pointer" id="home">Home</span>
  <span style="cursor: pointer" id="beauty">Beauty</span>
  <span style="cursor: pointer" id="design">Designer</span>
  <span style="cursor: pointer" id="gifts">Gifts</span>
  <span style="cursor: pointer" id="thread">The Threads</span>
  <span style="cursor: pointer" id="brands">Brands</span>
</div>
<div id="ap">
  <div id="main">
    <!-- Append Here -->
  </div>
</div>`;
}



function footer() {
  return `<div id="main">
  <div class="card">
      <h3>Customer Service</h3>
      <p>Contact Us</p>
      <p>Order Status</p>
      <p>shipping</p>
      <p>Return Policy &Exchanges</p>
      <p>Price Adjustments</p>
      <p>Gift Cards</p>
      <p>FAQ</p>
      <p>Product Recalls</p>
      <p>
          <img id="ind" src="https://n.nordstrommedia.com/alias/IN.gif" alt="">
          India
      </p>
  </div>

  <div class="card">
      <h3>About Us</h3>
      <p>Careers</p>
      <p>Corporate Social Responsibility</p>
      <p>Diversity, Inclusion & Belonging</p>
      <p>Get Email Updates</p>
      <p>Nordstrom Blog</p>
      <p>The Thread</p>
      <p>Nordy Podcast</p>
  </div>

  <div class="card">
      <h3>Stores & Services</h3>
      <p>Find a Store</p>
      <p>Free Style Help</p>
      <p>Alterations & Tailoring</p>
      <p>Pop-In Shop</p>
      <p>Virtual Events</p>
      <p>Spa Nordstrom</p>
      <p>Nordstrom Restaurants</p>
      <p>Nordstrom Local</p>
  </div>

  <div class="card">
      <h3>Nordstrom Card & Rewards</h3>
      <p>The Nordy Club Rewards</p>
      <p>Pay My Bill</p>
      <p>Manage My Nordstrom Card</p>
  </div>

  <div class="card">
      <h3>Nordstrom, Inc.</h3>
      <p>Nordstrom Rack</p>
      <p>Nordstrom Canada</p>
      <p>Investor Relations</p>
      <p>Press Releases</p>
      <p>Nordstrom Media Network</p>
  </div>

  <div id="getApp">
      <i class="fa fa-tablet" aria-hidden="true"></i> Get Our apps

      <div id="icon">
          <span><i class="fa fa-instagram" aria-hidden="true"></i></span>
          <span><i class="fa fa-pinterest" aria-hidden="true"></i></span>
          <span><i class="fa fa-twitter" aria-hidden="true"></i></span>
          <span><i class="fa fa-facebook" aria-hidden="true"></i></span>
      </div>
  </div>

</div>
<div id="last">
  <p>privacy</p>
  <p>Do Not Sell My Personal Information</p>
  <p>Terms & Conditions</p>
  <p>Interest-Based Ads</p>
  <p> ©2022 Nordstrom, Inc.</p>
</div>`
}

export { navbar, footer };
