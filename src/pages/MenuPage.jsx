import ChapterNav from '../components/menu/ChapterNav';
import MenuHero from '../components/menu/MenuHero';
import ChefIntro from '../components/menu/ChefIntro';
import NigiriSpread from '../components/menu/NigiriSpread';
import ChefNote from '../components/menu/ChefNote';
import GunkanSpread from '../components/menu/GunkanSpread';
import SeasonalHighlight from '../components/menu/SeasonalHighlight';
import SashimiSpread from '../components/menu/SashimiSpread';
import DessertsSpread from '../components/menu/DessertsSpread';
import TeaSakeSpread from '../components/menu/TeaSakeSpread';
import TonightsOmakase from '../components/menu/TonightsOmakase';
import { chefQuotes } from '../components/menu/menuData';

export default function MenuPage() {
  return (
    <>
      <ChapterNav />
      <MenuHero />
      <ChefIntro />
      <NigiriSpread />
      <ChefNote quote={chefQuotes[0]} />
      <GunkanSpread />
      <SeasonalHighlight />
      <SashimiSpread />
      <ChefNote quote={chefQuotes[1]} eyebrow="二の言葉" />
      <DessertsSpread />
      <TeaSakeSpread />
      <TonightsOmakase />
    </>
  );
}
