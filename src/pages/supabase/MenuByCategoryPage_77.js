import { useState,useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import MenuProducts_77 from '../../components/menuProducts_77';

const base_url = `https://jlieraqxuwrlyetersae.supabase.co/rest/v1/menu_xx?select=*`;
let url = `${base_url}`;
const options = {
  method:'GET',
  headers:{
      apikey:`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpsaWVyYXF4dXdybHlldGVyc2FlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzY0NTk0NDEsImV4cCI6MTk5MjAzNTQ0MX0.8DGdA5zsUpEqDcmDhCpNRQ_1iTOAplz2iX1Wsw3YKUE`,
      Authorization:`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpsaWVyYXF4dXdybHlldGVyc2FlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzY0NTk0NDEsImV4cCI6MTk5MjAzNTQ0MX0.8DGdA5zsUpEqDcmDhCpNRQ_1iTOAplz2iX1Wsw3YKUE`
  }
}

const MenuDataByCategory_77 = () => {
    const [products, setProducts] = useState([]);
    const[category, setCategory] = useState('all');
    const params = useParams();
    console.log('params cargory', params.category);

const navigate = useNavigate();

const changeFilter = (category) => {
    console.log('category', category);
    setCategory(category);
    // navigate(`/supaMenu_77/${filter}`);
    // window.location.href = `/supaMenu_77/${filter}`;
}

const getMenuDataByCategory_77 = async () => {
        if(params.category === 'all'){
          url=`${base_url}`
        }else{
          url = `${base_url}&category=eq.${params.category}`;
        }
        const response = await fetch(url, options);
        const data = await response.json();
        console.log('menu data', data);
        setProducts(data);
    }
    
    useEffect(()=>{
        getMenuDataByCategory_77();
    },[category]);
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
                return navigate('/supaMenu_77/all');
            }}>
              all
            </button>
            <button type="button" className="filter-btn" data-id="breakfast" onClick={()=>{
                changeFilter('breakfast');
                return navigate('/supaMenu_77/breakfast');
            }}>
              breakfast
            </button>
            <button type="button" className="filter-btn" data-id="lunch" onClick={() => {
                changeFilter('lunch');
                return navigate('/supaMenu_77/lunch');
            }}>
              lunch
              </button>
              <button type="button" className="filter-btn" data-id="dessert" onClick={()=>{
                changeFilter('dessert');
                return navigate('/supaMenu_77/dessert');
              }}>
              dessert</button>
              <button type="button" className="filter-btn" data-id="shakes" onClick={() => {
                changeFilter('shakes');
                return navigate('/supaMenu_77/shakes');
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


export default MenuDataByCategory_77;
