let members = [...document.querySelectorAll('.member-image')]

let social = [...document.querySelectorAll('.social')]


const tabsBox = document.querySelector(".tabs-box"),
allTabs = tabsBox.querySelectorAll(".tab"),
arrowIcons = document.querySelectorAll(".icon i");

const tabs = document.querySelectorAll('.tabs-box .tab');



for (let index = 0; index < members.length; index++) {
    members[index].addEventListener('mouseover' , function(){
        social[index].style.transition = 'transform 0.5s ease-in-out';
        social[index].style.display = 'block' ;
    })
    members[index].addEventListener('mouseout',function(){
        social[index].style.transition = 'transform 0.5s ease-in-out';
        social[index].style.display = 'none' ;

    })    
}


let isDragging = false;

const handleIcons = (scrollVal) => {
    let maxScrollableWidth = tabsBox.scrollWidth - tabsBox.clientWidth;
    arrowIcons[0].parentElement.style.display = scrollVal <= 0 ? "none" : "flex";
    arrowIcons[1].parentElement.style.display = maxScrollableWidth - scrollVal <= 1 ? "none" : "flex";
}

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        // if clicked icon is left, reduce 350 from tabsBox scrollLeft else add
        let scrollWidth = tabsBox.scrollLeft += icon.id === "left" ? -340 : 340;
        handleIcons(scrollWidth);
    });
});

allTabs.forEach(tab => {
    tab.addEventListener("click", () => {
        tabsBox.querySelector(".active").classList.remove("active");
        tab.classList.add("active");
    });
});

const dragging = (e) => {
    if(!isDragging) return;
    tabsBox.classList.add("dragging");
    tabsBox.scrollLeft -= e.movementX;
    handleIcons(tabsBox.scrollLeft)
}

const dragStop = () => {
    isDragging = false;
    tabsBox.classList.remove("dragging");
}

tabsBox.addEventListener("mousedown", () => isDragging = true);
tabsBox.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);


// Loop through each tab and add event listeners for mouseenter and mouseleave
tabs.forEach(tab => {
    // When mouse enters the tab
    tab.addEventListener('mouseenter', () => {
        tabs.forEach(otherTab => {
            if (otherTab !== tab) {
                otherTab.style.opacity = '0.5';
            }
        });
    });

    // When mouse leaves the tab
    tab.addEventListener('mouseleave', () => {
        tabs.forEach(otherTab => {
            otherTab.style.opacity = '1';
        });
    });
});



