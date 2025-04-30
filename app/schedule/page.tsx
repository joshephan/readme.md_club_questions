'use client';

export default function Schedule() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 flex flex-col items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-4xl font-bold mb-8 text-center text-indigo-800">README.MD 개발자 모임 진행 순서</h1>
        
        <div className="space-y-6">
          <div className="bg-indigo-50 p-6 rounded-xl">
            <h2 className="text-2xl font-semibold mb-4 text-indigo-700">🌈 진행 순서</h2>
            <ul className="space-y-4 text-lg">
              <li className="flex items-center">
                <span className="text-indigo-600 font-bold mr-2">19:00</span>
                <span>입장</span>
              </li>
              <li className="flex items-center">
                <span className="text-indigo-600 font-bold mr-2">19:00 ~ 19:20</span>
                <span>자유로운 네트워킹</span>
              </li>
              <li className="flex items-center">
                <span className="text-indigo-600 font-bold mr-2">19:20 ~ 19:40</span>
                <span>자기 소개 & 관심사</span>
              </li>
              <li className="flex items-center">
                <span className="text-indigo-600 font-bold mr-2">19:40 ~ 20:00</span>
                <span>쉬는 시간</span>
              </li>
              <li className="flex items-center">
                <span className="text-indigo-600 font-bold mr-2">20:00 ~ 21:00</span>
                <span>자유로운 개발 및 독서 이야기</span>
              </li>
              <li className="flex items-center">
                <span className="text-indigo-600 font-bold mr-2">21:00 ~</span>
                <span>2차(자유 참석)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 