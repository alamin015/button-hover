let btns = document.querySelectorAll(".btn");

btns.forEach(btn => {
    btn.onclick = (e) => {
        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;

        let span = document.createElement('span');
        span.style.left= x + "px";
        span.style.top= y + "px";
        btn.appendChild(span);

        setTimeout(() => {
            span.remove();
        },1000)
    }
})
