import { useState,useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import MenuProducts_77 from '../../components/menuProducts_77';
const base_url = `http://localhost:5000/api/node_menu_77`;
let url = `${base_url}`;

const MenuNodePage_77 =() => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    const changeFilter = (filter) => {
      if(filter === 'all'){
        url=`${base_url}`
      }else{
        url = `${base_url}&category=eq.${filter}`;
      }
      getMenuData_77(filter);
      // navigate(`/supaMenu_77/${filter}`);
      // window.location.href = `/supaMenu_77/${filter}`;
  }
    const getMenuData_77 = async (filter = 'all') => {
        const response = await fetch(url);
        const data = await response.json();
        console.log(`${filter} data`, data);
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
            <h2>Menu from SupaBase Menu Table - 210410477</h2>
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
              <MenuProducts_77 products={products}/>
        </section>
      </div>
    </section>
  );
}

export default MenuNodePage_77;
