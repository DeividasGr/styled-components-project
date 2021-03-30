import { useState } from 'react';
import Room from './Room';
import styled from 'styled-components';
import { setColor, setRem, media } from '../../styles';
import rooms from './rooms-data';
import Section from '../globals/Section';
import Title from '../globals/Title';

function Rooms() {
  const [roomsCollection, setRoomsCollection] = useState(rooms);

  return (
    <Section color={setColor.lightGrey}>
      <Title title="our rooms" center />
      <RoomsCenter>
        {roomsCollection.map((room) => {
          return <Room key={room.id} room={room} />;
        })}
      </RoomsCenter>
    </Section>
  );
}

const RoomsCenter = styled.div`
  width: 90vw;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  grid-column-gap: ${setRem(45)};
  ${media.large`
      width: 100vw;
      max-width: 1170px;
  `};
`;

export default Rooms;
