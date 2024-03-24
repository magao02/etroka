import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import PageContainer from 'components/PageContainer';
import Header from 'components/Header';
import ContentBox from 'components/JustifyContainer';
import JustifyContainer from 'components/JustifyContainer';
import useAnnouncements from 'hooks/useAnnouncements';
import useAuth from 'hooks/useAuth';
import {ListOfCards} from './styles';
import AnnouncementCard from 'components/AnnouncementCard';
import Footer from 'components/Footer';
import AdsRight from 'components/AdsRight';
import AdsLeft from 'components/AdsLeft';

import {TitleArea} from './styles';
import {TitleSection} from './styles';
import {ContainerReturnToPage} from './styles';
import {ReturnToPageIcon} from './styles';
import Pagination from 'components/Pagination';
import { Announcement } from 'types';
import { OutlineDownIcon } from './styles';
import { OrdenarOverlay } from './styles';
import MenuOverlay from 'components/MenuOverlay';
import Ordenar from 'components/Ordenar';
import { BotaoOverlay } from './styles';


const Favorites: React.FC = () => {
  const {auth} = useAuth();
  const {announcements, fetchFavorites} = useAnnouncements();
  
  useEffect(() => {
    fetchFavorites(auth.user);
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
            Favoritos
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
          {announcements.map((announcement: any, index) => (
            <AnnouncementCard
              key={announcement.announcement.id}
              id={announcement.announcement.id}
              title={announcement.announcement.title}
              description={announcement.announcement.description}
              image={announcement.announcement.images[0]?.originalname as string}
              localization={announcement.announcement.localization}
              owner={announcement.announcement.owner}
            />
          ))}
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

export default Favorites;
