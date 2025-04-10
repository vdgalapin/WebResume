try {
    window.scroll({
        top: 50,
        left: 0,
        behavior: "smooth",
    });


    document.addEventListener("scroll", function() {
        let sections = document.querySelectorAll(".section");
        sections.forEach(section => {
            let position = section.getBoundingClientRect().top;
            let screenPosition = window.innerHeight / 2;
            if (position < screenPosition) {
                section.classList.add("visible");
                if (section.id == 'section2') {
                    if(document.getElementById("canton").children.length == 0) {
                        MakeAmericanFlag();
                        document.getElementsByClassName("sectionTitle")[0].classList.add("visible");
                    }
                } else if (section.id == 'section6') {
                    for(let x = 0; x < document.getElementById("section6").children[1].children[0].children.length; x++ ) {
                        document.getElementById("section6").children[1].children[0].children[x].classList.add('animation_letter');
                    }
                }
            }
        });
    });
} catch (err) {
    console.log(err);
}
