import { useState, useEffect } from 'react';
import CookieBanner from './components/CookieBanner';
import Header from './components/Header';
import ScrollingShows from './components/ScrollingShows';
import HighlightCarousel from './components/HighlightCarousel';
import WelcomeSection from './components/WelcomeSection';
import FestivalNumbers from './components/FestivalNumbers';
import TicketsSection from './components/TicketsSection';
import MusicSection from './components/MusicSection';
import ProgramSection from './components/ProgramSection';
import HighlightsSection from './components/HighlightsSection';
import type { MediaItem } from './components/MediaGallery';
import MediaGallery from './components/MediaGallery';
import BoatSection from './components/BoatSection';
import LodgingSection from './components/LodgingSection';
import BecomeMemberSection from './components/BecomeMemberSection';
import Footer from './components/Footer';
import MapSection from './components/MapSection';

interface CartItem {
  name: string;
  price: number;
}

// Imagem panorâmica da Ilha do Mel
const PanoramicImage = () => (
  <div className="w-full overflow-hidden">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/1/15/Panoramic_view_from_Ilha_do_Mel%2C_Paran%C3%A1%2C_Brazil.JPG"
      alt="Vista panorâmica da Ilha do Mel, Paraná"
      className="w-full h-auto object-cover"
      // Crédito da imagem: Ednei Fialho Lopes, sob licença CC BY-SA 3.0
    />
  </div>
);

