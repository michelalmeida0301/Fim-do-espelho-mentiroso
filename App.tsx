
import React from 'react';
import HighlightBox from './components/common/HighlightBox';
import SkinTypeGuideCard from './components/common/SkinTypeGuideCard';
import type { SkinTypeGuideCardProps, EnemyCardProps } from './types';

// Helper components for icons (simple SVGs)
const SunIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-12 h-12 ${className}`}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-6.364-.386 1.591-1.591M3 12h2.25m.386-6.364 1.591 1.591" />
  </svg>
);

const WindIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-12 h-12 ${className}`}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 7.5c-.621 0-1.125.504-1.125 1.125v3.375c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.375c0-.621-.504-1.125-1.125-1.125H3.375Z" clipRule="evenodd" />
     <path strokeLinecap="round" strokeLinejoin="round" d="M3 12.75h18" />
     <path strokeLinecap="round" strokeLinejoin="round" d="M6 7.5h1m4 0h1m4 0h1M6 16.5h1m4 0h1m4 0h1" />
  </svg>
);


const BrainStressIcon: React.FC<{className?: string}> = ({ className }) => (
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-12 h-12 ${className}`}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M8.25 21v-1.5M21 15.75h-1.5M15.75 3h-7.5A2.25 2.25 0 0 0 6 5.25v13.5A2.25 2.25 0 0 0 8.25 21h7.5A2.25 2.25 0 0 0 18 18.75V5.25A2.25 2.25 0 0 0 15.75 3Z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75v.007" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75v.007" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75v.007" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15.75v.008" />
  <path strokeLinecap="round" strokeLinejoin="round" d="m14.25 4.5-1.5 1.5m0 0-1.5-1.5m1.5 1.5V3M9.75 4.5l1.5 1.5m0 0 1.5-1.5M11.25 6V3m3.75 16.5-1.5-1.5m0 0-1.5 1.5m1.5-1.5v1.5M9.75 19.5l1.5-1.5m0 0 1.5 1.5m-1.5-1.5v1.5M4.5 9.75l1.5 1.5M6 12.75l-1.5-1.5M4.5 14.25l1.5-1.5m12 .002 1.5-1.5m-1.5 1.5L18 12.75m1.5 1.5L21 9.75" />
</svg>
);


const SugarCubeIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-12 h-12 ${className}`}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
  </svg>
);

const PageTitle: React.FC<{ title: string; subtitle?: string; className?: string }> = ({ title, subtitle, className }) => (
  <header className={`text-center py-12 md:py-16 ${className}`}>
    <h1 className="text-5xl md:text-7xl font-bold text-ebook-highlight mb-4">{title}</h1>
    {subtitle && <p className="text-xl md:text-2xl text-ebook-text font-sans max-w-3xl mx-auto">{subtitle}</p>}
  </header>
);

const Section: React.FC<{ title?: string; children: React.ReactNode; className?: string, id?: string }> = ({ title, children, className, id }) => (
  <section id={id} className={`py-8 md:py-12 ${className}`}>
    {title && <h2 className="text-4xl md:text-5xl font-bold text-ebook-highlight mb-8 text-center">{title}</h2>}
    <div className="prose prose-lg lg:prose-xl max-w-none text-ebook-text font-sans leading-relaxed space-y-6">
      {children}
    </div>
  </section>
);

const Paragraph: React.FC<{children: React.ReactNode, className?: string}> = ({children, className}) => (
    <p className={`mb-4 ${className}`}>{children}</p>
);

