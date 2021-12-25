import React from 'react';
import '../Styles/filter.css';


class RestaurantItem extends React.Component{

    render() {
        const { restaurantData } = this.props;
        return (
            <div className="items">
                <div className="items-top">
                  <div className="images"> <img src={restaurantData.thumb} className="images" alt=''/> </div>
                  <div className="item-desc">
                      <div className="restaurant-name">{restaurantData.name}</div>
                      <div className="address-line1">{ restaurantData.locality}</div>
                      <div className="address-line2">{ restaurantData.city_name}</div>
                  </div>
                </div>
                <div className="items-bottom">
                  <div className="items-bot-left">
                      <div>CUISINES:</div>
                      <div>COST FOR TWO:</div>
                  </div>
                  <div className="items-bot-right">
                    <div>{ restaurantData.Cuisine.map((cuisine)=>`${cuisine.name} | `)}</div>
                    <div>{ restaurantData.cost}</div>
                  </div>
                </div>
            </div>
        )
    }
}

export default RestaurantItem;