import React from 'react'
import Categories from './Categories';
import ProductList from '../pages/ProductList';

function Dashboard() {
    return (
        <div>
           <Categories />
           <ProductList />
        </div>
    )
}

export default Dashboard