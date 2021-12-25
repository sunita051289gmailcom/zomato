import React from 'react';
import '../Styles/home.css'
import { withRouter} from 'react-router-dom';

class QuickSearchItem extends React.Component {
    handleNavigate = (mealtype_id) => {
        const locationId = sessionStorage.getItem('location');
        if (locationId) {
        
        this.props.history.push(`/filter?mealtype=${mealtype_id}&location=${locationId}`);
    }
    else {
        this.props.history.push(`/filter?mealtype=${mealtype_id}`);
    }
}

    render() {
        const { quickSearchData } = this.props;
        return (
            <div className="col-lg-4 col-md-6 col-sm-12 block" onClick={()=> this.handleNavigate(quickSearchData.mealtype_id)}>
                <img src={`./${quickSearchData.image}`} className="image" alt='' />
                <div className="content">
                    <div className="content-title">{quickSearchData.name}</div>
                    <div className="content-content">{ quickSearchData.content}</div>
                </div>
            </div>
        )
    }
}

export default withRouter(QuickSearchItem);