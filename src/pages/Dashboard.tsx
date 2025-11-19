import React, { useMemo, useState } from 'react';
import { Header } from '../components/layout/Header';
import { SearchBar } from '../components/layout/SearchBar';
import { ProfileGrid } from '../components/profiles/ProfileGrid';
import { ProfileModal } from '../components/profiles/ProfileModal';
const mockProfiles = [{
  id: '1',
  name: 'Ana Silva',
  role: 'Senior Frontend Developer',
  photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
  city: 'São Paulo, SP',
  area: 'tech',
  topSkills: ['React', 'TypeScript', 'Tailwind CSS'],
  summary: 'Desenvolvedora frontend apaixonada por criar experiências de usuário excepcionais.',
  about: 'Com mais de 8 anos de experiência em desenvolvimento web, especializo-me em criar interfaces modernas e acessíveis. Apaixonada por compartilhar conhecimento e mentorar desenvolvedores juniores.',
  education: [{
    degree: 'Bacharelado em Ciência da Computação',
    institution: 'USP',
    year: '2015'
  }, {
    degree: 'MBA em Gestão de Projetos',
    institution: 'FGV',
    year: '2019'
  }],
  experience: [{
    title: 'Senior Frontend Developer',
    company: 'Tech Corp',
    period: '2020 - Presente',
    description: 'Liderança técnica de equipe de 5 desenvolvedores, implementação de design system e arquitetura de aplicações React.'
  }, {
    title: 'Frontend Developer',
    company: 'StartupXYZ',
    period: '2017 - 2020',
    description: 'Desenvolvimento de SPAs com React, integração com APIs REST, e otimização de performance.'
  }],
  technicalSkills: ['React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Next.js', 'GraphQL', 'Jest', 'Git'],
  softSkills: ['Liderança', 'Comunicação', 'Mentoria', 'Trabalho em Equipe', 'Resolução de Problemas']
}, {
  id: '2',
  name: 'Carlos Mendes',
  role: 'Full Stack Developer',
  photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
  city: 'Rio de Janeiro, RJ',
  area: 'tech',
  topSkills: ['Node.js', 'React', 'MongoDB'],
  summary: 'Desenvolvedor full stack com foco em soluções escaláveis e arquitetura de sistemas.',
  about: 'Desenvolvedor full stack com 6 anos de experiência construindo aplicações web robustas e escaláveis. Especialista em Node.js e React, com forte conhecimento em arquitetura de microsserviços.',
  education: [{
    degree: 'Engenharia de Software',
    institution: 'UFRJ',
    year: '2017'
  }],
  experience: [{
    title: 'Full Stack Developer',
    company: 'Digital Solutions',
    period: '2019 - Presente',
    description: 'Desenvolvimento de APIs RESTful, implementação de microsserviços e criação de interfaces responsivas.'
  }],
  technicalSkills: ['Node.js', 'React', 'MongoDB', 'PostgreSQL', 'Docker', 'AWS', 'Redis', 'JavaScript'],
  softSkills: ['Proatividade', 'Adaptabilidade', 'Pensamento Crítico', 'Colaboração']
}, {
  id: '3',
  name: 'Mariana Costa',
  role: 'UX/UI Designer',
  photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
  city: 'Belo Horizonte, MG',
  area: 'design',
  topSkills: ['Figma', 'Design Systems', 'User Research'],
  summary: 'Designer focada em criar experiências centradas no usuário com base em pesquisa e dados.',
  about: 'Designer UX/UI com 5 anos de experiência criando produtos digitais que resolvem problemas reais dos usuários. Especialista em design systems e metodologias ágeis.',
  education: [{
    degree: 'Design Gráfico',
    institution: 'UFMG',
    year: '2018'
  }],
  experience: [{
    title: 'Senior UX/UI Designer',
    company: 'Design Studio',
    period: '2021 - Presente',
    description: 'Liderança de projetos de design, condução de pesquisas com usuários e criação de design systems.'
  }],
  technicalSkills: ['Figma', 'Adobe XD', 'Sketch', 'Prototyping', 'User Testing', 'Design Systems'],
  softSkills: ['Empatia', 'Criatividade', 'Comunicação Visual', 'Pensamento Estratégico']
}, {
  id: '4',
  name: 'Pedro Santos',
  role: 'Backend Developer',
  photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
  city: 'São Paulo, SP',
  area: 'tech',
  topSkills: ['Python', 'Django', 'PostgreSQL'],
  summary: 'Desenvolvedor backend especializado em Python e arquitetura de sistemas distribuídos.',
  about: 'Desenvolvedor backend com 7 anos de experiência em Python e Django. Apaixonado por performance, segurança e boas práticas de desenvolvimento.',
  education: [{
    degree: 'Ciência da Computação',
    institution: 'UNICAMP',
    year: '2016'
  }],
  experience: [{
    title: 'Senior Backend Developer',
    company: 'FinTech Inc',
    period: '2020 - Presente',
    description: 'Desenvolvimento de APIs de alta performance, implementação de sistemas de pagamento e otimização de queries.'
  }],
  technicalSkills: ['Python', 'Django', 'PostgreSQL', 'Redis', 'Celery', 'Docker', 'Kubernetes'],
  softSkills: ['Atenção aos Detalhes', 'Organização', 'Documentação', 'Mentoría']
}, {
  id: '5',
  name: 'Julia Oliveira',
  role: 'Product Manager',
  photo: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400',
  city: 'Remoto',
  area: 'business',
  topSkills: ['Product Strategy', 'Agile', 'Data Analysis'],
  summary: 'Product Manager com experiência em produtos B2B e B2C, focada em crescimento e métricas.',
  about: 'Product Manager com 6 anos de experiência liderando produtos digitais do conceito ao lançamento. Especialista em metodologias ágeis e análise de dados.',
  education: [{
    degree: 'Administração de Empresas',
    institution: 'FGV',
    year: '2017'
  }],
  experience: [{
    title: 'Senior Product Manager',
    company: 'SaaS Company',
    period: '2021 - Presente',
    description: 'Gestão de roadmap de produto, definição de OKRs e liderança de squads multidisciplinares.'
  }],
  technicalSkills: ['Product Strategy', 'Agile/Scrum', 'SQL', 'Analytics', 'A/B Testing', 'Roadmapping'],
  softSkills: ['Liderança', 'Visão Estratégica', 'Negociação', 'Stakeholder Management']
}, {
  id: '6',
  name: 'Rafael Lima',
  role: 'DevOps Engineer',
  photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400',
  city: 'Curitiba, PR',
  area: 'tech',
  topSkills: ['AWS', 'Kubernetes', 'Terraform'],
  summary: 'Engenheiro DevOps especializado em infraestrutura cloud e automação de processos.',
  about: 'Engenheiro DevOps com 5 anos de experiência em AWS e Kubernetes. Focado em criar infraestruturas resilientes e automatizar processos de deploy.',
  education: [{
    degree: 'Engenharia de Computação',
    institution: 'UFPR',
    year: '2018'
  }],
  experience: [{
    title: 'DevOps Engineer',
    company: 'Cloud Services',
    period: '2019 - Presente',
    description: 'Implementação de CI/CD pipelines, gerenciamento de infraestrutura cloud e monitoramento de sistemas.'
  }],
  technicalSkills: ['AWS', 'Kubernetes', 'Docker', 'Terraform', 'Jenkins', 'Prometheus', 'Grafana'],
  softSkills: ['Resolução de Problemas', 'Automação', 'Documentação', 'Colaboração']
}, {
  id: '7',
  name: 'Beatriz Ferreira',
  role: 'Data Scientist',
  photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400',
  city: 'São Paulo, SP',
  area: 'tech',
  topSkills: ['Python', 'Machine Learning', 'TensorFlow'],
  summary: 'Cientista de dados especializada em machine learning e análise preditiva.',
  about: 'Cientista de dados com 4 anos de experiência desenvolvendo modelos de machine learning e análises preditivas. Apaixonada por transformar dados em insights acionáveis.',
  education: [{
    degree: 'Estatística',
    institution: 'IME-USP',
    year: '2019'
  }, {
    degree: 'Mestrado em Data Science',
    institution: 'USP',
    year: '2021'
  }],
  experience: [{
    title: 'Data Scientist',
    company: 'AI Solutions',
    period: '2021 - Presente',
    description: 'Desenvolvimento de modelos preditivos, análise exploratória de dados e implementação de pipelines de ML.'
  }],
  technicalSkills: ['Python', 'TensorFlow', 'Scikit-learn', 'Pandas', 'SQL', 'Jupyter', 'MLflow'],
  softSkills: ['Pensamento Analítico', 'Curiosidade', 'Comunicação de Dados', 'Colaboração']
}, {
  id: '8',
  name: 'Lucas Rodrigues',
  role: 'Mobile Developer',
  photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
  city: 'Porto Alegre, RS',
  area: 'tech',
  topSkills: ['React Native', 'iOS', 'Android'],
  summary: 'Desenvolvedor mobile especializado em React Native e aplicações nativas.',
  about: 'Desenvolvedor mobile com 5 anos de experiência criando aplicativos para iOS e Android. Especialista em React Native e performance de aplicações móveis.',
  education: [{
    degree: 'Sistemas de Informação',
    institution: 'PUCRS',
    year: '2018'
  }],
  experience: [{
    title: 'Senior Mobile Developer',
    company: 'Mobile Apps Co',
    period: '2020 - Presente',
    description: 'Desenvolvimento de aplicativos React Native, otimização de performance e implementação de features nativas.'
  }],
  technicalSkills: ['React Native', 'Swift', 'Kotlin', 'Redux', 'Firebase', 'App Store', 'Play Store', 'TypeScript', 'JavaScript'],
  softSkills: ['Atenção aos Detalhes', 'UX Mobile', 'Testes', 'Otimização']
}];
export function Dashboard() {
  const [selectedProfile, setSelectedProfile] = useState<(typeof mockProfiles)[0] | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [areaFilter, setAreaFilter] = useState('all');
  const [cityFilter, setCityFilter] = useState('all');
  const [techFilter, setTechFilter] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const filteredProfiles = useMemo(() => {
    return mockProfiles.filter(profile => {
      // Search filter
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch = searchQuery === '' || profile.name.toLowerCase().includes(searchLower) || profile.role.toLowerCase().includes(searchLower) || profile.topSkills.some(skill => skill.toLowerCase().includes(searchLower)) || profile.technicalSkills.some(skill => skill.toLowerCase().includes(searchLower));
      // Area filter
      const matchesArea = areaFilter === 'all' || profile.area === areaFilter;
      // City filter
      const cityMap: {
        [key: string]: string[];
      } = {
        sp: ['São Paulo'],
        rj: ['Rio de Janeiro'],
        bh: ['Belo Horizonte'],
        curitiba: ['Curitiba'],
        poa: ['Porto Alegre'],
        remote: ['Remoto']
      };
      const matchesCity = cityFilter === 'all' || cityMap[cityFilter] && cityMap[cityFilter].some(city => profile.city.includes(city));
      // Tech filter
      const matchesTech = techFilter === 'all' || profile.topSkills.some(skill => skill.toLowerCase().includes(techFilter.toLowerCase())) || profile.technicalSkills.some(skill => skill.toLowerCase().includes(techFilter.toLowerCase()));
      return matchesSearch && matchesArea && matchesCity && matchesTech;
    });
  }, [searchQuery, areaFilter, cityFilter, techFilter]);
  const handleClearFilters = () => {
    setSearchQuery('');
    setAreaFilter('all');
    setCityFilter('all');
    setTechFilter('all');
  };
  return <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <SearchBar searchQuery={searchQuery} onSearchChange={setSearchQuery} areaFilter={areaFilter} onAreaChange={setAreaFilter} cityFilter={cityFilter} onCityChange={setCityFilter} techFilter={techFilter} onTechChange={setTechFilter} showFilters={showFilters} onToggleFilters={() => setShowFilters(!showFilters)} onClearFilters={handleClearFilters} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
            Descobrir Profissionais
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            {filteredProfiles.length === mockProfiles.length ? `${filteredProfiles.length} profissionais disponíveis` : `${filteredProfiles.length} de ${mockProfiles.length} profissionais encontrados`}
          </p>
        </div>

        {filteredProfiles.length === 0 ? <div className="text-center py-12">
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-2">
              Nenhum profissional encontrado
            </p>
            <p className="text-gray-500 dark:text-gray-500 mb-4">
              Tente ajustar seus filtros de busca
            </p>
            <button onClick={handleClearFilters} className="text-blue-600 dark:text-blue-400 hover:underline">
              Limpar todos os filtros
            </button>
          </div> : <ProfileGrid profiles={filteredProfiles} onProfileClick={setSelectedProfile} />}
      </main>

      {selectedProfile && <ProfileModal isOpen={!!selectedProfile} onClose={() => setSelectedProfile(null)} profile={selectedProfile} />}
    </div>;
}