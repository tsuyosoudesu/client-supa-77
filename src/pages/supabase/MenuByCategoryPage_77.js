import { useState,useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const MenuDataByCategory_77 = () => {
    const [products, setProducts] = useState([]);
    const params = useParams();
    console.log('params cargory', params.category);

const navigate = useNavigate();

const changeFilter = (filter = '') => {
    // navigate(`/supaMenu_77/${filter}`);
    window.location.href = `/supaMenu_77/${filter}`;
}

const getMenuDataByCategory_77 = async () => {
    
    
    
        const response = await fetch(`https://jlieraqxuwrlyetersae.supabase.co/rest/v1/menu_xx?select=*&category=eq.${params.category}`, {
            method:'GET',
            headers:{
                apikey:`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpsaWVyYXF4dXdybHlldGVyc2FlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzY0NTk0NDEsImV4cCI6MTk5MjAzNTQ0MX0.8DGdA5zsUpEqDcmDhCpNRQ_1iTOAplz2iX1Wsw3YKUE`,
                Authorization:`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpsaWVyYXF4dXdybHlldGVyc2FlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzY0NTk0NDEsImV4cCI6MTk5MjAzNTQ0MX0.8DGdA5zsUpEqDcmDhCpNRQ_1iTOAplz2iX1Wsw3YKUE`
            }
        });
        const data = await response.json();
        console.log('menu data', data);
        setProducts(data);
    }
    
    useEffect(()=>{
        getMenuDataByCategory_77();
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
                changeFilter();
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
            {products.map((product)=> {
              const {id,img, price, title, descrip} = product;
              return (
                <article className="menu-item" key={id}>
                <img src={img} alt="eggs" className="photo" />
                <div className="item-info">
                  <header>
                    <h4>{title}</h4>
                    <h4 className="price">{price}</h4>
                  </header>
                  <p className="item-text">
                    {descrip}
                  </p>
                </div>
              </article>
              )
            })}
          </div>
        </section>
      </div>
    </section>
  );
}


export default MenuDataByCategory_77;
