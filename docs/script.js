const toggleBtn = document.querySelector('.toggle');
const headerBox = document.querySelector('.index');

toggleBtn.addEventListener('click', function () {
    headerBox.classList.toggle("show-index");
})