import React, { useCallback, useMemo, useState, useReducer, Suspense, lazy, memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/layout/Header';
import { ReviewColumn } from '../components/reviews/ReviewColumn';
const mockReviews = [{
  id: '1',
  question: 'Como estruturar um bom portfólio em React?',
  askedBy: 'João Silva',
  askedByPhoto: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100',
  date: '2 horas atrás',
  status: 'pending' as const,
  aiResponse: 'Para estruturar um bom portfólio em React, considere os seguintes pontos:\n\n1. **Organize seus projetos**: Crie uma seção dedicada para mostrar seus melhores trabalhos. Cada projeto deve ter uma descrição clara, tecnologias utilizadas e links para o código e demo.\n\n2. **Design responsivo**: Certifique-se de que seu portfólio funciona bem em todos os dispositivos. Use Tailwind CSS ou styled-components para facilitar.\n\n3. **Performance**: Otimize imagens, use lazy loading e minimize o bundle size. Ferramentas como Lighthouse podem ajudar.\n\n4. **Sobre você**: Inclua uma seção "Sobre" com sua história, habilidades e formas de contato.\n\n5. **Call to Action**: Adicione botões claros para que visitantes possam entrar em contato ou baixar seu currículo.\n\n6. **SEO**: Use meta tags apropriadas e estruture seu HTML semanticamente para melhor indexação.'
}, {
  id: '2',
  question: 'Quais são as melhores práticas para gerenciamento de estado em React?',
  askedBy: 'Maria Santos',
  askedByPhoto: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100',
  date: '5 horas atrás',
  status: 'pending' as const,
  aiResponse: 'O gerenciamento de estado em React depende da complexidade da sua aplicação:\n\n1. **useState e useReducer**: Para estado local simples, use useState. Para lógica mais complexa, useReducer é mais apropriado.\n\n2. **Context API**: Ideal para compartilhar estado entre componentes sem prop drilling. Use com moderação para evitar re-renders desnecessários.\n\n3. **Redux/Zustand**: Para aplicações grandes com estado global complexo. Redux oferece mais estrutura, enquanto Zustand é mais simples.\n\n4. **React Query/SWR**: Especializados em gerenciar estado de servidor (cache, sincronização, refetch).\n\n5. **Princípios gerais**:\n   - Mantenha o estado o mais próximo possível de onde é usado\n   - Evite duplicação de estado\n   - Normalize dados complexos\n   - Use memoização (useMemo, useCallback) quando apropriado'
}, {
  id: '3',
  question: 'Como melhorar a performance de uma aplicação React?',
  askedBy: 'Pedro Costa',
  askedByPhoto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100',
  date: '1 dia atrás',
  status: 'pending' as const,
  aiResponse: 'Aqui estão estratégias comprovadas para melhorar a performance em React:\n\n1. **Code Splitting**: Use lazy() e Suspense para carregar componentes sob demanda.\n\n2. **Memoização**:\n   - memo para componentes\n   - useMemo para cálculos custosos\n   - useCallback para funções passadas como props\n\n3. **Virtualização**: Para listas longas, use bibliotecas como react-window ou react-virtualized.\n\n4. **Otimização de imagens**: Use formatos modernos (WebP), lazy loading e dimensionamento adequado.\n\n5. **Bundle optimization**: Analise com webpack-bundle-analyzer e remova dependências não utilizadas.\n\n6. **Evite re-renders**: Use React DevTools Profiler para identificar componentes que re-renderizam desnecessariamente.'
}, {
  id: '4',
  question: 'Qual a diferença entre TypeScript e JavaScript?',
  askedBy: 'Ana Oliveira',
  askedByPhoto: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100',
  date: '3 dias atrás',
  status: 'approved' as const,
  aiResponse: 'TypeScript é um superset de JavaScript que adiciona tipagem estática opcional. Principais diferenças:\n\n1. **Tipagem**: TypeScript permite definir tipos para variáveis, parâmetros e retornos de função, enquanto JavaScript é dinamicamente tipado.\n\n2. **Detecção de erros**: TypeScript identifica erros em tempo de desenvolvimento, antes da execução.\n\n3. **Tooling**: Melhor autocomplete, refatoração e navegação de código em IDEs.\n\n4. **Compilação**: TypeScript precisa ser transpilado para JavaScript.\n\n5. **Curva de aprendizado**: TypeScript requer conhecimento adicional de tipos e interfaces.\n\nPara projetos grandes, TypeScript oferece mais segurança e manutenibilidade.'
}, {
  id: '5',
  question: 'Como implementar autenticação JWT em Node.js?',
  askedBy: 'Carlos Lima',
  askedByPhoto: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100',
  date: '1 semana atrás',
  status: 'approved' as const,
  aiResponse: 'Implementação básica de JWT em Node.js:\n\n1. Instale as dependências: `npm install jsonwebtoken bcrypt`\n\n2. **Registro de usuário**: Hash a senha com bcrypt antes de salvar.\n\n3. **Login**: Verifique credenciais e gere um token JWT com informações do usuário.\n\n4. **Middleware de autenticação**: Verifique o token em rotas protegidas.\n\n5. **Boas práticas**:\n   - Use variáveis de ambiente para secrets\n   - Defina tempo de expiração apropriado\n   - Implemente refresh tokens para sessões longas\n   - Armazene tokens de forma segura no cliente (httpOnly cookies)\n\nNunca armazene informações sensíveis no payload do JWT.'
}];
export function ReviewDashboard() {
  const navigate = useNavigate();
  const pendingReviews = mockReviews.filter(r => r.status === 'pending');
  const completedReviews = mockReviews.filter(r => r.status !== 'pending');
  const handleReviewClick = (review: (typeof mockReviews)[0]) => {
    navigate(`/review/${review.id}`, {
      state: {
        review
      }
    });
  };
  return <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
            Minhas Revisões
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Revise e aprove respostas geradas pela IA para mentorias
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          <ReviewColumn title="Pendentes de Revisão" reviews={pendingReviews} onReviewClick={handleReviewClick} emptyMessage="Nenhuma revisão pendente no momento" />

          <ReviewColumn title="Concluídas" reviews={completedReviews} onReviewClick={handleReviewClick} emptyMessage="Nenhuma revisão concluída ainda" />
        </div>
      </main>
    </div>;
}