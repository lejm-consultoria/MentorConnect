import React from 'react';
import { SearchIcon, FilterIcon, XIcon } from 'lucide-react';
import { Select } from '../ui/Select';
import { Button } from '../ui/Button';
interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  areaFilter: string;
  onAreaChange: (area: string) => void;
  cityFilter: string;
  onCityChange: (city: string) => void;
  techFilter: string;
  onTechChange: (tech: string) => void;
  showFilters: boolean;
  onToggleFilters: () => void;
  onClearFilters: () => void;
}
export function SearchBar({
  searchQuery,
  onSearchChange,
  areaFilter,
  onAreaChange,
  cityFilter,
  onCityChange,
  techFilter,
  onTechChange,
  showFilters,
  onToggleFilters,
  onClearFilters
}: SearchBarProps) {
  const areaOptions = [{
    value: 'all',
    label: 'Todas as Áreas'
  }, {
    value: 'tech',
    label: 'Tecnologia'
  }, {
    value: 'design',
    label: 'Design'
  }, {
    value: 'business',
    label: 'Negócios'
  }, {
    value: 'marketing',
    label: 'Marketing'
  }];
  const cityOptions = [{
    value: 'all',
    label: 'Todas as Cidades'
  }, {
    value: 'sp',
    label: 'São Paulo'
  }, {
    value: 'rj',
    label: 'Rio de Janeiro'
  }, {
    value: 'bh',
    label: 'Belo Horizonte'
  }, {
    value: 'curitiba',
    label: 'Curitiba'
  }, {
    value: 'poa',
    label: 'Porto Alegre'
  }, {
    value: 'remote',
    label: 'Remoto'
  }];
  const techOptions = [{
    value: 'all',
    label: 'Todas as Tecnologias'
  }, {
    value: 'react',
    label: 'React'
  }, {
    value: 'node',
    label: 'Node.js'
  }, {
    value: 'python',
    label: 'Python'
  }, {
    value: 'typescript',
    label: 'TypeScript'
  }, {
    value: 'javascript',
    label: 'JavaScript'
  }];
  const hasActiveFilters = areaFilter !== 'all' || cityFilter !== 'all' || techFilter !== 'all' || searchQuery !== '';
  return <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 relative">
              <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input type="text" value={searchQuery} onChange={e => onSearchChange(e.target.value)} placeholder="Buscar profissionais por nome, cargo ou habilidade..." className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100" />
            </div>
            <div className="flex gap-2">
              <Button variant="secondary" onClick={onToggleFilters} className="sm:w-auto">
                <FilterIcon className="w-4 h-4 mr-2" />
                Filtros
              </Button>
              {hasActiveFilters && <Button variant="tertiary" onClick={onClearFilters} className="sm:w-auto">
                  <XIcon className="w-4 h-4 mr-2" />
                  Limpar
                </Button>}
            </div>
          </div>

          {showFilters && <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <Select options={areaOptions} value={areaFilter} onChange={e => onAreaChange(e.target.value)} />
              <Select options={cityOptions} value={cityFilter} onChange={e => onCityChange(e.target.value)} />
              <Select options={techOptions} value={techFilter} onChange={e => onTechChange(e.target.value)} />
            </div>}
        </div>
      </div>
    </div>;
}