/* Das hier ist der prozent part*/

const updateScrollPercentage = function() { 
    const heightOfWindow = window.innerHeight,
        contentScrolled = window.pageYOffset,
        bodyHeight = document.body.offsetHeight,
        percentage = document.querySelector("[data-scrollPercentage] .percentage")
        percentageVal = document.querySelector("#percentage-value span.is-value")

    if(bodyHeight - contentScrolled <= heightOfWindow) {
        percentageVal.textContent = percentage.style.width = "100%"
    }
    else {
        const total = bodyHeight - heightOfWindow,
            got = contentScrolled,
            percent = parseInt((got/total) * 100)
        percentageVal.textContent = percentage.style.width = percent + "%"
    }
}

window.addEventListener('scroll', updateScrollPercentage)

/* scroll title*/


let ps = document.getElementById('ps');
let Title = document.getElementById('Title');
let nintendo = document.getElementById('nintendo');
let computer = document.getElementById('computer');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    ps.style.left = value + 0.5 + 'px'; 
    ps.style.bottom = value + 0.1 + 'px'; 
    nintendo.style.bottom = value + 0.1 + 'px'; 
    computer.style.right = value + 0.10 + 'px';

    Title.style.marginTop = value + 0.10 + 'px';
}) 

/* das ist fuer die text sections und navigation links */

const areas = document.querySelectorAll(".text-area");

const observer = new IntersectionObserver(entries => {
    
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting);

        const id = entry.target.getAttribute('id');
        
        if (entry.isIntersecting) {  
            document.querySelector('a[href="#'+ id +'"]').classList.toggle("active-link");
        } else {
            document.querySelector('a[href="#'+ id +'"]').classList.remove("active-link");
        }
    
    });
});

areas.forEach(area => {
    observer.observe(area); 
});
