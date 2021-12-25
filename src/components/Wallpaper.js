import React from 'react';
import '../Styles/home.css';

class Wallpaper extends React.Component{
    handleChange = (event) => {
        const locationId = event.target.value;
        sessionStorage.setItem('location', locationId);
    }
    render() {
        const { locationData } = this.props;
        return (
            <div>
                <div>
                    <img src="./assets/homepageimg.png" height="375px" width="100%" alt='Image not found' />
                </div>
                <div className="logo">e!</div>
                <div className="pageHeader">Find the best restaurants, cafes, and bars</div>
                <div className="searchBox">
                    <div className="locSearch">
                        <select className='form-select'>
                            <option value='0'>Select</option>
                            {locationData.map((item) => {
                                return <option value= {item.location_id}> {item.name} </option>
                            })}
                            
                        </select>
                    </div>
                    <div className="restSearch">
                        <div className="input-group">
                            <span className="input-group-append">
                                <button className="btn btn-outline-secondary bg-white" type="submit">
                                    <i className="fa fa-search"></i>
                                </button>
                            </span>
                            <input className="form-control" type="text" placeholder="serach for restaurants" id="restaurant-serach" />
                        </div>
                    </div>
                </div>
                <div className="login-section">
                    <button type="button" className="btn btn-light btn-md login">Login</button>
                    <button type="button" className="btn btn-light btn-md create-account">Create an account</button>
                </div>
            </div>
        )
    }
}

export default Wallpaper;