function App() {
  // Estados para carrinho e abas (ingressos e pousadas) e filtro de programação
  const [cart, setCart] = useState<CartItem[]>([]);
  const [activeTicketTab, setActiveTicketTab] = useState('encantadas');
  const [activePousadaTab, setActivePousadaTab] = useState('economicas'); // Adicionando estado para abas de pousadas
  const [filterProgramacao, setFilterProgramacao] = useState('todos'); // Adicionando estado para filtro de programação

  // Função para adicionar ao carrinho
  const addToCart = (item: CartItem) => {
    setCart([...cart, item]);
    alert(`Adicionado ao carrinho: ${item.name}`);
  };

  // Função para simular envio de e-mail para pousada (migrada do HTML original)
  const sendPousadaEmail = (pousada: any, formData: any) => { // Adicionando função de e-mail, usar 'any' por enquanto
    const subject = `Pedido de Reserva - ${pousada.name}`;
    const body = `Olá, ${pousada.name},\n\nGostaria de fazer uma reserva com os seguintes detalhes:\n- Nome: ${formData.name}\n- E-mail: ${formData.email}\n- Data de Check-in: ${formData.checkIn}\n- Data de Check-out: ${formData.checkOut}\n- Hóspedes: ${formData.guests}\n- Tipo de Quarto: ${formData.roomType}\n\nPor favor, confirme a disponibilidade e envie os próximos passos.\nObrigado!`;
    window.location.href = `mailto:${pousada.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  // Dados para a seção de programações
  const programacao = [
    { id: 1, title: "Wes Ventura Trio no Palco Swamp", date: "2 de Agosto, 20h", type: "show", desc: "Show gratuito em Encantadas", img: "https://source.unsplash.com/300x200/?jazz" },
    { id: 2, title: "Noise Jazz Merlo no Grajagan", date: "3 de Agosto, 22h", type: "balada", desc: "Balada exclusiva no Grajagan Surf Resort", img: "https://source.unsplash.com/300x200/?music" },
    { id: 3, title: "Rafaela Mood no Cavalo Marinho", date: "9 de Agosto, 21h", type: "show", desc: "Show intimista com ingressos limitados", img: "https://source.unsplash.com/300x200/?concert" },
    { id: 4, title: "Jazz Sunset em Nova Brasília", date: "10 de Agosto, 18h", type: "show", desc: "Show ao pôr do sol, aberto ao público", img: "https://source.unsplash.com/300x200/?sunset" },
    { id: 5, title: "Jam Session Encantadas", date: "16 de Agosto, 19h", type: "show", desc: "Improviso com artistas locais", img: "https://source.unsplash.com/300x200/?musicians" },
    { id: 6, title: "Yoga & Jazz", date: "17 de Agosto, 8h", type: "atividade", desc: "Sessão de yoga com música ao vivo", img: "https://source.unsplash.com/300x200/?yoga" },
    { id: 7, title: "Mutirão de Limpeza", date: "23 de Agosto, 9h", type: "atividade", desc: "Atividade comunitária na praia", img: "https://source.unsplash.com/300x200/?beach" },
    { id: 8, title: "Banda Soul Groove", date: "23 de Agosto, 20h", type: "show", desc: "Show gratuito no Palco Swamp", img: "https://source.unsplash.com/300x200/?band" },
    { id: 9, title: "Jazz Fusion Night", date: "24 de Agosto, 22h", type: "balada", desc: "Balada no Cavalo Marinho", img: "https://source.unsplash.com/300x200/?night" },
    { id: 10, title: "Trio Acústico", date: "29 de Agosto, 19h", type: "show", desc: "Show acústico em Encantadas", img: "https://source.unsplash.com/300x200/?acoustic" },
    { id: 11, title: "Big Band Ilha do Mel", date: "30 de Agosto, 20h", type: "show", desc: "Show de encerramento no Palco Swamp", img: "https://source.unsplash.com/300x200/?orchestra" },
    { id: 12, title: "After Party Grajagan", date: "30 de Agosto, 23h", type: "balada", desc: "Festa de encerramento com DJ", img: "https://source.unsplash.com/300x200/?party" },
  ];

  // Dados para o carrossel
  const carouselItems = [
    { title: "Jazz ao Pôr do Sol", desc: "Curta shows incríveis com vista para o mar!", img: "https://source.unsplash.com/1600x600/?sunset,jazz" },
    { title: "Yoga & Jazz", desc: "Relaxe com sessões de yoga e música ao vivo.", img: "https://source.unsplash.com/1600x600/?yoga,beach" },
    { title: "Mutirão de Limpeza", desc: "Participe da preservação da Ilha do Mel!", img: "https://source.unsplash.com/1600x600/?beach,cleanup" },
  ];

  // Dados para o Festival em Números
  const festivalNumbers = {
    spectators: "10.000",
    participants: "150",
    performances: "20",
  };

  // Dados para a seção de destaques (migrados do HTML original)
  const destaques = [
    { id: 1, type: "video", src: "https://www.youtube.com/watch?v=aEmDA9T6pGk", alt: "Vídeo de edição anterior do festival" },
    { id: 2, type: "image", src: "https://source.unsplash.com/300x400/?jazz,festival", alt: "Show de jazz na praia" },
    { id: 3, type: "video", src: "https://www.youtube.com/watch?v=lvKUn8AFpTk", alt: "Depoimento de artistas" },
  ];

  // Dados para a seção de shorts e fotos (migrados do HTML original)
  const mediaGaleria: MediaItem[] = [
    { id: 1, type: "image", src: "https://source.unsplash.com/300x400/?beach,ilha", alt: "Praia da Ilha do Mel" },
    { id: 2, type: "video", src: "https://www.youtube.com/watch?v=aEmDA9T6pGk", alt: "Vídeo de edição anterior do festival" },
    { id: 3, type: "video", src: "https://www.youtube.com/watch?v=lvKUn8AFpTk", alt: "Depoimento de artistas" },
    { id: 4, type: "video", src: "https://www.youtube.com/watch?v=p785wf19Oek", alt: "Vídeo de festival" },
    { id: 5, type: "video", src: "https://www.youtube.com/watch?v=Fmc4ydwptnY", alt: "Vídeo do Festival" },
    { id: 6, type: "video", src: "https://www.youtube.com/watch?v=io1J3wY0bdE", alt: "Vídeo do Festival" },
    { id: 7, type: "video", src: "https://www.youtube.com/watch?v=NVuAD_Qk-Tk", alt: "Vídeo do Festival" },
    { id: 8, type: "video", src: "https://www.youtube.com/watch?v=c7S-89H7yUs", alt: "Vídeo do Festival" },
    { id: 9, type: "video", src: "https://www.youtube.com/shorts/M27fRvPFIZ0", alt: "Vídeo curto do Festival" },
  ];

  // Dados para pousadas
  const pousadas = [
    { id: 1, name: "Pousada Marimar", price: 361, desc: "A 100m da Praia de Encantadas, com café da manhã incluso.", email: "contato@marimar.com.br", website: "http://www.pousadamarimar.com.br", category: "economicas" },
    { id: 2, name: "Pousada Estrela do Mar", price: 300, desc: "Beira-mar em Encantadas, ideal para famílias.", email: "estrela@ilhadomel.com", website: "https://www.booking.com/hotel/br/pousada-estrela-do-mar.pt-br.html", category: "economicas" },
    { id: 3, name: "Pousada Canto da Galheta", price: 250, desc: "A 5m da praia, com ambiente rústico.", email: "contato@cantodagalheta.com.br", website: "http://www.pousadacantodagalheta.com.br", category: "economicas" },
    { id: 4, name: "Astral da Ilha Pousada", price: 1260, desc: "Suítes sofisticadas com vista para o mar.", email: "contato@astraldailha.com.br", website: "http://www.astraldailha.com.br", category: "luxo" },
    { id: 5, name: "Grajagan Surf Resort", price: 900, desc: "Charme e conforto na Praia Grande.", email: "grajagan@surfresort.com", website: "http://www.grajagan.com.br", category: "luxo" },
    { id: 6, name: "Pousada Treze Luas", price: 800, desc: "Cercada pela Mata Atlântica, com restaurante.", email: "contato@trezeluas.com.br", website: "http://www.pousadatrezeluas.com.br", category: "luxo" },
    { id: 7, name: "Malie Chalés", price: 320, desc: "Chalés charmosos a 5min da Gruta das Encantadas.", email: "contato@maliechales.com.br", website: "https://www.booking.com/hotel/br/malie-chales.pt-br.html", category: "familiares" },
    { id: 8, name: "Pousada Villa Verde", price: 217, desc: "Quartos com vista para o mar, ideal para famílias.", email: "contato@villaverde.com.br", website: "http://www.villaverde.com.br", category: "familiares" },
    { id: 9, name: "Caraguatá Pousada", price: 380, desc: "Ambiente acolhedor com café da manhã variado.", email: "contato@caraguata.com.br", website: "https://www.booking.com/hotel/br/caraguata.com.br", category: "familiares" },
  ];

  // Estado para o carrossel
  const [carouselIndex, setCarouselIndex] = useState(0);

  // Efeito para auto-rolagem do carrossel
  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % carouselItems.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [carouselItems.length]);

  // Filtrar programação
  const filteredProgramacao = filterProgramacao === 'todos'
    ? programacao
    : programacao.filter(evento => evento.type === filterProgramacao);

  // Filtrar pousadas por categoria
  const filteredPousadas = pousadas.filter(pousada => pousada.category === activePousadaTab);

  return (
    <div className="min-h-screen max-w-screen-md mx-auto px-4">
      <CookieBanner />
      <Header />

      {/* Imagem Panorâmica da Ilha do Mel */}
      <PanoramicImage />

      {/* Barra Rolante de Shows */}
      <ScrollingShows programacao={programacao} />

      {/* Carrossel de Destaque */}
      <HighlightCarousel
        carouselItems={carouselItems}
        carouselIndex={carouselIndex}
        setCarouselIndex={setCarouselIndex}
      />

      {/* Seção de Boas-vindas */}
      <WelcomeSection />

      {/* Seção O Festival em Números */}
      <FestivalNumbers {...festivalNumbers} />

      {/* Seção de Ingressos com Abas */}
      <TicketsSection
        activeTicketTab={activeTicketTab}
        setActiveTicketTab={setActiveTicketTab}
        addToCart={addToCart}
      />

      {/* Seção de Músicas */}
      <MusicSection />

      {/* Seção de Programação com Filtros */}
      <ProgramSection
        programacao={programacao}
        filterProgramacao={filterProgramacao}
        setFilterProgramacao={setFilterProgramacao}
        filteredProgramacao={filteredProgramacao}
      />

      {/* Seção de Destaques */}
      <HighlightsSection destaques={destaques} />

      {/* Galeria de Shorts e Fotos */}
      <MediaGallery mediaItems={mediaGaleria} />

      {/* Seção de Mapa Interativo */}
      <MapSection />

      {/* Seção de Passagens de Barco */}
      <BoatSection addToCart={addToCart} />

      {/* Seção de Hospedagem com Abas */}
      <LodgingSection
        activePousadaTab={activePousadaTab}
        setActivePousadaTab={setActivePousadaTab}
        filteredPousadas={filteredPousadas}
        sendPousadaEmail={sendPousadaEmail}
      />

      {/* Seção Torne-se Sócio */}
      <BecomeMemberSection />

      {/* Rodapé */}
      <Footer />

      {/* As próximas seções virão aqui */}

      {/* Texto de teste */}

    </div>
  );
}

export { App };