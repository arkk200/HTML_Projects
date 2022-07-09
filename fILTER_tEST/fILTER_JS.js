window.addEventListener('mousemove', e => {
    const $contents = document.querySelectorAll('#contents ul li');
    $contents[0].style.filter = `blur(${(e.clientX + e.clientY) / 400}px)`;
    $contents[1].style.filter = `contrast(${(e.clientX + e.clientY) / 11}%)`;
    $contents[2].style.filter = `brightness(${(e.clientX + e.clientY) / 7}%)`;
    $contents[3].style.filter = `drop-shadow(${e.clientX / 80}px ${e.clientY / 80}px 6px #ff44cc)`;
    $contents[4].style.filter = `grayscale(${(e.clientX + e.clientY)/22}%)`;
    $contents[5].style.filter = `hue-rotate(${(e.clientX + e.clientY)/5}deg)`;
    $contents[6].style.filter = `invert(${(e.clientX + e.clientY)/22}%)`;
    $contents[7].style.filter = `opacity(${(e.clientX + e.clientY)/22}%)`;
    $contents[8].style.filter = `saturate(${(e.clientX + e.clientY)/11}%)`;
    $contents[9].style.filter = `sepia(${(e.clientX + e.clientY)/22}%)`;
    $contents[10].style.filter = `grayscale(${(e.clientX + e.clientY)/22}%) sepia(${(e.clientX + e.clientY)/22}%)`;
    $contents[11].style.filter = `contrast(${(e.clientX + e.clientY)/11}%) invert(${(e.clientX + e.clientY)/22}%)`;
    $contents[12].style.filter = `invert(${(e.clientX + e.clientY)/22}%) hue-rotate(${(e.clientX + e.clientY)/5}deg)`;
    $contents[13].style.filter = `blur(${(e.clientX + e.clientY) / 400}px) grayscale(${(e.clientX + e.clientY)/110}%) hue-rotate(${(e.clientX + e.clientY)/9}deg) invert(${(e.clientX + e.clientY)/22}%) contrast(${(e.clientX + e.clientY)/11}%)`;
})