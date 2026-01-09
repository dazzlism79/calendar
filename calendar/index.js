
        /*
         * JavaScript 로직 (jQuery 기반)
         * 상태 관리 및 UI 렌더링
         */
        $(document).ready(function() {
            try {
                // 1. 데이터 정의
                const CONTEST_DATA = [
                    { id: 1, title: "쿨투라 신인상", organizer: "시 5편 이상 | 소설 원고지 70매 이상", date: "2026-01-5", link: "https://www.cultura.co.kr/bbs/view.html?idxno=199", category: "all" },
                    { id: 2, title: "계간 파란 신인상", organizer: "시 10편 이상 | 평론 원고지 70매 이상", date: "2026-01-10", link: "https://cafe.daum.net/bookparan2015/k7ZY/31", category: "poetry" },
                    { id: 3, title: "계간 포지션 신인추천 ", organizer: "시 5편 이상 | position2013@naver.com", date: "2026-01-15", link: "#", category: "poetry" },
                    { id: 4, title: "창비스토리공모", organizer: "미완성 - 원고지 350매 이상 | 완성 - 500매 이상 (최대 1000매)", date: "2026-02-01", link: "https://www.changbi.com/contest?type=2", category: "novel" },
                    { id: 5, title: "민음사 오늘의 작가상", organizer: "원고지 500매 이상", date: "2026-02-28", link: "https://minumsa.minumsa.com/award/%ec%98%a4%eb%8a%98%ec%9d%98-%ec%9e%91%ea%b0%80%ec%83%81/", category: "novel" },
                    { id: 6, title: "현대시 신인추천", organizer: "시 10편 이상 | 평론 원고지 60매 이상", date: "2026-03-06", link: "http://www.koreapoem.co.kr/", category: "poetry" },
                    { id: 7, title: "문학과사회 신인문학상", organizer: "시 10편 이상 | 소설 단편(100매 내외) 2편 or 중편(250~300매) 1편 이상 | 평론 1편 이상", date: "2026-03-31", link: "https://moonji.com/literatureAward/newface", category: "all" },
                    { id: 8, title: "현대문학 신인추천", organizer: "시 10편 이상 | 소설 단편(70매 내외) 2편 or 중편(200매 이상) 1편 | 평론 70매 1편", date: "2026-03-31", link: "https://www.hdmh.co.kr/front/monthlyBook/newFace", category: "all" },
                    { id: 9, title: "넥서스 작가상", organizer: "장편소설 (원고지 600매~1200매) & 자유형식 응모작 소개서 (원고지 10매 내외)", date: "2026-03-31", link: "https://and.nexusbook.com/contest/submit_info.asp", category: "novel" },
                    { id: 10, title: "창비 청소년 문학상", organizer: "청소년 소설 원고지 500매 내외", date: "2026-04-30", link: "https://www.changbi.com/contest?type=2", category: "novel" },
                    { id: 11, title: "문학동네신인상", organizer: "시 5편 이상 | 소설 중단편(원고지 80~200매) 2편 | 평론 1편 이상", date: "2026-05-10", link: "https://munhak.com/contest/prize/4398", category: "all" },
                    { id: 12, title: "창비신인문학상", organizer: "시 5~10편 | 소설 단편(원고지 80매 내외) 2편 | 문학평론(원고지 80매 내외) 1편", date: "2026-05-29", link: "https://www.changbi.com/contest?type=2", category: "all" },
                    { id: 13, title: "김수영 문학상", organizer: "시 50편 이상 | 신인 및 등단 10년 이내의 시인", date: "2026-05-31", link: "https://minumsa.minumsa.com/award/%EA%B9%80%EC%88%98%EC%98%81-%EB%AC%B8%ED%95%99%EC%83%81/", category: "poetry" },
                   
                ];

                const MESSAGES = [
                    { title: "신인상 시 투고할 때?", content: "저의 경우에는 가장 잘 썼다고 생각한 시나 제일 강조하고 싶은 시를 맨 앞에 두었고, 운문시와 산문시들이 섞여 있을 경우엔 산문시끼리 연속하지 않도록 유의했으며... 중간마다 잘 읽힐 만한 시들을 끼워 넣어 주었습니다." },
                    { title: "최종심과 희망고문", content: "본심이나 최종심에 오르기 시작하면, 정말 희망고문이 시작됩니다. 될 것 같으면서도 자꾸 미끄러지니까요. 그래도 그 정도면 머지 않았다! 화이팅!" },
                    { title: "그릭크로스 - 김연덕", content: "기이한 안식처 / 천국 고집대로 고수한 / 결기 죽지도 살지도 않는 / 기대 때문에요 나의 // 최선 때문에요" },
                    { title: "사랑의 미래 - 김연덕", content: "이름만으로 믿어지는 것들 중에서 / 내내 뜨거운 것은 몇 개나 될까." },
                    { title: "재와 사랑의 미래 - 김연덕", content: "가까이 붙어 숨 쉴수록 기우는 바닥. 우리는 나란히 누워 일렁이는 나무 그림자를 본다. // 스스로 망가뜨린 기억도 잊을 수 있게. / 손을 잡고 눈을 감고 반쯤 잠들어," },
                    { title: "재와 사랑의 미래 - 김연덕", content: "잘 살자, / 이제 잘 살자. / 도와주려는 사람들이 있었다. " },
                    { title: "crop circle - 김연덕", content: "덩어리져 / 처음부터 하나인 / 어둠 속에서 // 사랑은 사랑을 자꾸 덧붙이고 싶어 해 " },
                    { title: "삼각산 - 김연덕", content: "나를 포기하고 나아가는 건 쉬운 일이다 / 소진되는 건 // 단순해지는 건 마구 내달리다 잠에 빠져드는 건 그보다 더 쉬운 일 // 귀찮게 쌓아 올린 돌탑 같은 일이다" },
                    { title: "아이스버그 - 김연덕", content: "팔꿈치끼리 맞닿아 / 사랑을 할 때 / 우리는 간다 / 선인장이 사는 집으로" },
                    { title: "재와 사랑의 미래 - 김연덕", content: "우리가 만나 새하얀 산에 오른 건 느리고 희박한 온도가 된 건 그곳에서 서서히 그리고 완전히 다른 사람이 되어 내려온 건 한참 뒤의 일인데 너는 어떻게 이 산을 알고 있을까 왜 모든 축제 모든 정적을 겪은 사람의 얼굴 다 잊고 이겨 낸 사람 얼굴을 하고 있을까 규칙적인 산맥과 공기 부드럽게 치솟는 시간을 어린 너는 어떻게 견딜 수 있었을까" }
                ];

                // 2. 상태 변수
                let currentDate = new Date();
                let selectedCategory = 'all';
                let messageIndex = 0;

                // 3. 초기화 함수
                function init() {
                    // 시간대 표시
                    try {
                        $('#timezone-text').text(Intl.DateTimeFormat().resolvedOptions().timeZone);
                    } catch(e) {
                        $('#timezone-text').text('Timezone Error');
                    }
                    
                    // 랜덤 메시지 세팅
                    changeMessage();
                    
                    // 렌더링
                    renderAll();
                    
                    // 아이콘 로드 (안전하게 호출)
                    updateIcons();
                }
                
                // 아이콘 업데이트 헬퍼
                function updateIcons() {
                    if (typeof lucide !== 'undefined' && lucide.createIcons) {
                        lucide.createIcons();
                    }
                }

                // 4. 렌더링 함수들
                function renderAll() {
                    renderCalendar();
                    renderSidebarList();
                    updateFilterButtons();
                    // 렌더링 후 아이콘 갱신 필수
                    setTimeout(updateIcons, 0);
                }

                function renderCalendar() {
                    const year = currentDate.getFullYear();
                    const month = currentDate.getMonth();
                    
                    // 헤더 텍스트 업데이트
                    $('#current-month-text').text(`${year}년 ${month + 1}월`);

                    // 달력 계산
                    const daysInMonth = new Date(year, month + 1, 0).getDate();
                    const firstDayIndex = new Date(year, month, 1).getDay(); // 0: 일요일

                    const $grid = $('#calendar-days');
                    $grid.empty();

                    // 빈 칸 채우기
                    for(let i=0; i < firstDayIndex; i++) {
                        $grid.append('<div class="day-cell" style="background:#fcfcfc;"></div>');
                    }

                    // 날짜 채우기
                    const today = new Date();
                    const isCurrentMonth = today.getFullYear() === year && today.getMonth() === month;

                    for(let day=1; day <= daysInMonth; day++) {
                        let cellClass = 'day-cell';
                        if(isCurrentMonth && today.getDate() === day) {
                            cellClass += ' today';
                        }

                        // 해당 날짜의 이벤트 필터링
                        const currentDayStr = `${year}-${String(month+1).padStart(2,'0')}-${String(day).padStart(2,'0')}`;
                        const events = CONTEST_DATA.filter(evt => {
                            const matchDate = evt.date === currentDayStr;
                            const matchCat = selectedCategory === 'all' || evt.category === 'all' || evt.category === selectedCategory;
                            return matchDate && matchCat;
                        });

                        // HTML 조립
                        let eventsHtml = '';
                        events.forEach(evt => {
                            const typeClass = evt.category;
                            const typeLabel = evt.category === 'novel' ? 'N' : (evt.category === 'poetry' ? 'P' : 'A');
                            
                            // 카테고리 뱃지 (전체보기일 때만 표시)
                            const badgeHtml = selectedCategory === 'all' ? `<span style="font-weight:bold; margin-right:2px;">${typeLabel}</span>` : '';
                            
                            eventsHtml += `
                                <a href="${evt.link}" target="_blank" class="event-tag ${typeClass}" onclick="event.stopPropagation()">
                                    ${badgeHtml}${evt.title}
                                </a>
                            `;
                        });

                        const cellHtml = `
                            <div class="${cellClass}">
                                <div class="date-num">${day}</div>
                                <div>${eventsHtml}</div>
                            </div>
                        `;
                        $grid.append(cellHtml);
                    }
                }

                function renderSidebarList() {
                    const year = currentDate.getFullYear();
                    const month = currentDate.getMonth();

                    // 필터링된 이번 달 이벤트
                    const events = CONTEST_DATA.filter(evt => {
                        const d = new Date(evt.date);
                        const matchMonth = d.getFullYear() === year && d.getMonth() === month;
                        const matchCat = selectedCategory === 'all' || evt.category === 'all' || evt.category === selectedCategory;
                        return matchMonth && matchCat;
                    }).sort((a,b) => new Date(a.date) - new Date(b.date));

                    const $list = $('#event-list');
                    $list.empty();

                    // 배지 텍스트 업데이트
                    const filterText = selectedCategory === 'all' ? '전체 보기' : (selectedCategory === 'poetry' ? '시 공모전' : '소설 공모전');
                    $('#list-filter-badge').text(filterText);

                    if(events.length === 0) {
                        $list.html('<div style="text-align:center; padding:30px; color:#9ca3af; font-size:0.875rem;">일정이 없습니다.<br>창작에 몰두하기 좋은 달이네요.</div>');
                        return;
                    }

                    events.forEach(evt => {
                        const d = new Date(evt.date);
                        const day = d.getDate();
                        const typeClass = evt.category; // poetry, novel, all

                        const html = `
                            <div class="list-item ${typeClass}">
                                <div style="display:flex; justify-content:space-between; align-items:start;">
                                    <span class="d-day-badge ${typeClass}">${day}일 마감</span>
                                </div>
                                <h4 class="item-title">${evt.title}</h4>
                                <p class="item-organizer">${evt.organizer}</p>
                                <a href="${evt.link}" target="_blank" class="item-link">
                                    요강 보러가기 <i data-lucide="external-link" width="12"></i>
                                </a>
                            </div>
                        `;
                        $list.append(html);
                    });
                }

                function updateFilterButtons() {
                    $('.filter-btn').removeClass('active');
                    $(`.filter-btn[data-category="${selectedCategory}"]`).addClass('active');
                }

                function changeMessage() {
                    let nextIndex;
                    do {
                        nextIndex = Math.floor(Math.random() * MESSAGES.length);
                    } while (nextIndex === messageIndex && MESSAGES.length > 1);
                    
                    messageIndex = nextIndex;
                    const msg = MESSAGES[messageIndex];
                    
                    $('#msg-title').text(msg.title);
                    $('#msg-content').text(msg.content);
                }

                // 5. 이벤트 리스너
                $('#prev-month').click(function() {
                    currentDate.setMonth(currentDate.getMonth() - 1);
                    renderAll();
                });

                $('#next-month').click(function() {
                    currentDate.setMonth(currentDate.getMonth() + 1);
                    renderAll();
                });

                $('.filter-btn').click(function() {
                    selectedCategory = $(this).data('category');
                    renderAll();
                });

                $('#message-box').click(function() {
                    changeMessage();
                });

                // 실행
                init();
            } catch (error) {
                console.error("Initialization error:", error);
            }
        });