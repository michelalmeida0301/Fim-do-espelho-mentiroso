import React from 'react';

// --- TIPOS DE DADOS (PARA ORGANIZAÇÃO) ---
type SkinTypeGuideCardProps = {
  title: string;
  mainIngredientImage: string;
  imageAltText: string;
  characteristics: string;
  weapons: { name: string; description: string }[];
  villains: { name: string; description: string }[];
  routine: React.ReactNode;
};

type EnemyCardProps = {
    icon: React.ReactNode;
    title: string;
    description: string;
    tip: string;
};

// --- COMPONENTES HELPER (PEÇAS DO NOSSO LEGO) ---

const SunIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-12 h-12 ${className}`}><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-6.364-.386 1.591-1.591M3 12h2.25m.386-6.364 1.591 1.591" /></svg>
);

const WindIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-12 h-12 ${className}`}><path strokeLinecap="round" strokeLinejoin="round" d="M3.375 7.5c-.621 0-1.125.504-1.125 1.125v3.375c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.375c0-.621-.504-1.125-1.125-1.125H3.375Z" /></svg>
);

const BrainStressIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-12 h-12 ${className}`}><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M8.25 21v-1.5M21 15.75h-1.5M15.75 3h-7.5A2.25 2.25 0 0 0 6 5.25v13.5A2.25 2.25 0 0 0 8.25 21h7.5A2.25 2.25 0 0 0 18 18.75V5.25A2.25 2.25 0 0 0 15.75 3Z" /></svg>
);

const SugarCubeIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-12 h-12 ${className}`}><path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" /></svg>
);

const HighlightBox: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <div className={`bg-ebook-highlight/10 border-l-4 border-ebook-highlight p-4 my-6 rounded-r-lg ${className}`}>
    {children}
  </div>
);

const Section: React.FC<{ title?: string; children: React.ReactNode; className?: string, id?: string }> = ({ title, children, className, id }) => (
  <section id={id} className={`py-8 md:py-12 ${className}`}>
    {title && <h2 className="text-4xl md:text-5xl font-bold text-ebook-highlight mb-8 text-center font-serif">{title}</h2>}
    <div className="prose prose-lg lg:prose-xl max-w-none text-ebook-text font-sans leading-relaxed space-y-6">
      {children}
    </div>
  </section>
);

const Paragraph: React.FC<{children: React.ReactNode, className?: string}> = ({children, className}) => (
    <p className={`mb-4 ${className}`}>{children}</p>
);

const SkinTypeGuideCard: React.FC<SkinTypeGuideCardProps> = ({ title, mainIngredientImage, imageAltText, characteristics, weapons, villains, routine }) => (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden my-8 transform hover:scale-105 transition-transform duration-300">
        <img src={mainIngredientImage} alt={imageAltText} className="w-full h-48 object-cover" />
        <div className="p-6">
            <h4 className="text-2xl font-bold text-ebook-gold mb-3 font-serif">{title}</h4>
            <p className="italic text-gray-600 mb-4">{characteristics}</p>
            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <h5 className="font-semibold text-lg text-green-700 mb-2">Suas "Armas" (Ingredientes-Amigos) 🛡️</h5>
                    <ul className="list-disc list-inside space-y-2 text-sm">
                        {weapons.map(w => <li key={w.name}><strong>{w.name}:</strong> {w.description}</li>)}
                    </ul>
                </div>
                <div>
                    <h5 className="font-semibold text-lg text-red-700 mb-2">Seus "Vilões" (Ingredientes-Inimigos) 🚫</h5>
                     <ul className="list-disc list-inside space-y-2 text-sm">
                        {villains.map(v => <li key={v.name}><strong>{v.name}:</strong> {v.description}</li>)}
                    </ul>
                </div>
            </div>
            <div className="mt-6 bg-gray-50 p-4 rounded-lg">
                 <h5 className="font-semibold text-lg text-ebook-highlight mb-2">Sua Rotina de Ataque de 2 Passos (Para os próximos 7 dias):</h5>
                 <div className="text-sm">{routine}</div>
            </div>
        </div>
    </div>
);

// --- O COMPONENTE PRINCIPAL DO APP ---

const App: React.FC = () => {

  const skinTypeData: SkinTypeGuideCardProps[] = [
    {
      title: "PELE OLEOSA",
      mainIngredientImage: "https://images.pexels.com/photos/7262995/pexels-photo-7262995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      imageAltText: "Tigela com argila verde",
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
        mainIngredientImage: "https://images.pexels.com/photos/4046656/pexels-photo-4046656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        imageAltText: "Pedaços de Manteiga de Karité",
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
        mainIngredientImage: "https://images.pexels.com/photos/1616098/pexels-photo-1616098.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        imageAltText: "Folhas de Múcua (Baobab)",
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
        mainIngredientImage: "https://images.pexels.com/photos/264907/pexels-photo-264907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        imageAltText: "Folha de Babosa (Aloe Vera)",
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
        mainIngredientImage: "https://images.pexels.com/photos/6621404/pexels-photo-6621404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        imageAltText: "Flores secas de Camomila",
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
    <div className="min-h-screen bg-ebook-bg font-sans antialiased text-ebook-text">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 space-y-12">
        
        <div 
            className="h-[80vh] md:h-screen flex flex-col justify-center items-center text-center p-6 rounded-lg shadow-2xl relative overflow-hidden"
            style={{ backgroundImage: "url('https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')", backgroundSize: 'cover', backgroundPosition: 'center top' }}
        >
            <div className="absolute inset-0 bg-black/60"></div>
            <div className="relative z-10">
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-4 leading-tight font-serif">O Fim do Espelho Mentiroso</h1>
                <p className="text-xl sm:text-2xl md:text-3xl text-gray-200 font-sans max-w-2xl mx-auto">O Guia Rápido Angolano Para Descobrir Seu Verdadeiro Tipo de Pele em 5 Minutos e Parar de Gastar Dinheiro com Produtos que Não Funcionam.</p>
            </div>
        </div>

        <Section>
          <h3 className="text-3xl font-semibold text-ebook-text mb-6 font-serif">Conheça-me: A Minha Luta com o Espelho</h3>
          <Paragraph>Querida futura Guerreira da Pele Radiante,</Paragraph>
          <Paragraph>Antes de te entregar os segredos que prometi, preciso confessar algo que talvez te surpreenda.</Paragraph>
          
          <div className="md:flex md:items-start md:space-x-6 my-8">
            <img src="https://images.pexels.com/photos/1848565/pexels-photo-1848565.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Close-up do rosto da Michelle" className="w-full md:w-1/3 h-auto object-cover rounded-lg shadow-lg mb-4 md:mb-0 float-right md:float-none ml-4 md:ml-0" />
            <div className="md:w-2/3">
              <Paragraph>Eu já odiei espelhos.</Paragraph>
              <Paragraph>Deixa eu te perguntar uma coisa, mana... O teu espelho também mente pra ti?</Paragraph>
              <Paragraph>Sabe como é. Você acorda de manhã, se sente bem, talvez até otimista. Mas aí você vai à casa de banho, 
