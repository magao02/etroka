import React from 'react';
import {useNavigate} from 'react-router-dom';
import {Localization} from './styles';
import {Paper} from './styles';
import {Grid} from './styles';
import {Picture} from './styles';
import {Title} from './styles';
import {Description} from './styles';
import {MdOutlinePlace} from 'react-icons/md';
import ButtonCard from 'components/ButtonCard';
import useUsers from 'hooks/useUsers';
import useAuth from 'hooks/useAuth';

interface CardProps {
  id: string
  title: string
  description: string
  image: string
  localization: string
  owner: any
}


const AnnouncementCard: React.FC<CardProps> = (props) => {
  const navigate = useNavigate();
  const {addFavorite} = useUsers();
  const img = 'https://etroka-api-f832735b4e64.herokuapp.com/images/'+props.image;
  const {auth} = useAuth();
  const favoritar = ()=>{
    addFavorite(auth.user, {announcement: props.id, owner: props.owner.id});
  };
  const negociar = ()=>{
    const phone = props.owner.phone.replace('(', '').replace(')', '')
        .replace(' ', '').replace('-', '');
    console.log(phone);
    window.location.replace(`https://api.whatsapp.com/send?phone=55${phone}&text=ass`);
  };
  return (
    <Paper>
      <Grid>
        <Picture src={img} onClick={() => {
          navigate(`/announcement/${props.id}`);
        }}>
        </Picture>
        <Localization>
          <MdOutlinePlace style={{fill: '#C6C6C6'}} fontSize={20}/>
          {props.localization}
        </Localization>
        <Title onClick={() => {
          navigate(`/announcement/${props.id}`);
        }}> {props.title} </Title>
        <Description>
          {props.description}
        </Description>
        <ButtonCard onClick={ () => negociar() } > Negociar </ButtonCard>
      </Grid>
    </Paper>
  );
};

export default AnnouncementCard;
