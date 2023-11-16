import React from 'react';
import '../styles/pages/InformationPage.css'; // Import the CSS for InformationPage

const InformationPage = () => {
    return (
        <div>

            <main className="information-content">
                <section id="our-story" className="our-story">
                    <div className="section-container">
                        <h2>우리의 이야기</h2>
                        <p>웹툰 스케치는 2017년 디지털 아티스트와 스토리텔러를 지원하고자 하는 열정에서 시작된 프로젝트입니다. 우리 개발자와 아티스트 팀은 여러분이 웹툰을 생생하게 창조할 수 있도록 필요한 도구를 제공하기 위해 끊임없이 노력하고 있습니다.</p>
                        {/* 필요한 경우 더 많은 내용 추가 */}
                    </div>
                </section>
                
                <section id="mission-statement" className="mission-statement">
                    <div className="section-container">
                        <h2>우리의 미션</h2>
                        <p>우리의 미션은 웹툰 창작을 민주화하여 모든 수준의 아티스트가 접근하고 즐길 수 있게 하는 것입니다. 우리는 창의력이 한계를 모르는 플랫폼을 제공하는 데 전념하고 있습니다.</p>
                        {/* 필요한 경우 더 많은 내용 추가 */}
                    </div>
                </section>
                
                <section id="visual-timeline" className="visual-timeline">
                    <div className="section-container">
                        <h2>우리의 여정</h2>
                        <ul className="timeline">
                            <li className="timeline-event">
                                <h3>2017년</h3>
                                <p>웹툰 스케치 아이디어가 구상되었습니다.</p>
                            </li>
                            <li className="timeline-event">
                                <h3>2018년</h3>
                                <p>우리의 첫 프로토타입이 출시되었으며 초기 사용자들로부터 긍정적인 피드백을 받았습니다.</p>
                            </li>
                            {/* 필요한 경우 더 많은 타임라인 이벤트 추가 */}
                        </ul>
                    </div>
                </section>
            </main>

        </div>
    );
};

export default InformationPage;
