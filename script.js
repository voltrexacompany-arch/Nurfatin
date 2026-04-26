// 1. Typewriter Effect
const nameElement = document.getElementById('name-text');
const nameValue = "นูรฟาตินห์ สาเมาะ";
let index = 0;

function typeWriter() {
    if (index < nameValue.length) {
        nameElement.innerHTML += nameValue.charAt(index);
        index++;
        setTimeout(typeWriter, 150);
    }
}

// 2. Scroll Reveal Animation
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

// เรียกใช้ฟังก์ชันเมื่อโหลดหน้าจอ
window.addEventListener("scroll", reveal);
window.onload = () => {
    typeWriter();
    reveal(); // เช็ค reveal ครั้งแรกตอนโหลดหน้า
};
