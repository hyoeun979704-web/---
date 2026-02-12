// 1. DOM 선택
const title = document.getElementById('title');
const contents = document.querySelectorAll('.content');
const changeBtn = document.querySelector('#changeBtn');

console.log('제목:', title);
console.log('문단 개수:', contents.length);

// 2. 이벤트 리스너
changeBtn.addEventListener('click', function() {
    title.textContent = '제목이 변경되었습니다!';
    title.classList.add('highlight');
    console.log('버튼 클릭됨!');
});

// 3. 문단 추가
const addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', () => {
    const newP = document.createElement('p');
    newP.textContent = '새로운 문단입니다!';
    newP.className = 'content';
    document.body.appendChild(newP);
});

// 4. 입력값 처리
const nameInput = document.getElementById('nameInput');
const greetBtn = document.getElementById('greetBtn');
const greeting = document.getElementById('greeting');

greetBtn.addEventListener('click', () => {
    const name = nameInput.value;
    if (name) {
        greeting.textContent = `안녕하세요, ${name}님!`;
    } else {
        greeting.textContent = '이름을 입력해주세요.';
    }
});

// 5. async/await 맛보기 (개념만)
async function fetchData() {
    console.log('데이터 가져오는 중...');
    // 나중에 API 호출할 때 사용
}


// 6. 이미지 번갈아 바꾸기
const images = [
    'images/image1.jpg',
    'images/image2.jpg',
    'images/image3.jpg'
];

let currentImageIndex = 0;
const slideImage = document.getElementById('slideImage');
const imageBtn = document.getElementById('imageBtn');

imageBtn.addEventListener('click', () => {
    // 다음 이미지 인덱스로 변경 (0→1→2→0...)
    currentImageIndex = (currentImageIndex + 1) % images.length;
    slideImage.src = images[currentImageIndex];
    console.log(`이미지 ${currentImageIndex + 1}번 표시 중`);
});