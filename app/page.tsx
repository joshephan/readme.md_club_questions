'use client';

import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';

const bookQuestions = [
  "📝 이 책에서 가장 인상 깊었던 문장은?",
  "📚 읽으면서 떠오른 다른 책이나 경험이 있다면?",
  "🤔 저자의 주장 중 동의하기 어려웠던 부분은?",
  "✍️ 이 책을 한 문장으로 요약한다면?",
  "👨‍💻 만약 내가 저자라면 어떤 내용을 추가하거나 뺐을까?",
  "💼 실무에 바로 써먹을 수 있는 부분이 있었을까?",
  "👥 이 책을 추천하고 싶은 개발자 유형은?",
  "🛠️ 이 기술/패턴을 현재 업무에 어떻게 적용할 수 있을까?",
  "⚡ 저자가 제안하는 방식이 실무에서 잘 통할까?",
  "🔍 이 주제에 대해 다른 관점(예: 실제 현업 경험, 오픈소스 사례 등)이 있다면?",
  "🎯 이 기술을 접하면서 생긴 시행착오나 에피소드가 있다면?",
  "📖 비슷한 내용을 다룬 좋은 블로그나 강의가 있다면 소개?"
];

const selfIntroductionQuestions = [
  "👋 자기소개를 해주세요",
  "💻 어떤 개발자이고 싶으신가요?",
  "🚀 앞으로의 목표나 계획이 있다면?",
  "🎯 가장 자신있는 기술 스택은?",
  "📚 최근에 읽은 책 중 인상 깊었던 책은?",
  "🌟 개발자로서 가장 기억에 남는 순간은?",
  "💡 개발하면서 가장 중요하게 생각하는 가치는?",
  "🎨 개발 외에 관심있는 분야가 있나요?",
  "🤝 협업할 때 중요하게 생각하는 것은?",
  "📈 앞으로 배우고 싶은 기술이나 분야는?",
  "🎮 개발 외에 즐기는 취미가 있다면?",
  "💪 가장 자신있는 프로젝트나 경험은?"
];

const etcQuestions = [
  "🍔 가장 좋아하는 맛집을 한 곳 추천해주세요!",
  "🎮 최근에 즐기고 있는 게임이 있다면?", // 롤토체스
  "🎵 개발할 때 듣는 플레이리스트가 있다면?",
  "☕ 가장 좋아하는 카페는 어디인가요?", // 이태원: 맥심 플랜트
  "🏃‍♂️ 개발 외에 즐기는 운동이 있다면?",
  "🎬 최근에 본 영화 중 인상 깊었던 작품은?",
  "🌍 여행하고 싶은 나라가 있다면?", // 아이슬란드 + 스코틀랜드
  "🎸 개발 외에 배우고 싶은 취미가 있다면?",
  "🍳 요리할 때 가장 자신있는 메뉴는?", // 김치 볶음밥 + 고로케
  "📺 최근에 본 드라마 중 추천하고 싶은 작품은?",
  "🎨 개발 외에 창작 활동을 한다면?",
  "🏠 가장 좋아하는 휴식 방법은?"
];

