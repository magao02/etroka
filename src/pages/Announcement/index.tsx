import React, {useEffect, useMemo, useState} from 'react';
import {useParams} from 'react-router-dom';
import PageContainer from 'components/PageContainer';
import Header from 'components/Header';
import JustifyContainer from 'components/JustifyContainer';
import ContentBox from 'components/ContentBox';
import Footer from 'components/Footer';

// import {AdvertType} from './styles';
import {DataSection} from './styles';
import {Paper} from './styles';
import {Section} from './styles';
import {SectionWrapper} from './styles';
import {ContainerSection} from './styles';
import {ImageSection} from './styles';
import {DataSectionTitle} from './styles';
import {DataSectionLocalization} from './styles';
import {TitleSection} from './styles';
import {MdFavoriteBorder} from './styles';
import {ContainerLeft} from './styles';
import {ContainerRight} from './styles';
import {ContainerButtons} from './styles';
import {ContainerNormalButton} from './styles';
import {ContainerGhostButton} from './styles';
import {SuccessMessage} from './styles';
import {LineVertical} from './styles';
import {LocalIcon} from './styles';

import ProductImages from 'components/ProductImages';
import Button from 'components/Button';
import ButtonGhost from 'components/ButtonGhost';
import useAnnouncements from 'hooks/useAnnouncements';
import useUsers from 'hooks/useUsers';
import useAuth from 'hooks/useAuth';

type key = 0 | 1 | 2 | 3 | 4;

const Announcement: React.FC = () => {
  const {id} = useParams();
  const {announcement, fetchAnnouncementById} = useAnnouncements();
  const {addFavorite} = useUsers();
  const {auth} = useAuth();
  const [favoritado, setFavoritado] = useState(false);
  const [image, setImage] = useState<string>('');
  useEffect(() => {
    if (id) {
      fetchAnnouncementById(id);
      imagean();
    }
    
  }, []);
   const imagean = ()=>{
    console.log(announcement);
    if(announcement?.images[0]){
      setImage('https://etroka-api-f832735b4e64.herokuapp.com/images/'+announcement?.images[0].originalname);
    }else{
      return 'https://etroka-api-f832735b4e64.herokuapp.com/images/semimagem.png';
    }
   }
  const favoritar = ()=>{
    addFavorite(auth.user, {announcement: announcement?.id, owner: announcement?.owner?.id});
    setFavoritado(true);
  };

  function negociar(): any {
    const phone = announcement?.owner?.phone.replace('(', '').replace(')', '')
        .replace(' ', '').replace('-', '');
    console.log(phone);
    window.location.replace(`https://api.whatsapp.com/send?phone=55${phone}&text=ass`);
    console.log(announcement)
  }

  return (
    <PageContainer>
      <Header />
      <JustifyContainer thereIsHeader >
        <ContentBox>
          {announcement && (
            <Paper>
              <ContainerLeft>
                <ImageSection>
                  <img src={'https://etroka-api-f832735b4e64.herokuapp.com/'+announcement?.images[0].originalname} alt="Imagem do produto"/>
                </ImageSection>
              </ContainerLeft>
              <LineVertical/>
              <ContainerRight>
                {/* <AdvertType>
                  { announcement.type === 'product'? 'Produto' : 'Serviço' }
                </AdvertType> */}
                <SectionWrapper>
                  <ContainerSection>
                    <Section>
                      <DataSectionTitle>
                        {announcement.title}
                      </DataSectionTitle>
                    </Section>
                  
                    <Section>
                      <DataSectionLocalization>
                        <LocalIcon/>{announcement.localization}
                      </DataSectionLocalization>
                    </Section>

                    <Section>
                      <TitleSection> Descrição </TitleSection>
                      <DataSection>
                        {announcement.description}
                      </DataSection>
                    </Section>

                    <Section>
                      <TitleSection> Tempo de uso </TitleSection>
                      <DataSection>
                        { announcement.usage_time ?
                          announcement.usage_time :
                          'Indefinido'
                        }
                      </DataSection>
                    </Section>

                    <Section>
                      <TitleSection> Categoria do produto </TitleSection>
                      <DataSection>
                        {announcement.category}
                      </DataSection>
                    </Section>
                  </ContainerSection>
                </SectionWrapper>
                <ContainerButtons style={{
                  
                }}>
                  <ContainerNormalButton>
                    <Button  onClick={ () => negociar() }>
                      Negociar
                    </Button>
                  </ContainerNormalButton>
                  <ContainerGhostButton>
                    <ButtonGhost
                      onClick={ () => favoritar() } 
                      Icon={<MdFavoriteBorder/>}
                    > Favoritar
                    </ButtonGhost>
                    {favoritado && <SuccessMessage>Favoritado com sucesso!</SuccessMessage>}
                  </ContainerGhostButton>
                </ContainerButtons>
              </ContainerRight>
            </Paper>
          )}
        </ContentBox>
      </JustifyContainer>
      <Footer></Footer>
    </PageContainer>
  );
};

export default Announcement;
