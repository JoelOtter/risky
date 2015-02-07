var frame, range, interval;

function getURLParameter(name) {
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null;
}

function setBlur(blurPc) {
    frame.style['-webkit-filter'] = 'blur(' + (blurPc / 100 * 50) + 'px)';
}

function changeBlur(e) {
    var blurPc = 100 - e.target.value;
    setBlur(blurPc);
}

function decreaseBlur() {
    var blur = 100 - range.value;
    blur -= 10;
    if (blur < 0) blur = 0;
    range.value = 100 - blur;
    setBlur(blur);
}

function toggleAuto(e) {
    var checked = e.target.checked;
    if (checked) {
        interval = setInterval(decreaseBlur, 1000);
    } else {
        clearInterval(interval);
    }
    range.disabled = checked;
}

window.onload = function() {
    var url = getURLParameter('url');
    frame = document.getElementById('view');
    range = document.getElementById('blurRange');
    frame.src = url;
    frame.style['-webkit-filter'] = 'blur(50px)';
    range.addEventListener('input', changeBlur);
    document.getElementById('autoCheck').addEventListener('change', toggleAuto);
};
