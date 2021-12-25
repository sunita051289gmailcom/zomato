import React from 'react';
import '../Styles/filter.css'


class Filter extends React.Component {
  handleNavigate = () => {
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <div className="container-fluid header p-2"> 
          <nav className="navbar">
            <div className="container">
              <a className="navbar-brand logo-filter" href="/">e!</a>
              <ul className="nav">
                <li><a className="nav-link login-filter" href="#">Login</a></li>
                <li><a className="nav-link create-account-filter" href="#">Create an account</a></li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="container">
          <div className="row page-header">
            <p className="col">Breakfast Places in Mumbai</p>
          </div>
        </div>
        
        <div className="container">
          <div className="row m-2">
            <div className="filter-section col-lg-3 col-md-4 col-sm-12">
              <div className="title mb-3">
                <span>Filters</span>
                <a href="#filterCollapse" className="format visibleFilter" style={{ "float": "right" }} data-bs-toggle="collapse" aria-expanded="true" aria-controls="filterCollapse">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" classNameName="bi bi-chevron-expand" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M3.646 9.146a.5.5 0 0 1 .708 0L8 12.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708zm0-2.292a.5.5 0 0 0 .708 0L8 3.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708z"/>
                    </svg>
                </a>
              </div>
              <div id="filterCollapse" className="collapse show">
                <div className="subtitle mb-2">Select Location</div>
                <select className="form-select mb-3" aria-label="selectLocation">
                  <option selected>Select location</option>
                  <option value="Chennai">Chennai</option>
                  <option value="Bangalore">Bangalore</option>
                  <option value="Hyderabad">Hyderabad</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Mysore">Mysore</option>
                </select>
                        
                <div className="subtitle mb-2" name="cuisine">Cuisine</div>
                <div className="form-check options">
                  <input className="form-check-input" type="checkbox" value="North Indian" id="northIndian" />
                  <label className="form-check-label" for="northIndian">North Indian</label>
                </div>
                <div className="form-check options">
                  <input className="form-check-input" type="checkbox" value="South Indian" id="southIndian" />
                  <label className="form-check-label" for="southIndian">South Indian</label>
                </div>
                <div className="form-check options">
                  <input className="form-check-input" type="checkbox" value="Chinese" id="chinese" />
                  <label className="form-check-label" for="chinese">Chinese</label>
                </div>
                <div className="form-check options">
                  <input className="form-check-input" type="checkbox" value="Fast Food" id="fastFood" />
                  <label className="form-check-label" for="fastFood">Fast Food</label>
                </div>
                <div className="form-check options mb-3">
                  <input className="form-check-input" type="checkbox" value="Street Food" id="streetFood" />
                  <label className="form-check-label" for="streetFood">Street Food</label>
                </div>
                        
                <div className="subtitle mb-2" name="costForTwo">Cost For Two</div>
                <div className="form-check options">
                  <input className="form-check-input" type="radio" name="costForTwo" id="lessThan500" />
                  <label className="form-check-label" for="lessThan500">Less than ₹500</label>
                </div>
                <div className="form-check options">
                  <input className="form-check-input" type="radio" name="costForTwo" id="500to1000" />
                  <label className="form-check-label" for="500to1000">₹500 to ₹1000</label>
                </div>
                <div className="form-check options">
                  <input className="form-check-input" type="radio" name="costForTwo" id="1000to1500" />
                  <label className="form-check-label" for="1000to1500">₹1000 to ₹1500</label>
                </div>
                <div className="form-check options">
                  <input className="form-check-input" type="radio" name="costForTwo" id="1500to2000" />
                  <label className="form-check-label" for="1500to2000">₹1500 to ₹2000</label>
                </div>
                <div className="form-check options mb-3">
                  <input className="form-check-input" type="radio" name="costForTwo" id="moreThan2000" />
                  <label className="form-check-label" for="moreThan2000">₹2000+</label>
                </div>

                <div className="title mb-2" name="sort">Sort</div>
                <div className="form-check options">
                  <input className="form-check-input" type="radio" name="sort" id="lowToHigh" />
                  <label className="form-check-label" for="lowToHigh">Price low to high</label>
                </div> 
                <div className="form-check options">
                  <input className="form-check-input" type="radio" name="sort" id="highToLow" />
                  <label className="form-check-label" for="highToLow">Price high to low</label>
                </div>
              </div> 
            </div>

            <div className="itemsBlock col-lg-8 offset-lg-1 col-md-8 col-sm-12">
              <div className="items">
                <div className="items-top">
                  <div className="images"> <img src="./assets/restaurantimg.png" className="images" /> </div>
                  <div className="item-desc">
                    <div className="restaurant-name">The Big Chill Cakery</div>
                    <div className="address-line1">FORT</div>
                    <div className="address-line2">Shop 1, Plot D, Samruddhi Complex, Chincholi...</div>
                  </div>
                </div>
                <div className="items-bottom">
                  <div className="items-bot-left">
                    <div>CUISINES:</div>
                    <div>COST FOR TWO:</div>
                  </div>
                  <div className="items-bot-right">
                    <div>Bakery</div>
                    <div>₹700</div>
                  </div>
                </div>
              </div>

              <div className="items">
                <div className="items-top">
                  <div className="images"> <img src="./assets/restaurantimg.png" className="images" /> </div>
                  <div className="item-desc">
                    <div className="restaurant-name">The Bake Shop</div>
                    <div className="address-line1">FORT</div>
                    <div className="address-line2">Shop 1, Plot D, Samruddhi Complex, Chincholi...</div>
                  </div>
                </div>
                <div className="items-bottom">
                  <div className="items-bot-left">
                    <div>CUISINES:</div>
                    <div>COST FOR TWO:</div>
                  </div>
                  <div className="items-bot-right">
                    <div>Bakery</div>
                    <div>₹700</div>
                  </div>
                </div>
              </div>
            </div>
                
            <nav className="pagination-custom">
              <ul className="pagination justify-content-center">
                <li className="page-item page-num">
                  <a className="page-link page-col" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                <li className="page-item page-num"><a className="page-link page-col" href="#">1</a></li>
                <li className="page-item page-num"><a className="page-link page-col" href="#">2</a></li>
                <li className="page-item page-num"><a className="page-link page-col" href="#">3</a></li>
                <li className="page-item page-num"><a className="page-link page-col" href="#">4</a></li>
                <li className="page-item page-num"><a className="page-link page-col" href="#">5</a></li>
                <li className="page-item page-num">
                  <a className="page-link page-col" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    )
  }
}

export default Filter;