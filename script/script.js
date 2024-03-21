const storyElement = document.getElementById("story");
const choice1Element = document.getElementById("choice1");
const choice2Element = document.getElementById("choice2");

// 초기 이야기 설정
let storyIndex = 0;

// 선택 1을 클릭할 때의 이벤트
choice1Element.addEventListener("click", () => {
  storyIndex++;
  updateStory();
});

// 선택 2를 클릭할 때의 이벤트
choice2Element.addEventListener("click", () => {
  storyIndex += 2; // 예시를 위해 2를 더하였습니다.
  updateStory();
});

// 이야기 업데이트 함수
function updateStory() {
  switch (storyIndex) {
    case 0:
      storyElement.textContent = "당신은 신비로운 나무 속에서 누군가를 만났습니다. 누구와 연애할까요?";
      choice1Element.textContent = "엘프";
      choice2Element.textContent = "요정";
      break;
    case 1:
      storyElement.textContent = "엘프와의 로맨스는 숲 속에서 달콤한 시간을 가져다줍니다.";
      choice1Element.textContent = "계속하기";
      choice2Element.textContent = "종료";
      break;
    case 2:
      storyElement.textContent = "요정과의 연애는 마법의 세계로 빠져들게 합니다.";
      choice1Element.textContent = "계속하기";
      choice2Element.textContent = "종료";
      break;
    case 3:
    case 4:
      storyElement.textContent = "이야기 끝!";
      choice1Element.style.display = "none";
      choice2Element.style.display = "none";
      break;
  }
}

// 초기 이야기 표시
updateStory();
