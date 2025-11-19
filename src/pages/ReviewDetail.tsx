import React, { useState } from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { Header } from '../components/layout/Header';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { TextArea } from '../components/ui/TextArea';
import { ArrowLeftIcon, CheckCircleIcon, XCircleIcon, AlertTriangleIcon, SparklesIcon } from 'lucide-react';
export function ReviewDetail() {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    id
  } = useParams();
  const review = location.state?.review;
  const [aiResponse, setAiResponse] = useState(review?.aiResponse || '');
  const [showApproveSuccess, setShowApproveSuccess] = useState(false);
  const [showRejectConfirm, setShowRejectConfirm] = useState(false);
  const [showRejectSuccess, setShowRejectSuccess] = useState(false);
  if (!review) {
    return <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Header />
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-gray-600 dark:text-gray-400">
            Revisão não encontrada
          </p>
        </main>
      </div>;
  }
  const handleApprove = () => {
    setShowApproveSuccess(true);
    setTimeout(() => {
      navigate('/reviews');
    }, 2500);
  };
  const handleReject = () => {
    setShowRejectConfirm(true);
  };
  const confirmReject = () => {
    setShowRejectConfirm(false);
    setShowRejectSuccess(true);
    setTimeout(() => {
      navigate('/reviews');
    }, 2500);
  };
  const cancelReject = () => {
    setShowRejectConfirm(false);
  };
  return <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button onClick={() => navigate('/reviews')} className="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 mb-6 transition-colors">
          <ArrowLeftIcon className="w-4 h-4 mr-2" />
          Voltar para Revisões
        </button>

        <div className="space-y-6">
          <Card>
            <div className="p-6">
              <div className="flex items-start space-x-4">
                <img src={review.askedByPhoto} alt={review.askedBy} className="w-12 h-12 rounded-full" />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Pergunta enviada por
                      </p>
                      <p className="font-semibold text-gray-900 dark:text-gray-100">
                        {review.askedBy}
                      </p>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {review.date}
                    </span>
                  </div>
                  <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <p className="text-gray-900 dark:text-gray-100 text-lg leading-relaxed">
                      {review.question}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card>
            <div className="p-6">
              <div className="flex items-center space-x-2 mb-4">
                <SparklesIcon className="w-5 h-5 text-blue-500" />
                <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                  Resposta Sugerida pela IA
                </h2>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Revise e edite a resposta abaixo antes de aprovar. Você pode
                modificar o texto diretamente.
              </p>
              <TextArea value={aiResponse} onChange={e => setAiResponse(e.target.value)} rows={15} className="font-mono text-sm" placeholder="Resposta gerada pela IA..." />
            </div>
          </Card>

          <Card>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                Ações de Validação
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
                Aprove para enviar a resposta ao usuário ou rejeite para
                descartar a sugestão da IA.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="primary" size="lg" onClick={handleApprove} className="flex-1">
                  <CheckCircleIcon className="w-5 h-5 mr-2" />
                  Aprovar e Enviar
                </Button>
                <Button variant="danger" size="lg" onClick={handleReject} className="flex-1">
                  <XCircleIcon className="w-5 h-5 mr-2" />
                  Rejeitar
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </main>

      {/* Approve Success Animation */}
      {showApproveSuccess && <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="animate-[fadeIn_0.3s_ease-in-out] bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 max-w-sm mx-4 border-2 border-green-500">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4 animate-[scaleIn_0.5s_ease-out]">
                <CheckCircleIcon className="w-12 h-12 text-green-600 dark:text-green-400 animate-[checkmark_0.6s_ease-out]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                Resposta Aprovada!
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                A resposta foi enviada para{' '}
                <span className="font-semibold text-gray-900 dark:text-gray-100">
                  {review.askedBy}
                </span>
              </p>
            </div>
          </div>
        </div>}

      {/* Reject Confirmation Dialog */}
      {showRejectConfirm && <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="animate-[fadeIn_0.3s_ease-in-out] bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 max-w-md mx-4 border-2 border-red-500">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mb-4">
                <AlertTriangleIcon className="w-12 h-12 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                Rejeitar Resposta?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Tem certeza que deseja rejeitar esta resposta? A sugestão da IA
                será descartada e você precisará criar uma nova resposta.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 w-full">
                <Button variant="secondary" onClick={cancelReject} className="flex-1">
                  Cancelar
                </Button>
                <Button variant="danger" onClick={confirmReject} className="flex-1">
                  Sim, Rejeitar
                </Button>
              </div>
            </div>
          </div>
        </div>}

      {/* Reject Success Animation */}
      {showRejectSuccess && <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="animate-[fadeIn_0.3s_ease-in-out] bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 max-w-sm mx-4 border-2 border-red-500">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mb-4 animate-[scaleIn_0.5s_ease-out]">
                <XCircleIcon className="w-12 h-12 text-red-600 dark:text-red-400 animate-[checkmark_0.6s_ease-out]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                Resposta Rejeitada
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                A sugestão da IA foi descartada com sucesso
              </p>
            </div>
          </div>
        </div>}
    </div>;
}