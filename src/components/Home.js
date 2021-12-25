import React from 'react';
import axios from 'axios';
import '../Styles/home.css';
import Wallpaper from './Wallpaper';
import QuickSearch from './QuickSearch';

class Home extends React.Component {
    constructor(){
        super();
        this.state = {
            location: [],
            mealTypes: []
        }
    }

    componentDidMount() {
       // sesssionStorage.clear();
        axios ({
            url:'http://localhost:5000/locations',
            method:'GET',
            header: { 'Content-Type': 'Application/json'}
        }).then(response => {
            this.setState({ location:response.data.locations})
        }).catch()
       
    axios ({
        url:'http://localhost:5000/mealtype',
        method:'GET',
        header: { 'Content-Type': 'Application/json'}
    }).then(response => {
        this.setState({ mealTypes: response.data.mealtype})
    }).catch()
   
}
    render(){
        const { location, mealTypes } = this.state;
         return(
            <div>
                <Wallpaper  locationData={location}/>
                <QuickSearch quickSearchData={mealTypes} />

            </div>
        )
    }
        
    
}

export default Home;