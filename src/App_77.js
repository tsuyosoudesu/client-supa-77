import { BrowserRouter, Routes,Route  } from "react-router-dom";
import MenuStaticPage_77 from "./pages/local/MenuStaticPage_77";
import SupaMenuPage_77 from"./pages/supabase/MenuPage_77"
import HomePage_77 from'./pages/HomePage_77'
import MenuByCategoryPage_77 from'./pages/supabase/MenuByCategoryPage_77'
import MenuNodePage_77 from "./pages/node/MenuNodePage_77";
import MenuLocalJsonPage_77 from"./pages/local/MenuLocalJsonPage";
const App_77 =() => {
    return(
      <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<HomePage_77/>}/>
            <Route path="/static_77" element={<MenuStaticPage_77/>}/>
            <Route path="/supaMenu_77" element={<SupaMenuPage_77/>}/>
            <Route path="/supaMenu_77/:category" element={<MenuByCategoryPage_77/>}/>
            <Route path="/node_menu_77" element={<MenuNodePage_77/>}/>
            <Route path="/local_menu_77" element={<MenuLocalJsonPage_77/>}/>
        </Routes>
      </BrowserRouter>
    );
}

export default App_77;
