import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PageContainer from 'components/PageContainer';
import Header from 'components/Header';
import JustifyContainer from 'components/JustifyContainer';
import useMyAds from 'hooks/useAnnouncements';
import { ListOfCards } from 'pages/Announcements/styles';
import AnnouncementCard from 'components/AnnouncementCard';
import Footer from 'components/Footer';
import AdsRight from 'components/AdsRight';
import AdsLeft from 'components/AdsLeft';

import { BotaoOverlay, OrdenarOverlay, OutlineDownIcon, TitleArea } from './styles';
import { TitleSection } from './styles';
import { ContainerReturnToPage } from './styles';
import {ReturnToPageIcon} from './styles';
import useAuth from 'hooks/useAuth';
import useAnnouncements from 'hooks/useAnnouncements';
import { Announcement } from 'types';
import MenuOverlay from 'components/MenuOverlay';
import Ordenar from 'components/Ordenar';
import Pagination from 'components/Pagination';

const MyAds: React.FC = () => {
  const {auth} = useAuth();
  const {announcements, fetchMyAds} = useMyAds();

  useEffect(() => {
    fetchMyAds(auth.user);
  }, []);

  const componentsPerPage = 9; // Quantidade de componentes por página
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const {fetchAnnouncements} = useAnnouncements();
  const [search] = useState<string>('');
  const [searchResult] = useState<Announcement[]>();
  useEffect(() => {
    fetchAnnouncements();
  }, []);

  const [totalPages, setTotalPages] = useState(1); // Inicialmente, assume-se uma página

  useEffect(() => {
    if (announcements) {
      const totalComponents = search && searchResult ? searchResult.length : announcements.length;
      const pages = Math.ceil(totalComponents / componentsPerPage);
      setTotalPages(pages);
    }
  }, [announcements, search, searchResult]);

  const [isMenuOpen, setMenuOpen] = useState(false);
  
  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  }

  return (
    <PageContainer>
      <Header />
      <TitleArea>
          <TitleSection>
            <ContainerReturnToPage>
            <Link to="/Announcements">
              <ReturnToPageIcon />
            </Link>
          </ContainerReturnToPage>
            Seus anúncios
          </TitleSection>
      </TitleArea>
      <JustifyContainer thereIsHeader >
        <AdsLeft/>
        <ListOfCards>
        <OrdenarOverlay>
          <MenuOverlay isOpen={isMenuOpen} onClose={handleMenuToggle}>
            <Ordenar/>
          </MenuOverlay>

          <BotaoOverlay onClick={handleMenuToggle}>
            Ordenar por<OutlineDownIcon/>
          </BotaoOverlay>
        </OrdenarOverlay>
        {announcements && announcements.length > 0 ? (
          announcements.map((announcement: any, index) => (
            <AnnouncementCard
              key={announcement.id}
              id={announcement.id}
              title={announcement.title}
              description={announcement.description}
              image={announcement.images[0]?.originalname as string}
              localization={announcement.localization}
              owner={announcement.owner}
            />
          ))
        ) : (
          <p>Nenhum anúncio encontrado.</p>
        )}
        </ListOfCards>
        <AdsRight/>        
      </JustifyContainer>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
      <Footer/>
    </PageContainer>
  );
};

export default MyAds;