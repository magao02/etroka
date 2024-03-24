import React, {useEffect, useState} from 'react';
import useAnnouncements from 'hooks/useAnnouncements';

import {rabinKarpSearch} from 'util/search';
import {Announcement} from 'types';

import AnnouncementCard from 'components/AnnouncementCard';
import PageContainer from 'components/PageContainer';
import Header from 'components/Header';
import JustifyContainer from 'components/JustifyContainer';
import SearchBar from 'components/SearchBar';
import Pagination from 'components/Pagination';
import Ordenar from 'components/Ordenar'; 
import { OutlineDownIcon } from './styles';

import {BotaoOverlay, ListOfCards, OrdenarOverlay} from './styles';
import HeaderRoxo from 'components/HeaderRoxo';
import data from './data.json';
import {Title} from './styles';
import Footer from 'components/Footer';
import MenuOverlay from 'components/MenuOverlay';
import AdsRight from 'components/AdsRight';
import AdsLeft from 'components/AdsLeft';

const Announcements: React.FC = () => {

  const componentsPerPage = 9; // Quantidade de componentes por página
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const {announcements, fetchAnnouncements} = useAnnouncements();
  const [search, setSearch] = useState<string>('');
  const [searchResult, setSearchResult] = useState<Announcement[]>();
  useEffect(() => {
    fetchAnnouncements();
  }, []);


  const handleWithSearch = (filterBy: string) => {
    if (announcements) {
      const filterLowerCase = filterBy.toLowerCase();
      const result = announcements.filter((announcement) =>
        rabinKarpSearch(announcement.title.toLowerCase(), filterLowerCase),
      );
      setSearchResult(result);
    }
  };

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
      <HeaderRoxo>
        <Title> {data.title} </Title>
        
        <SearchBar
          search={search}
          setSearch={setSearch}
          onSearchChange={(filterBy: string) => handleWithSearch(filterBy)}
          />
      </HeaderRoxo>
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
          {search && searchResult
            ? searchResult
                .slice((currentPage - 1) * componentsPerPage, currentPage * componentsPerPage)
                .map((announcement: Announcement, index) => (
                  <AnnouncementCard
                    key={announcement.id}
                    id={announcement.id}
                    title={announcement.title}
                    description={announcement.description}
                    image={announcement.images[0] as string}
                    localization={announcement.localization}
                    owner={announcement.owner}
                  />
                ))
            : announcements
                ?.slice((currentPage - 1) * componentsPerPage, currentPage * componentsPerPage)
                .map((announcement: Announcement, index) => (
                  <AnnouncementCard
                    key={announcement.id}
                    id={announcement.id}
                    title={announcement.title}
                    description={announcement.description}
                    image={announcement.images[0]?.originalname as string}
                    localization={announcement.localization}
                    owner={announcement.owner}
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

export default Announcements;
