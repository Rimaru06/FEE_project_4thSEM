const imgdiv = document.getElementById('back');
if (imgdiv) {
    imgdiv.addEventListener('click', function () {
        window.location.href = 'http://192.168.86.135:5500/fetch/index.html?name=back';
    });
}
const imgdiv1 = document.getElementById('chest');
if (imgdiv1) {
    imgdiv1.addEventListener('click', function () {
        window.location.href = 'http://192.168.86.135:5500/fetch/index.html?name=chest';
    });
}
const imgdiv2 = document.getElementById('legs');
if (imgdiv2) {
    imgdiv2.addEventListener('click', function () {
        window.location.href = 'http://192.168.86.135:5500/fetch/index.html?name=lower%20legs';
    });
}