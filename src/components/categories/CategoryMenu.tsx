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
            <li className="category-item">{tCommon("all")}</li>
            <li className="category-item">{tCommon("new")}</li>
            <li className="category-item">{tCommon("bestsellers")}</li>
        </ul>
        <ul>
            <li className="category-item">{tCommon("exclusives")}</li>
            <li className="category-item">{tCommon("awardWinners")}</li>
            <li className="category-item">{tCommon("giftsAndBundles")}</li>
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
