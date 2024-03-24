import React, {useState, useEffect, useRef} from 'react';

import {Moldura} from './styles';
import {Imagem} from './styles';
import {Titulo} from './styles';
import {Descricao} from './styles';

import peopleTalking from 'assets/img/peopleTalking.gif';
import peopleAnalysing from 'assets/img/peopleAnalysing.gif';
import womanAtNotebook from 'assets/img/womanAtNotebook.gif';

export default function Carousel() {
  const [page, setPage] = useState(0);

  const data = [
    {
      'image': peopleTalking,
      'title': 'Conecte-se com oportunidades ilimitadas e pessoas inspiradoras',
      'text': 'Lorem ipsum dolor sit amet Nam voluptatem dolorem.',
    },
    {
      'image': peopleAnalysing,
      'title': 'Desperte a magia da troca, onde cada interação traz novas perspectivas.',
      'text': 'Lorem ipsum dolor sit amet Nam voluptatem dolorem.',
    },
    {
      'image': womanAtNotebook,
      'title': 'Cultive seu crescimento contínuo, colhendo frutos de realizações extraordinárias.',
      'text': 'Lorem ipsum dolor sit amet Nam voluptatem dolorem.',
    },
  ];

  const intervalRef = useRef<number | undefined>();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setPage((page) => (page + 1) % data.length);
    }, 10000) as unknown as number;

    return () => {
      clearInterval(intervalRef.current ?? undefined);
    };
  }, [data.length]);

  return (
    <Moldura>
      <Imagem src={data[page].image} />
      <Titulo>{data[page].title}</Titulo>
      <Descricao>
        
          <br/>
        {page + 1} / 3
      </Descricao>
    </Moldura>
  );
};
