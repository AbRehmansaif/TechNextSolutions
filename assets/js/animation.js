let sections = document.querySelectorAll('div');

window.onscroll = () =>{
    sections.forEach(sec=> {
        // let top = window.scrollY;
        // let offset = sec.offsetTop - 150 ;
        // let height = sec.offsetHeight;

        // if (top >= offset && top < offset + height){
        //     sec.classList.add('show-animate');
        // }
        // else{
        //     sec.classList.remove('show-animate');
        // }

        let top = window.scrollY;
        let offsetStart = 40; // Start of the range
        let offsetEnd = 590; // End of the range
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;

        if (top < offset - offsetStart && top >= offset + height - offsetEnd) {
            sec.classList.add('show-animate');
        } else {
            sec.classList.remove('show-animate');
        }

    })
} 