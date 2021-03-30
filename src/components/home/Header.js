import Hero from '../globals/Hero';
import HomeImg from '../../images/homeBcg.jpeg';
import Banner from '../globals/Banner';
import { PrimaryBtn } from '../globals/Buttons';

function Header() {
  return (
    <div>
      <Hero img={HomeImg}>
        <Banner
          greeting="welcome to"
          title="beachwalk resort"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quibusdam fugiat consectetur dignissimos non eius."
        >
          {<PrimaryBtn>view details</PrimaryBtn>}
        </Banner>
      </Hero>
    </div>
  );
}

export default Header;