const App: React.FC = () => {

  const skinTypeData: SkinTypeGuideCardProps[] = [
    {
      title: "PELE OLEOSA",
      mainIngredientImage: "https://picsum.photos/seed/argilaverde/600/300",
      imageAltText: "Argila Verde",
      characteristics: "Sua pele produz óleo em excesso. O lado bom? Envelhece mais devagar! O lado mau? Brilho constante e tendência a poros entupidos. Nosso objetivo: Controlar o óleo sem ressecar a pele.",
      weapons: [
        { name: "Argila Verde ou Branca", description: "Encontras em algumas praças ou lojas de produtos naturais. É a melhor amiga para absorver o óleo e limpar os poros. Use como máscara 1 vez por semana." },
        { name: "Óleo de Jojoba", description: "Parece loucura usar óleo na pele oleosa, mas este óleo \"engana\" a sua pele, fazendo-a pensar que já produziu óleo suficiente, e assim ela acalma a produção." },
        { name: "Hibisco (Chá de Hibisco)", description: "O chá, depois de frio, pode ser usado como um tónico facial. É rico em antioxidantes e ajuda a controlar a oleosidade." },
        { name: "Babosa (Aloe Vera)", description: "Hidrata sem pesar e ajuda a acalmar a inflamação das borbulhas." },
      ],
      villains: [
        { name: "Álcool em excesso", description: "Produtos que têm \"Alcohol\" logo no início da lista de ingredientes vão ressecar sua pele, causando um \"efeito rebote\" (ela produz AINDA MAIS óleo para compensar)." },
        { name: "Óleo de Coco no Rosto", description: "É maravilhoso para o corpo e cabelo, mas para a pele oleosa do rosto, é muito \"pesado\" e pode entupir os poros (comedogénico)." },
        { name: "Cremes muito \"gordos\" e espessos", description: "Fuja deles! Procure por hidratantes em gel ou com textura \"sérum\"." },
      ],
      routine: (
        <>
          <p><strong>Manhã:</strong> 1. Lave o rosto com um sabão suave (de glicerina ou específico para pele oleosa). 2. Hidrate com 2-3 gotas de Óleo de Jojoba ou um gel de Babosa.</p>
          <p><strong>Noite:</strong> 1. Lave o rosto para remover as impurezas do dia. 2. Se tiver chá de hibisco frio, passe com um algodão. Deixe secar e durma.</p>
        </>
      ),
    },
    {
      title: "PELE SECA",
       mainIngredientImage: "https://picsum.photos/seed/karite/600/300",
      imageAltText: "Manteiga de Karité",
      characteristics: "Sua pele não produz óleo suficiente. Ela tem sede! Nosso objetivo: Dar-lhe de \"beber\" (hidratação) e \"comer\" (nutrição) para que fique macia, luminosa e protegida.",
      weapons: [
        { name: "Manteiga de Karité (ou Manteiga de Cacau)", description: "Pura e natural, é um superalimento para a pele seca. Rica em vitaminas e gorduras boas que restauram a barreira da pele." },
        { name: "Óleo de Moringa", description: "Um óleo incrível, rico em nutrientes, que hidrata profundamente sem ser pegajoso." },
        { name: "Mel", description: "Um dos melhores hidratantes naturais do mundo. Use como máscara por 10 minutos antes de lavar. Deixa a pele super macia." },
        { name: "Glicerina", description: "Procure por sabonetes ou cremes que contenham glicerina. Ela puxa a humidade do ar para a sua pele." },
      ],
      villains: [
        { name: "Sabões muito agressivos (como o sabão azul)", description: "Eles retiram o pouco óleo natural que a sua pele tem, deixando-a ainda mais seca e irritada." },
        { name: "Água muito quente", description: "Tira a proteção natural da pele. Lave sempre o rosto com água morna ou fria." },
        { name: "Produtos com fragrâncias fortes", description: "Podem causar irritação e piorar o ressecamento." },
      ],
      routine: (
        <>
          <p><strong>Manhã:</strong> 1. Lave o rosto APENAS com água. Sim, só água para não retirar a proteção. 2. Hidrate com uma pequena quantidade de Manteiga de Karité ou algumas gotas de Óleo de Moringa.</p>
          <p><strong>Noite:</strong> 1. Lave o rosto com um sabão de glicerina. 2. Com a pele ainda um pouco húmida, aplique o seu hidratante (Karité ou Moringa) para \"selar\" a água na pele.</p>
        </>
      ),
    },
     {
      title: "PELE MISTA",
      mainIngredientImage: "https://picsum.photos/seed/mucua/600/300",
      imageAltText: "Folhas de Múcua",
      characteristics: "Você vive em dois mundos. Oleosidade na Zona T e pele normal/seca nas bochechas. Nosso objetivo: Tratar cada zona de forma diferente. É como servir peixe para quem gosta de peixe, e funge para quem gosta de funge.",
      weapons: [
        { name: "Folhas de Múcua", description: "O pó de múcua misturado com um pouco de água cria uma máscara fantástica que ajuda a controlar o óleo na Zona T e é suave para o resto do rosto." },
        { name: "Óleo de Jojoba", description: "É o seu melhor amigo, pois é inteligente. Ajuda a controlar o óleo onde há excesso e hidrata onde falta. Perfeito para equilibrar." },
        { name: "Chá Verde", description: "Use o chá frio como tónico em todo o rosto. É antioxidante, anti-inflamatório e ajuda a equilibrar a pele sem agredir." },
        { name: "Argila Branca", description: "Mais suave que a verde. Pode aplicar SÓ na Zona T para controlar o brilho." },
      ],
      villains: [
        { name: "Usar o mesmo produto super forte no rosto todo", description: "Usar um produto para pele oleosa nas suas bochechas secas vai deixá-las irritadas." },
        { name: "Fugir do hidratante", description: "A sua Zona T também precisa de hidratação! Se não a hidratar, ela produz mais óleo para compensar. O truque é usar o hidratante certo." },
      ],
      routine: (
        <>
          <p><strong>Manhã:</strong> 1. Lave o rosto com um sabão suave (glicerina). 2. Aplique UMA gota de Óleo de Jojoba na Zona T e UMA gota nas bochechas, massajando bem.</p>
          <p><strong>Noite:</strong> 1. Lave o rosto. 2. Aplique uma máscara de Argila Branca SÓ na Zona T, uma vez por semana. Nos outros dias, apenas lave e hidrate com Jojoba.</p>
        </>
      ),
    },
    {
      title: "PELE NORMAL",
      mainIngredientImage: "https://picsum.photos/seed/babosa/600/300",
      imageAltText: "Babosa (Aloe Vera)",
      characteristics: "Sua pele é a melhor aluna da turma. Equilibrada, nem muito oleosa, nem muito seca. O nosso objetivo: Manter a paz! Proteger este equilíbrio perfeito e garantir que ela continue saudável por muitos e muitos anos.",
      weapons: [
        { name: "Babosa (Aloe Vera)", description: "É o hidratante perfeito para si. Leve, calmante e cheio de vitaminas. Mantém a pele feliz sem a desequilibrar." },
        { name: "Chá Verde", description: "Use o chá frio como um tónico. É rico em antioxidantes, que protegem a sua pele dos \"inimigos\" (sol, poluição) e mantêm o seu brilho natural." },
        { name: "Óleo de Jojoba", description: "É um óleo equilibrante. Use algumas gotas à noite para manter a hidratação no nível certo." },
        { name: "Bons alimentos", description: "A sua pele já é boa, ajude-a de dentro para fora comendo muita fruta e vegetais." },
      ],
      villains: [
        { name: "Negligência", description: "O maior erro! Achar que \"pele normal não precisa de nada\" é o caminho para ela se tornar seca ou oleosa." },
        { name: "Produtos muito agressivos", description: "Não precisa de ácidos fortes ou esfoliantes potentes. Eles podem destruir o seu equilíbrio." },
        { name: "Dormir de maquilhagem", description: "Um crime para qualquer tipo de pele, incluindo a sua." },
        { name: "Esquecer o protetor solar", description: "A sua pele pode ser boa, mas não é à prova de bala (ou de sol)." },
      ],
      routine: (
        <>
          <p><strong>Manhã:</strong> 1. Lave o rosto com um sabão de glicerina suave. 2. Hidrate com um gel de Babosa e (MUITO IMPORTANTE) aplique protetor solar.</p>
          <p><strong>Noite:</strong> 1. Lave bem o rosto para remover o dia. 2. Aplique 2-3 gotas de Óleo de Jojoba, massajando suavemente.</p>
        </>
      ),
    },
    {
      title: "PELE SENSÍVEL",
      mainIngredientImage: "https://picsum.photos/seed/camomila/600/300",
      imageAltText: "Camomila",
      characteristics: "Sua pele é uma diva. Reclama de tudo e precisa de tratamento VIP. Nosso objetivo: Menos é mais. Acalmar, proteger e fortalecer.",
      weapons: [
        { name: "Camomila", description: "O chá de camomila frio, usado como tónico, é um calmante poderosíssimo. Reduz a vermelhidão e a irritação." },
        { name: "Babosa (Aloe Vera)", description: "É o bombeiro da pele. Apaga o \"fogo\" da irritação, hidrata e refresca. Tenha sempre em casa." },
        { name: "Óleo de Amêndoas Doces", description: "Um óleo extremamente suave e hipoalergénico, ótimo para hidratar a pele sensível sem causar reações." },
        { name: "Aveia", description: "Triture a aveia até virar um pó fino, misture com água e aplique como máscara. É super calmante e anti-inflamatória." },
      ],
      villains: [
        { name: "TUDO que for novo", description: "Teste sempre qualquer produto novo numa pequena área do pescoço ou atrás da orelha antes de aplicar no rosto todo." },
        { name: "Fragrâncias e Perfumes", description: "O inimigo número 1. Procure sempre por produtos \"sem perfume\" ou \"hipoalergénicos\"." },
        { name: "Esfoliantes Físicos Agressivos", description: "Aqueles com grânulos grandes são veneno para si. Se quiser esfoliar, use algo muito suave como a máscara de aveia." },
      ],
      routine: (
        <>
          <p><strong>Manhã:</strong> 1. Lave o rosto apenas com água morna. 2. Hidrate com gel de Babosa ou Óleo de Amêndoas Doces.</p>
          <p><strong>Noite:</strong> 1. Lave o rosto com um sabão muito, muito suave (de bebé ou específico para pele sensível). 2. Passe o chá de camomila frio com um algodão e deixe a pele absorver.</p>
        </>
      ),
    },
  ];

  const enemies: EnemyCardProps[] = [
    {
      icon: <SunIcon className="text-ebook-highlight group-hover:text-ebook-gold transition-colors duration-300" />,
      title: "O Inimigo nº 1: O Sol Impiedoso",
      description: "Quem é ele? O nosso sol forte, que amamos, mas que pode ser brutal para a pele, causando manchas, envelhecimento precoce e piorando a inflamação das borbulhas.",
      tip: "Dica Rápida de Defesa: Protetor solar não é luxo, é necessidade. Mesmo em dias nublados (o cacimbo engana!). Procure por um que seja \"toque seco\" ou \"oil-free\" se a sua pele brilhar muito."
    },
    {
      icon: <WindIcon className="text-ebook-highlight group-hover:text-ebook-gold transition-colors duration-300" />,
      title: "O Inimigo nº 2: A Poeira Fina",
      description: "Quem é ela? A poeira de Luanda, a poluição, que flutua no ar e adora assentar no nosso rosto, entupindo os poros e criando o ambiente perfeito para as bactérias que causam as espinhas.",
      tip: "Dica Rápida de Defesa: Limpar o rosto de manhã e, PRINCIPALMENTE, à noite é inegociável. É como tirar o lixo de casa todos os dias."
    },
    {
      icon: <BrainStressIcon className="text-ebook-highlight group-hover:text-ebook-gold transition-colors duration-300" />,
      title: "O Inimigo nº 3: O Stresse do Dia a Dia",
      description: "Quem é ele? A correria para apanhar o táxi, as provas da faculdade, os problemas do dia a dia... Esse stresse liberta uma hormona chamada cortisol, que diz às tuas glândulas para produzirem mais óleo. Resultado? Mais brilho, mais borbulhas.",
      tip: "Dica Rápida de Defesa: Respire fundo, mana. Tente tirar 5 minutos por dia só para ti, para ouvir uma música, dançar. A tua pele agradece."
    },
    {
      icon: <SugarCubeIcon className="text-ebook-highlight group-hover:text-ebook-gold transition-colors duration-300" />,
      title: "O Inimigo nº 4: O Açúcar Escondido",
      description: "Quem é ele? Não é só o açúcar do bolo. É o açúcar escondido nos refrigerantes (sim, aquele Blue geladinho), nos sumos de pacote, nos bolinhos. O excesso de açúcar causa inflamação no corpo todo, e a pele é um dos primeiros lugares onde isso aparece.",
      tip: "Dica Rápida de Defesa: Beba mais água. Tente trocar um refrigerante por um copo de água com limão. Pequenas trocas fazem uma grande diferença."
    }
  ];

  return (
    <div className="min-h-screen bg-ebook-bg font-sans antialiased">
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 space-y-12">
        
        {/* Capa */}
        <div 
            className="h-[80vh] md:h-screen flex flex-col justify-center items-center text-center p-6 rounded-lg shadow-2xl relative overflow-hidden"
            style={{ backgroundImage: "url('https://picsum.photos/seed/michellecover/1200/800')", backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className="absolute inset-0 bg-black/50"></div> {/* Overlay */}
            <div className="relative z-10">
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-4 leading-tight font-serif">O Fim do Espelho Mentiroso</h1>
                <p className="text-xl sm:text-2xl md:text-3xl text-gray-200 font-sans max-w-2xl mx-auto">O Guia Rápido Angolano Para Descobrir Seu Verdadeiro Tipo de Pele em 5 Minutos e Parar de Gastar Dinheiro com Produtos que Não Funcionam.</p>
            </div>
        </div>

        {/* SEÇÃO 1: BOAS-VINDAS À SUA NOVA REALIDADE */}
        <Section title="Boas-vindas à Sua Nova Realidade">
          <h3 className="text-3xl font-semibold text-ebook-text mb-6">Conheça-me: A Minha Luta com o Espelho</h3>
          <Paragraph>Querida futura Guerreira da Pele Radiante,</Paragraph>
          <Paragraph>Antes de te entregar os segredos que prometi, preciso confessar algo que talvez te surpreenda.</Paragraph>
          
          <div className="md:flex md:items-start md:space-x-6 my-8">
            <img src="https://picsum.photos/seed/michelleface/300/400" alt="Close-up do rosto da Michelle" className="w-full md:w-1/3 h-auto object-cover rounded-lg shadow-lg mb-4 md:mb-0 float-right md:float-none ml-4 md:ml-0" />
            <div className="md:w-2/3">
              <Paragraph>Eu já odiei espelhos.</Paragraph>
              <Paragraph>Deixa eu te perguntar uma coisa, mana... O teu espelho também mente pra ti?</Paragraph>
              <Paragraph>Sabe como é. Você acorda de manhã, se sente bem, talvez até otimista. Mas aí você vai à casa de banho, encara aquele pedaço de vidro e... PÁ. A mentira começa.</Paragraph>
              <Paragraph>O espelho não te mostra a incrível DIVA que as tuas amigas amam. Ele não te mostra a tua inteligência, o teu sorriso que ilumina uma sala, ou a força que tens para correr atrás dos teus sonhos em Luanda.</Paragraph>
              <Paragraph>Não. O espelho mentiroso foca naquela borbulha que apareceu do nada. Naquela mancha que insiste em não desaparecer. Na oleosidade que parece brilhar mais que o sol do meio-dia. Ele amplifica cada "defeito" e sussurra mentiras cruéis: "Você não é bonita o suficiente." "Nunca terás a pele daquela influencer." "Esconde-te."</Paragraph>
              <Paragraph>Eu sei bem o que é ouvir isso. Porque durante anos, o meu espelho foi o meu pior inimigo.</Paragraph>
            </div>
          </div>
          <div className="clear-both"></div>


          <Paragraph>A minha história é, provavelmente, muito parecida com a tua. Eu era a rainha da "farmácia da esperança".</Paragraph>
          <img src="https://picsum.photos/seed/beautyshelf/600/300" alt="Produtos de beleza genéricos numa prateleira" className="w-full h-auto object-cover rounded-lg shadow-lg my-6" />
          <Paragraph>Gastava os meus kwanzas, que custavam tanto a ganhar, em tudo que prometia um milagre. Comecei com o creme Nívea no pote azul, porque toda a gente dizia que era o melhor, o mais seguro, quase um luxo. A minha pele? Ficava ainda mais oleosa e com mais borbulhas. "Epá, como assim?", eu pensava.</Paragraph>
          <Paragraph>Frustrada, parti para o ataque. Corria para a farmácia e comprava pomadas como Epiderme. O anúncio na caixa parecia prometer secar tudo, certo? E até secava... junto com todo o resto da minha pele. O resultado? Uma pele ressecada, a repuxar, e dias depois, as borbulhas voltavam, muitas vezes com uma mancha de castigo como "bónus".</Paragraph>
          <Paragraph>E claro, havia o TikTok e o Instagram. A minha perdição. Eu via uma influencer angolana com uma pele de vidro, e no minuto seguinte já estava no Kikolo a procurar um creme "clareador" duvidoso. Via uma guru coreana a falar de um ingrediente exótico, e já estava na cozinha a misturar abacate com fuba, a rezar por um milagre. O resultado era sempre o mesmo: uma cozinha suja e uma decepção profunda.</Paragraph>
          <Paragraph>Eu estava presa num ciclo deprimente. GASTAR -&gt; ESPERAR -&gt; FRUSTRAR -&gt; REPETIR.</Paragraph>
          <HighlightBox>
            <Paragraph className="!text-ebook-highlight !font-semibold">O ponto mais baixo? Lembro-me perfeitamente. Tinha combinado sair com as minhas amigas, íamos ao Lookal, um evento que eu queria muito ir. Passei mais de uma hora em frente ao espelho, a tentar cobrir uma série de borbulhas na minha testa com maquilhagem. Quanto mais eu tentava, pior ficava. Parecia um reboco mal feito. Olhei para o meu reflexo, e a única coisa que senti foi vergonha.</Paragraph>
            <Paragraph>Peguei no telemóvel, mandei uma mensagem para o grupo a dizer que estava com uma dor de cabeça terrível e não podia mais ir.</Paragraph>
            <Paragraph>Passei a noite no meu quarto. A chorar. Não por causa das borbulhas. Mas pela raiva que eu sentia daquela versão de mim no espelho. Foi ali, naquele momento de frustração total, que eu gritei para mim mesma: BASTA!</Paragraph>
          </HighlightBox>
          <Paragraph>Naquele dia, eu tomei uma decisão. Parei de procurar a solução MÁGICA nos produtos, nas influencers, nas dicas de 5 segundos. E comecei a procurar a resposta LÓGICA. Comecei a estudar. A ler sobre a biologia da pele, a entender o que palavras como "sebo", "pH" e "barreira cutânea" realmente significavam. Conversei com a minha avó, que me falou sobre as folhas e óleos que ela usava e que a ciência hoje comprova.</Paragraph>
          <img src="https://picsum.photos/seed/naturalsamakaka/600/350" alt="Ingredientes naturais angolanos sobre pano de samakaka" className="w-full h-auto object-cover rounded-lg shadow-lg my-6" />
          <Paragraph>E foi aí que a epifania me atingiu. Uma verdade tão simples e tão óbvia que eu quase ri da minha própria ignorância.</Paragraph>
          <Paragraph className="font-bold text-xl text-ebook-highlight text-center my-8">O problema nunca foi a minha pele. O problema era que eu não a conhecia.</Paragraph>
          <Paragraph>Eu estava a tentar usar um mapa do Huambo para navegar em Luanda. Não ia dar certo, nunca.</Paragraph>
          <Paragraph>Depois de meses de estudo, testes e muitos erros (para que tu não precises de os cometer), eu finalmente decifrei o código. Criei um método simples, baseado na realidade angolana, que me ajudou a transformar a minha pele. E a primeira coisa que fiz foi transformar o meu espelho de inimigo em melhor amigo.</Paragraph>
          <Paragraph>Compilei o PRIMEIRO e mais IMPORTANTE passo dessa jornada neste guia que tens nas tuas mãos.</Paragraph>
          <Paragraph>A minha promessa para ti não é uma pele perfeita da noite para o dia. Isso é marketing de mentira. A minha promessa é CLAREZA.</Paragraph>
          <Paragraph className="font-semibold">Ao final da leitura deste guia, daqui a poucos minutos, você nunca mais vai olhar para um creme, para uma dica no TikTok, ou para o seu próprio rosto da mesma forma. Você vai parar de adivinhar e vai começar a DECIDIR. Você terá o poder. Isso eu garanto.</Paragraph>
          <Paragraph>Mas antes de te entregar o mapa, precisamos entender porque estiveste perdida até agora... Vamos desmascarar os verdadeiros vilões na próxima seção.</Paragraph>
        </Section>

        {/* SEÇÃO 2: O GRANDE SEGREDO */}
        <Section title="O Grande Segredo: Você Não Tem Uma 'Pele Má', Tem a Pele Errada (Para os Produtos Que Usa!)">
            <h3 className="text-3xl font-semibold text-ebook-text mb-6">A "Burla" dos Cremes Milagrosos e Por Que a Nívea Pode Não Ser Sua Amiga</h3>
            <Paragraph>Mana, imagine por um segundo que a tua pele é um carro. Um bom carro, potente, feito para as estradas de Angola.</Paragraph>
            <Paragraph>Agora, imagine que este teu carro funciona a gasolina.</Paragraph>
            <Paragraph>Você vai à bomba e, em vez de gasolina, você coloca o gasóleo mais caro e "de alta qualidade" que existe. O que acontece com o carro? Ele engasga. Pára. Não anda. O problema é do gasóleo? Não, o gasóleo é excelente... mas para um motor a gasóleo.</Paragraph>
            
            {/* Infografia Analógica */}
            <div className="my-8 p-6 bg-white rounded-lg shadow-xl text-center">
                <h4 className="text-2xl font-semibold text-ebook-highlight mb-4">Analogia: Pele vs. Carro</h4>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                    <div className="border border-gray-200 p-4 rounded-lg">
                        <img src="https://picsum.photos/seed/gascar/200/150" alt="Carro a gasolina" className="mx-auto mb-2 rounded" />
                        <p className="font-semibold">Carro a Gasolina + Gasolina = 😊 Funciona!</p>
                        <p className="font-semibold">Pele Seca + Creme Hidratante Rico = 😊 Pele Feliz!</p>
                    </div>
                    <div className="border border-gray-200 p-4 rounded-lg">
                        <img src="https://picsum.photos/seed/dieselcar/200/150" alt="Carro a diesel" className="mx-auto mb-2 rounded" />
                         <p className="font-semibold text-red-600">Carro a Gasolina + Gasóleo = 😭 Não Funciona!</p>
                         <p className="font-semibold text-red-600">Pele Oleosa + Creme Rico (Nívea) = 😭 Poros Entupidos!</p>
                    </div>
                </div>
                <p className="mt-4 text-ebook-text">Com a tua pele, a história é exatamente a mesma.</p>
            </div>

            <Paragraph>Aquele pote azul da Nívea que a tua tia usa e tem uma pele incrível? Para a pele dela, que talvez seja seca, é gasolina de alta qualidade. Para a tua pele, que pode ser oleosa, esse mesmo creme é gasóleo. Ele vai entupir os teus "motores" (os poros) e causar um congestionamento (borbulhas).</Paragraph>
            <Paragraph>A maior "burla" do mercado da beleza não são os produtos falsos. É a ideia de que existe UM produto milagroso que serve para TODA a gente (todo tipo de pele).</Paragraph>
            <Paragraph className="font-bold text-xl text-ebook-highlight text-center my-8">Não existe "pele má". Existe apenas uma pele mal compreendida.</Paragraph>
            <Paragraph>O teu objetivo não é encontrar o produto "da moda". O teu objetivo é encontrar o produto CERTO para o TEU tipo de pele. E o primeiro passo para isso é entender os desafios únicos que enfrentamos aqui.</Paragraph>

            <h3 className="text-3xl font-semibold text-ebook-text mt-12 mb-6">Os 4 Inimigos da Pele Angolana (e Como Vencê-los)</h3>
            <Paragraph>A nossa pele não luta as mesmas batalhas que a pele de uma coreana em Seul, que que uma Brasileira no Rio de Janeiro ou de uma americana em Nova Iorque. Nós temos os nossos próprios "mequerequexes" para derrotar. Conheça os 4 principais:</Paragraph>
            
            <div className="grid md:grid-cols-2 gap-8 my-8">
              {enemies.map(enemy => (
                <div key={enemy.title} className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center">
                  <div className="mb-4 text-ebook-highlight">{enemy.icon}</div>
                  <h4 className="text-2xl font-semibold text-ebook-highlight mb-2">{enemy.title}</h4>
                  <p className="text-sm text-gray-600 mb-3">{enemy.description}</p>
                  <HighlightBox className="!bg-ebook-highlight/5 !border-ebook-highlight/30 w-full mt-auto">
                    <p className="text-sm font-semibold text-ebook-highlight">{enemy.tip}</p>
                  </HighlightBox>
                </div>
              ))}
            </div>

            <Paragraph>Agora que conheces os inimigos, está na hora de te dar a tua arma secreta. A ferramenta que vai mudar o jogo para sempre.</Paragraph>

            <h3 className="text-3xl font-semibold text-ebook-text mt-12 mb-6">O Teste de 5 Minutos "O Espelho da Verdade"</h3>
            <Paragraph>Chegou a hora. Chega de adivinhar. Vamos fazer o teu espelho finalmente contar a verdade. Este teste é simples, de borla, e vai te dar a clareza que procuras.</Paragraph>
            
            <div className="my-8 space-y-6">
                <div>
                    <h4 className="text-2xl font-semibold text-ebook-highlight mb-3">Passo 1: A Preparação</h4>
                    <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow">
                        <img src="https://picsum.photos/seed/facewash/150/150" alt="Rosto a ser lavado" className="w-24 h-24 object-cover rounded-lg" />
                        <div>
                            <Paragraph>Vá à casa de banho e lave bem o rosto. Use um sabão simples (o bom e velho sabão azul serve perfeitamente para este teste) e água morna.</Paragraph>
                            <Paragraph>Seque o rosto suavemente com uma toalha limpa, dando leves batidinhas. Não esfregue!</Paragraph>
                            <Paragraph>Agora, o mais importante: NÃO FAÇA NADA. Não passe creme, não toque no rosto, não faça caretas.</Paragraph>
                            <Paragraph>Coloque um alarme para tocar daqui a 30 a 60 minutos. Vá ver um vídeo, responder umas mensagens, mas deixe a pele "respirar".</Paragraph>
                        </div>
                    </div>
                </div>
                <div>
                    <h4 className="text-2xl font-semibold text-ebook-highlight mb-3">Passo 2: O Diagnóstico</h4>
                     <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow">
                        <img src="https://picsum.photos/seed/facezones/150/150" alt="Rosto com Zona T destacada" className="w-24 h-24 object-cover rounded-lg" />
                        <div>
                            <Paragraph>O alarme tocou? Ótimo. Pegue num espelho e vá para um lugar bem iluminado. Vamos analisar o teu rosto, ZONA por ZONA (Zona T = testa, nariz, queixo. Bochechas = o resto).</Paragraph>
                            <Paragraph>Leia as descrições abaixo e veja com qual delas você mais se identifica. Seja honesta!</Paragraph>
                        </div>
                    </div>
                </div>
            </div>
            
            <HighlightBox>
                <h4 className="text-2xl font-semibold text-ebook-highlight mb-4 text-center">Leia e descubra o seu time:</h4>
                <ul className="space-y-4 font-sans">
                    <li><strong>Time da PELE OLEOSA:</strong><br/>Como você se sente? A tua pele parece brilhante no rosto TODO. Se você passar o dedo na testa, no nariz, nas bochechas e no queixo, sente uma camada de óleo.<br/>O que o espelho diz? O teu rosto brilha mais que um carro novo depois de ser lavado. Os teus poros, especialmente na zona do nariz e bochechas, parecem mais visíveis, mais "abertos". Você provavelmente tem tendência a cravos e borbulhas.</li>
                    <li><strong>Time da PELE SECA:</strong><br/>Como você se sente? A tua pele parece "repuxar", como se fosse um número menor. Sente-a áspera e, por vezes, com comichão. Não há sinal de brilho em lado nenhum.<br/>O que o espelho diz? A tua pele parece baça, sem vida, sem aquele "glow" natural. Em alguns casos, pode até ver pequenas áreas a descamar. Linhas finas são mais visíveis.</li>
                    <li><strong>Time da PELE MISTA (O mais comum!):</strong><br/>Como você se sente? É uma confusão! A tua testa, nariz e queixo (a famosa Zona T) estão a pedir socorro de tanto óleo, mas as tuas bochechas estão normais ou até mesmo a repuxar, como se fossem de outra pessoa.<br/>O que o espelho diz? A tua Zona T está brilhante e com poros visíveis, enquanto as tuas bochechas estão baças e com uma textura normal ou seca. É literalmente ter dois tipos de pele no mesmo rosto.</li>
                    <li><strong>Time da PELE NORMAL (A sortuda!):</strong><br/>Como você se sente? A sua pele é... confortável. Não repuxa, não brilha em excesso. É equilibrada.<br/>O que o espelho diz? Sua pele tem uma textura suave, poros pouco visíveis e uma aparência saudável e vibrante. Borbulhas são raras. Você ganhou a lotaria da genética da pele!</li>
                    <li><strong>Time da PELE SENSÍVEL:</strong><br/>Como você se sente? A tua pele reage a TUDO. Um produto novo, uma comida diferente, o stresse... e ela fica logo vermelha, irritada, com comichão ou a arder.<br/>O que o espelho diz? Você vê vermelhidão com frequência, especialmente nas bochechas. A tua pele pode parecer "zangada" facilmente. (Nota: Você pode ser Oleosa e Sensível, ou Seca e Sensível. A sensibilidade é uma característica, não um tipo isolado).</li>
                </ul>
            </HighlightBox>
            <Paragraph>E então? Já sabe qual é o seu time?</Paragraph>
            <Paragraph>Agora que você tem o diagnóstico e o seu espelho finalmente te contou a verdade, o que fazer com essa informação poderosa? Na próxima seção, vou te dar o teu primeiro plano de ataque personalizado.</Paragraph>
        </Section>

        {/* SEÇÃO 3: O MAPA DO TESOURO */}
        <Section title="O Mapa do Tesouro Para o Seu Tipo de Pele">
            <h3 className="text-3xl font-semibold text-ebook-text mb-6">"Então a minha pele é... e agora?"</h3>
            <Paragraph>Parabéns, Guerreira! Ter esta informação é como ter a combinação de um cofre. Agora, vou-te dar a chave para abrir e pegar o tesouro.</Paragraph>
            <Paragraph>Encontre o seu tipo de pele abaixo e leia a sua "ficha de tratamento" de uma página. Simples e direto ao ponto.</Paragraph>
            {skinTypeData.map(data => <SkinTypeGuideCard key={data.title} {...data} />)}
            <Paragraph className="font-semibold text-center text-xl my-8">Incrível! Você já sabe mais sobre como cuidar da sua pele do que 95% das pessoas. Você não só descobriu o seu tipo de pele, como também já tem um plano de ação simples e eficaz para começar HOJE.</Paragraph>
            <Paragraph className="font-semibold text-center text-xl my-8">Você completou o "Dia Zero" com sucesso. Mas acredite, esta é apenas a ponta do iceberg da sua transformação...</Paragraph>
        </Section>
        
        {/* SEÇÃO 4: O PRIMEIRO PASSO PARA A TRANSFORMAÇÃO */}
        <Section title="O Primeiro Passo Para a Transformação de 21 Dias (A História Que Mudou Tudo)">
            <h3 className="text-3xl font-semibold text-ebook-text mb-6">Você Acaba de Completar o "Dia Zero"...</h3>
            <Paragraph>Mana, pare um segundo. Olhe para tudo que você aprendeu. Você não é mais a mesma pessoa que começou a ler este guia. Você agora tem o poder da clareza. E isso, ninguém pode tirar de ti.</Paragraph>
            <Paragraph>Mas deixa eu te contar porque eu coloquei toda a minha alma e energia em criar um sistema que vai muito além deste "Dia Zero".</Paragraph>
            
            <HighlightBox>
                <Paragraph>Houve uma altura na minha vida em que ter a clareza que você tem agora parecia um sonho impossível. A minha autoestima estava... epá, nem sei se existia. Eu passava horas no Instagram, a rolar e a torturar-me. Eu via a pele da Juddy da Conceição, da Yola Araújo, da Marroly... pareciam feitas de porcelana. E depois eu olhava para o meu espelho e só via dor.</Paragraph>
                <Paragraph>O meu rosto estava cheio de acne inflamatória, dolorosa. Manchas escuras das borbulhas antigas. Eu sentia vergonha de olhar as pessoas nos olhos. Nada, mas NADA parecia funcionar. Os cremes caros, as pomadas de farmácia... era tudo dinheiro deitado no lixo. Eu estava desesperada e a um passo de desistir.</Paragraph>
            </HighlightBox>
            
            <Paragraph>Foi nessa altura que a minha mãe me obrigou a ir com ela visitar a família no interior. Uma viagem ao "mato", como se diz. Eu não queria ir. A última coisa que eu queria era socializar com a minha pele naquele estado. Mas eu fui. E essa viagem, que eu tanto temi, mudou a minha vida para sempre.</Paragraph>
            <Paragraph>Lá, conheci uma das minhas avós mais distantes. Uma senhora de 75 anos. E, mana, quando eu olhei para o rosto dela, eu fiquei em choque. A pele dela era lisa, luminosa, com uma vitalidade que eu não via nem em mulheres de 30 anos. Eu fiquei a olhar, espantada.</Paragraph>
            <Paragraph>Tentei logo puxar conversa, perguntar o que ela usava, qual era o segredo. Mas havia um problema: ela só falava Kimbundu, e eu, como boa menina da cidade, não entendia quase nada.</Paragraph>
            <Paragraph>Foi aí que as minhas sobrinhas pequenas se tornaram as minhas tradutoras e a ponte para o conhecimento que eu tanto precisava. Durante dias, eu sentava-me com aquela senhora sábia. Através das minhas sobrinhas, eu perguntava e ela respondia, com um sorriso paciente.</Paragraph>
            <img src="https://picsum.photos/seed/wisdomgrandma/600/400" alt="Avó sábia partilhando conhecimento" className="w-full h-auto object-cover rounded-lg shadow-lg my-6" />
            <Paragraph>Ela não me falou de cremes. Falou-me de folhas. De óleos. De argilas da beira do rio. De como misturar certas sementes para acalmar a pele "zangada". De que tipo de planta usar para a pele "brilhante" e que tipo usar para a pele "seca". Eram receitas ancestrais, passadas de geração em geração, usando ingredientes que a nossa terra, Angola, nos dá de borla.</Paragraph>
            <Paragraph>Eu anotei tudo num caderno, como se a minha vida dependesse daquilo. E quando voltei para Luanda, comecei a experimentar. Mas depois, tive uma ideia. Pensei: "E se eu combinar esta sabedoria antiga com um pouco da ciência moderna?". Fui a uma farmácia e comecei a pesquisar sobre vitaminas. Descobri que certas vitaminas, como a Niacinamida (Vitamina B3) ou a Vitamina C, vendidas em cápsulas ou comprimidos, eram autênticas bombas de nutrientes para a pele.</Paragraph>
            <Paragraph className="font-bold text-xl text-ebook-highlight text-center my-8">E foi aí que a magia aconteceu. Comecei a misturar o conteúdo de algumas dessas cápsulas nas receitas simples da minha avó. Mana... Em 14 dias, o meu rosto era outro. As inflamações acalmaram. As manchas começaram a clarear. A minha pele estava a ficar... fofa. Luminosa. Pessoas começaram a perguntar: "Michelle, o que estás a usar? A tua pele está a pipocar!".</Paragraph>
            <Paragraph>Eu tinha descoberto um sistema.</Paragraph>

            <h3 className="text-3xl font-semibold text-ebook-text mt-12 mb-6">Apresentando: O Kit de Transformação de Pele em 21 Dias</h3>
            <div className="md:flex md:items-center md:space-x-8 my-8">
                <div className="md:w-1/2">
                    <img src="https://picsum.photos/seed/treasuremap/600/450" alt="Mapa do tesouro estilizado" className="w-full h-auto object-cover rounded-lg shadow-xl mb-4 md:mb-0" />
                </div>
                <div className="md:w-1/2">
                    <Paragraph>Eu passei os meses seguintes a organizar, a testar as doses certas, a refinar as misturas. Transformei o saber da minha avó e as minhas descobertas com as vitaminas num sistema passo a passo, fácil de seguir, para que qualquer mulher angolana pudesse ter os mesmos resultados, sem a confusão e a dor que eu passei.</Paragraph>
                    <Paragraph className="font-bold text-2xl text-ebook-highlight my-4">E chamei-lhe O Kit de Transformação de Pele em 21 Dias.</Paragraph>
                    <Paragraph>É o mapa completo do tesouro. É a minha obra-prima. E lá dentro, eu te ensino absolutamente TUDO:</Paragraph>
                </div>
            </div>
            
            <ul className="list-disc list-inside space-y-3 pl-4 my-8 text-lg bg-white p-6 rounded-lg shadow-lg">
                <li><strong>A Anatomia Secreta da Pele:</strong> Vou te ensinar a "ler" a tua pele de uma forma que nunca ninguém te ensinou, para que você entenda PORQUE as coisas funcionam.</li>
                <li><strong>Testes de Precisão:</strong> Vamos além do teste deste guia, com novos testes para você ter 100% de certeza do seu tipo e subtipo de pele.</li>
                <li><strong>A Lista dos Melhores Produtos:</strong> Vou te ensinar a ler os rótulos e a escolher os melhores cremes e sabonetes na farmácia ou no supermercado, com base na sua pele, para quando você não tiver tempo para as receitas.</li>
                <li><strong>O Cardápio da Pele Radiante:</strong> A lista completa dos alimentos, frutas e vegetais angolanos que vão vitaminar a sua pele de dentro para fora.</li>
                <li className="text-ebook-highlight font-semibold"><strong>A Jóia da Coroa - As Receitas da Avó 2.0:</strong> O meu caderno secreto. Todas as receitas caseiras para cada tipo de pele (Oleosa, Seca, Mista, Normal, Sensível), com as instruções exatas de que vitaminas comprar na farmácia e como misturá-las para resultados que você nunca pensou serem possíveis.</li>
                <li>E, claro, o acesso à nossa <strong>Comunidade VIP de Guerreiras</strong> para ter meu apoio direto.</li>
            </ul>
            <img src="https://picsum.photos/seed/kitvalue/700/500" alt="Value Stack do Kit de Transformação" className="w-full max-w-2xl mx-auto h-auto object-cover rounded-lg shadow-xl my-10" />
            <Paragraph>Este guia(PDF) que você acabou de ler foi o meu presente para si. O "Dia Zero". Se você está pronta para começar o "Dia 1" da sua verdadeira transformação, eu tenho um convite especial.</Paragraph>
            
            <div className="text-center my-12">
                <a 
                    href="#kit-link-placeholder" // Placeholder link
                    className="inline-block bg-ebook-highlight text-white font-bold text-xl md:text-2xl py-4 px-8 md:px-12 rounded-lg shadow-lg hover:bg-opacity-90 transition-colors transform hover:scale-105 duration-300 ease-in-out"
                >
                    CLIQUE AQUI PARA VER O KIT COMPLETO E COMEÇAR SUA TRANSFORMAÇÃO DE 21 DIAS AGORA!
                </a>
            </div>
        </Section>

        {/* Conclusão */}
        <Section className="text-center border-t border-ebook-highlight/20 pt-12">
            <img src="https://picsum.photos/seed/michellesmiling/200/200" alt="Michelle sorrindo" className="w-40 h-40 object-cover rounded-full mx-auto shadow-xl mb-8" />
            <Paragraph>Seja qual for a sua decisão hoje, saiba que estou imensamente orgulhosa por você ter dado este primeiro passo. Você investiu em si mesma, e esse é o ato de amor próprio mais poderoso que existe.</Paragraph>
            <Paragraph className="font-semibold text-xl text-ebook-highlight my-6">Lembre-se sempre: o seu espelho não precisa ser seu inimigo. Ele pode, e vai ser, o seu maior fã. Ele vai refletir a beleza, a força e a luz que já existem dentro de si.</Paragraph>
            <Paragraph>Espero sinceramente te ver na nossa comunidade de Guerreiras.</Paragraph>
            <Paragraph>Com carinho e brilho,<br/>Michelle.</Paragraph>
            <Paragraph className="mt-8 text-sm">Encontre-me nas redes sociais.</Paragraph>
            {/* Add social media icons/links here if available */}
        </Section>

      </main>
      <footer className="text-center p-8 text-sm text-ebook-text/70 border-t border-ebook-bg">
        <p>&copy; {new Date().getFullYear()} Michelle. Todos os direitos reservados.</p>
        <p>Este é um guia digital apresentado como uma aplicação web.</p>
      </footer>
    </div>
  );
};

export default App;
