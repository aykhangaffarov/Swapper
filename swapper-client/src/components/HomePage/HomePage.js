import React from 'react';
import FilterBar from '../../containers/FilterBar/FilterBar';
import ItemList from '../../containers/ItemList/ItemList';

const Home = () => {
    return (
        <React.Fragment>
            <div className="container" style={{paddingTop: '6rem'}} >
                <div className="row">
                    <FilterBar/>
                    <ItemList/>
                </div>
            </div>
        </React.Fragment>
    );
};


export default Home;