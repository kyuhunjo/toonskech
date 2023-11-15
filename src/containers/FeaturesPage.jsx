import React from 'react';
import '../styles/pages/FeaturesPage.css';

const FeaturesPage = () => {
    return (
        <main className="features-content">
            <section className="detailed-features">
                <h1>우리의 특징을 탐색하세요</h1>
                
                <article className="feature">
                    <h2>자동 스케치</h2>
                    <p>클릭 한 번으로 아이디어를 스케치로 변환하는 최첨단 AI를 활용하세요. 독특한 스타일을 이해하는 직관적인 디자인을 경험해 보세요.</p>
                    <button className="demo-button">실제로 보기</button>
                </article>

                <article className="feature">
                    <h2>편집 기능</h2>
                    <p>우리의 포괄적인 편집 도구 모음을 사용하여 세밀한 디테일과 정밀함을 제공하여, 귀하의 비전을 실현할 수 있도록 도와줍니다.</p>
                    <button className="demo-button">편집기 시도하기</button>
                </article>
                {/* 추가적인 기능들을 여기에 추가할 수 있습니다 */}
            </section>

            <section className="interactive-demos">
                <h1>인터랙티브 데모</h1>
                <div className="demo">
                    <h2>데모 제목</h2>
                    {/* 인터랙티브 데모를 위한 자리 */}
                    <p>이 인터랙티브 데모는 예시입니다. 실제 인터랙티브 요소는 여기에 구현됩니다.</p>
                </div>
                {/* 추가적인 데모들을 여기에 추가할 수 있습니다 */}
            </section>

            <section className="comparison-chart">
                <h1>플랜 선택하기</h1>
                <table>
                    <thead>
                        <tr>
                            <th>기능</th>
                            <th>무료</th>
                            <th>프리미엄</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>스케치 수</td>
                            <td>월 10회</td>
                            <td>무제한</td>
                        </tr>
                        <tr>
                            <td>협업</td>
                            <td>제한적</td>
                            <td>광범위한</td>
                        </tr>
                        {/* 추가적인 비교 행들을 여기에 추가할 수 있습니다 */}
                    </tbody>
                </table>
            </section>
        </main>
    );
};

export default FeaturesPage;
