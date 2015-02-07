function getURLParameter(name) {
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null;
}

function changeBlur(e) {
    var blurPc = 100 - e.target.value;
    document.getElementById('view').style['-webkit-filter'] = 'blur(' + (blurPc / 100 * 50) + 'px)';
}

window.onload = function() {
    var url = getURLParameter('url');
    document.getElementById('view').src = url;
    document.getElementById('view').style['-webkit-filter'] = 'blur(50px)';
    document.getElementById('blurRange').addEventListener('input', changeBlur);
};