export default function Home() {
  const [selectedQuestion, setSelectedQuestion] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<'book' | 'self' | 'etc'>('book');
  const [showAllQuestions, setShowAllQuestions] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const [hoveredQuestion, setHoveredQuestion] = useState<{ index: number; question: string } | null>(null);
  const hoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (showAllQuestions && modalRef.current) {
      gsap.fromTo(
        modalRef.current,
        { y: '100%', opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' }
      );
    }
  }, [showAllQuestions]);

  const handleCloseModal = () => {
    if (modalRef.current) {
      gsap.to(modalRef.current, {
        y: '100%',
        opacity: 0,
        duration: 0.3,
        ease: 'power2.in',
        onComplete: () => setShowAllQuestions(false)
      });
    } else {
      setShowAllQuestions(false);
    }
  };

  const getRandomQuestion = () => {
    setIsLoading(true);
    const questions = 
      activeTab === 'book' ? bookQuestions : 
      activeTab === 'self' ? selfIntroductionQuestions : 
      etcQuestions;
    const randomIndex = Math.floor(Math.random() * questions.length);
    setSelectedQuestion(questions[randomIndex]);
    setIsLoading(false);
  };

  const handleQuestionHover = (index: number, question: string) => {
    if (hoverRef.current) {
      gsap.killTweensOf(hoverRef.current);
      setHoveredQuestion({ index, question });
      gsap.fromTo(
        hoverRef.current,
        { scale: 1, opacity: 0 },
        { scale: 1.1, opacity: 1, duration: 0.3, ease: 'power2.out' }
      );
    }
  };

  const handleQuestionLeave = () => {
    if (hoverRef.current) {
      gsap.to(hoverRef.current, {
        scale: 1,
        opacity: 0,
        duration: 0.2,
        ease: 'power2.in',
        onComplete: () => setHoveredQuestion(null)
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 flex flex-col items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-4xl font-bold mb-8 text-center text-indigo-800">README.MD 개발자 모임</h1>
        
        <div className="flex flex-col items-center gap-8">
          <div className="flex gap-4 mb-4">
            <button
              onClick={() => setActiveTab('book')}
              className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === 'book'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              📚 책 관련 질문
            </button>
            <button
              onClick={() => setActiveTab('self')}
              className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === 'self'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              👤 자기소개 질문
            </button>
            <button
              onClick={() => setActiveTab('etc')}
              className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === 'etc'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              🎯 기타 질문
            </button>
          </div>

          <div className="flex gap-4">
            <button
              onClick={getRandomQuestion}
              disabled={isLoading}
              className={`px-8 py-4 rounded-xl text-white font-semibold text-lg shadow-lg transition-all duration-300 ${
                isLoading 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-indigo-600 hover:bg-indigo-700 hover:scale-105'
              }`}
            >
              {isLoading ? '질문 선택 중...' : '새 질문 선택하기'}
            </button>

            <button
              onClick={() => setShowAllQuestions(true)}
              className="px-8 py-4 rounded-xl text-indigo-600 font-semibold text-lg shadow-lg transition-all duration-300 bg-white hover:bg-gray-50 hover:scale-105"
            >
              질문 전체 보기
            </button>
          </div>

          {selectedQuestion && (
            <div className="w-full max-w-2xl p-8 bg-indigo-50 rounded-xl shadow-lg">
              <h2 className="text-2xl font-semibold mb-4 text-indigo-800">선택된 질문:</h2>
              <p className="text-gray-700 text-3xl font-bold">{selectedQuestion}</p>
            </div>
          )}
        </div>
      </div>

      {showAllQuestions && (
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <div 
            ref={modalRef}
            className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl w-full max-h-[80vh] flex flex-col"
          >
            <div className="flex justify-between items-center mb-6 flex-shrink-0">
              <h2 className="text-2xl font-bold text-indigo-800">
                {activeTab === 'book' ? '📚 책 관련 질문' : activeTab === 'self' ? '👤 자기소개 질문' : '🎯 기타 질문'}
              </h2>
              <button
                onClick={handleCloseModal}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <div className="space-y-4 overflow-y-auto overflow-x-hidden flex-grow">
              {(activeTab === 'book' ? bookQuestions : 
                activeTab === 'self' ? selfIntroductionQuestions : 
                etcQuestions).map((question, index) => (
                <div
                  key={index}
                  className="p-4 bg-indigo-50 rounded-lg cursor-pointer"
                  onMouseEnter={() => handleQuestionHover(index, question)}
                  onMouseLeave={handleQuestionLeave}
                >
                  <p className="text-gray-700">{question}</p>
                </div>
              ))}
            </div>

            {hoveredQuestion && (
              <div
                ref={hoverRef}
                className="fixed pointer-events-none z-[100]"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <div className="p-4 bg-indigo-100 rounded-lg shadow-lg">
                  <p className="text-gray-700 text-lg">{hoveredQuestion.question}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
