import React, { useState } from 'react';
import { Modal } from '../../../../front-end - Copia/src/components/ui/Modal';
import { Button } from '../../../../front-end - Copia/src/components/ui/Button';
import { Pill } from '../../../../front-end - Copia/src/components/ui/Pill';
import { MapPinIcon, BriefcaseIcon, GraduationCapIcon, CodeIcon, HeartIcon, MessageCircleIcon, ThumbsUpIcon, CheckCircleIcon } from 'lucide-react';
interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: {
    id: string;
    name: string;
    role: string;
    photo: string;
    city: string;
    summary: string;
    about: string;
    education: Array<{
      degree: string;
      institution: string;
      year: string;
    }>;
    experience: Array<{
      title: string;
      company: string;
      period: string;
      description: string;
    }>;
    technicalSkills: string[];
    softSkills: string[];
  };
}
export function ProfileModal({
  isOpen,
  onClose,
  profile
}: ProfileModalProps) {
  const [activeTab, setActiveTab] = useState<'about' | 'experience' | 'skills'>('about');
  const [showRecommendSuccess, setShowRecommendSuccess] = useState(false);
  const handleRecommend = () => {
    setShowRecommendSuccess(true);
    setTimeout(() => {
      setShowRecommendSuccess(false);
    }, 3000);
  };
  return <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <div className="p-6">
        <div className="flex flex-col md:flex-row gap-6 mb-6">
          <img src={profile.photo} alt={profile.name} className="w-32 h-32 rounded-full object-cover border-4 border-gray-100 dark:border-gray-700 mx-auto md:mx-0" />

          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              {profile.name}
            </h2>

            <div className="flex items-center justify-center md:justify-start text-gray-600 dark:text-gray-400 mb-2">
              <BriefcaseIcon className="w-5 h-5 mr-2" />
              <span className="text-lg">{profile.role}</span>
            </div>

            <div className="flex items-center justify-center md:justify-start text-gray-500 dark:text-gray-500 mb-4">
              <MapPinIcon className="w-4 h-4 mr-1" />
              <span>{profile.city}</span>
            </div>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {profile.summary}
            </p>
          </div>
        </div>

        <div className="border-b border-gray-200 dark:border-gray-700 mb-6">
          <nav className="flex space-x-8">
            <button onClick={() => setActiveTab('about')} className={`pb-4 px-1 border-b-2 font-medium text-sm transition-colors ${activeTab === 'about' ? 'border-blue-500 text-blue-600 dark:text-blue-400' : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'}`}>
              Sobre
            </button>
            <button onClick={() => setActiveTab('experience')} className={`pb-4 px-1 border-b-2 font-medium text-sm transition-colors ${activeTab === 'experience' ? 'border-blue-500 text-blue-600 dark:text-blue-400' : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'}`}>
              Experiência
            </button>
            <button onClick={() => setActiveTab('skills')} className={`pb-4 px-1 border-b-2 font-medium text-sm transition-colors ${activeTab === 'skills' ? 'border-blue-500 text-blue-600 dark:text-blue-400' : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'}`}>
              Habilidades
            </button>
          </nav>
        </div>

        <div className="min-h-[300px]">
          {activeTab === 'about' && <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
                  Sobre Mim
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {profile.about}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center">
                  <GraduationCapIcon className="w-5 h-5 mr-2" />
                  Formação Acadêmica
                </h3>
                <div className="space-y-3">
                  {profile.education.map((edu, index) => <div key={index} className="border-l-2 border-blue-500 pl-4">
                      <h4 className="font-medium text-gray-900 dark:text-gray-100">
                        {edu.degree}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {edu.institution} • {edu.year}
                      </p>
                    </div>)}
                </div>
              </div>
            </div>}

          {activeTab === 'experience' && <div className="space-y-6">
              {profile.experience.map((exp, index) => <div key={index} className="border-l-2 border-blue-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    {exp.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    {exp.company} • {exp.period}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {exp.description}
                  </p>
                </div>)}
            </div>}

          {activeTab === 'skills' && <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center">
                  <CodeIcon className="w-5 h-5 mr-2" />
                  Habilidades Técnicas
                </h3>
                <div className="flex flex-wrap gap-2">
                  {profile.technicalSkills.map((skill, index) => <Pill key={index} variant="primary">
                      {skill}
                    </Pill>)}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center">
                  <HeartIcon className="w-5 h-5 mr-2" />
                  Soft Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {profile.softSkills.map((skill, index) => <Pill key={index} variant="success">
                      {skill}
                    </Pill>)}
                </div>
              </div>
            </div>}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
          <Button variant="primary" className="flex-1">
            <MessageCircleIcon className="w-4 h-4 mr-2" />
            Enviar Mensagem
          </Button>
          <Button variant="secondary" className="flex-1" onClick={handleRecommend}>
            <ThumbsUpIcon className="w-4 h-4 mr-2" />
            Recomendar Profissional
          </Button>
        </div>
      </div>

      {showRecommendSuccess && <div className="fixed inset-0 z-[60] flex items-center justify-center pointer-events-none">
          <div className="animate-[fadeIn_0.3s_ease-in-out] bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 max-w-sm mx-4 pointer-events-auto border-2 border-green-500">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4 animate-[scaleIn_0.5s_ease-out]">
                <CheckCircleIcon className="w-12 h-12 text-green-600 dark:text-green-400 animate-[checkmark_0.6s_ease-out]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                Recomendação Enviada!
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Você recomendou{' '}
                <span className="font-semibold text-gray-900 dark:text-gray-100">
                  {profile.name}
                </span>{' '}
                com sucesso
              </p>
            </div>
          </div>
        </div>}
    </Modal>;
}