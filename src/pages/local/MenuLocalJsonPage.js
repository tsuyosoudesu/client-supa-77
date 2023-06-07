import { useState,useEffect } from 'react';
import MenuProducts_77 from '../../components/menuProducts_77';
const base_url= `/api/menu.json`;

let url = `${base_url}`

const MenuStaticPage_77 =() => {
    const [products, setProducts] = useState([]);
    
    const changeFilter = (filter) => {
      if(filter === 'all'){
        url = `${base_url}`;
      }else{
        url = `${base_url}&category=eq.${filter}`;
      }
      getMenuData_77(filter);
    }


    const getMenuData_77 = async () => {
        const response = await fetch(url);
        const data = await response.json();
        console.log('menu data', data);
        setProducts(data);
    }
    
    useEffect(()=>{
        getMenuData_77();
    },[]);
  return (
    <section>
      <div className="btn-container"></div>
      <div className="section-center">
        <section className="menu">
          <div className="title">
            <h2>our menu - 210410477</h2>
            <div className="underline"></div>
          </div>
          <div className="btn-container">
          <button type="button" className="filter-btn" data-id="all"onClick={()=>{
                changeFilter('all');
            }}>
              all
            </button>
            <button type="button" className="filter-btn" data-id="breakfast" onClick={()=>{
                changeFilter('breakfast');
            }}>
              breakfast
            </button>
            <button type="button" className="filter-btn" data-id="lunch" onClick={() => {
                changeFilter('lunch');
            }}>
              lunch
              </button>
              <button type="button" className="filter-btn" data-id="dessert" onClick={()=>{
                changeFilter('dessert');
              }}>
              dessert</button>
              <button type="button" className="filter-btn" data-id="shakes" onClick={() => {
                changeFilter('shakes');
              }}>
              shakes
            </button>
          </div>
          <div className="section-center">
          <MenuProducts_77 products={products}/>
          </div>
        </section>
      </div>
    </section>
  );
}

export default MenuStaticPage_77;
