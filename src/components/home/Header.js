import Hero from '../globals/Hero';
import HomeImg from '../../images/homeBcg.jpeg';
import Banner from '../globals/Banner';

function Header() {
  return (
    <div>
      <Hero img={HomeImg}>
        <Banner
          greeting="welcome to"
          title="beachwalk resort"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quibusdam fugiat consectetur dignissimos non eius."
        />
      </Hero>
    </div>
  );
}

export default Header;
