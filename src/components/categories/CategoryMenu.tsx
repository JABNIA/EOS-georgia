import '../styles/category-menu.scss';
import Body from './components/Body';
import Shave from './components/Shave';
import Lip from './components/Lip';
import Fragrance from './components/Fragrance';
import About from './components/About';
import { useTranslation } from 'react-i18next';

function CategoryMenu({menu} : {menu: string}) {
  const { t: tCommon } = useTranslation("common")

  return (
  <div className='category-menu-wrapper'
  >
    <div>
        <ul>
            <li className="category-item">ყველა პროდუქტი</li>
            <li className="category-item">სიახლე</li>
            <li className="category-item">ბესტსელერები</li>
        </ul>
        <ul>
            <li className="category-item">ექსკლუზივი</li>
            <li className="category-item">დაჯილდოვებულები</li>
            <li className="category-item">საჩუქრები და პაკეტები</li>
        </ul>
    </div>
    {   menu === "body" && <Body /> }
    {   menu === "shave" && <Shave /> }
    {   menu === "lip" && <Lip /> }
    {   menu === "fragrance" && <Fragrance /> }
    {   menu === "about" && <About /> }
    </div>
  
    
  )
}

export default CategoryMenu
