var x;
var unfold1 = false;
var unfold2 = false;
var unfold3 = false;
var click = false;
var list1;
var list2;
var list3;
var list4;
var list5;
var list6;
var list7;
var list8;
var list9;
var list10;
var list11;

var list1bool = false;
var list2bool = false;
var list3bool = false;
var list4bool = false;
var list5bool = false;
var list6bool = false;
var list7bool = false;
var list8bool = false;
var list9bool = false;
var list10bool = false;
var list11bool = false;

var i;
let counter = 0;
let list1Counter = 0;
let list2Counter = 0;
let list3Counter = 0;
let list4Counter = 0;
let list5Counter = 0;
let list6Counter = 0;
let list7Counter = 0;
let list8Counter = 0;
let list9Counter = 0;
let list10Counter = 0;
let list11Counter = 0;
let arrCounter = 0;
var textArr = ["Have no fear of perfection, you’ll never reach it. - Salvador Dali", "Make it simple, but significant. - Don Draper, fictional character", "Design is as much an act of spacing as an act of marking. - Ellen Lupton", "Simplicity, carried to an extreme, becomes elegance. - John Franklin", "Jonas Friis Kjær", "Thank you", "Nothing more to see here", "Err", "There is nothing beyond this", "BEANS"];
//
//if scroll && window.pageYOffset
window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenvises");
    if (window.innerWidth <= 699) {

        console.log("mobile mobile");
        mobile();

    } else if (navigator.userAgent.match(/iPad/i)) {
        console.log("tablet detected");
        mobile();
    } else if (window.innerWidth > 699) {
        console.log("desktop detected");
        desktop();
    }

    document.querySelector("#burger").addEventListener("click", burger);
    document.querySelector("#square").addEventListener("click", square);
    //window.addEventListener("resize", sidenVises);


}

function desktop() {
    console.log("desktop desktop");
    x = document.getElementsByClassName("bean_container");
    for (i = 0; i < x.length; i++) {
        x[i].addEventListener("mouseover", hide);
        x[i].style.zIndex = "1";
    }
}

function hide() {
    console.log("hide hide");

    let randomNummer = Math.floor(Math.random() * 4);
    this.classList.add("fall" + randomNummer);

    let randomNummer2 = Math.floor(Math.random() * 4);
    this.querySelector(".bean").classList.add("rotate" + randomNummer2);

    this.removeEventListener("mouseover", hide);
    counter++;

    if (counter == x.length) {
        setTimeout(resetBeans, 6000);
        setTimeout(fadeInBeans, 5000);

        if (arrCounter == 9) {
            Object.assign(document.querySelector("#headlines").style, {
                fontSize: "15vw"
            });
        }

        if (arrCounter == 10) {
            arrCounter = 0;
            Object.assign(document.querySelector("#headlines").style, {
                fontSize: "1.8vw"
            });
        }
        document.querySelector("#headlines").className = 'headline fade_in pos' + arrCounter;
        document.querySelector("#headlines").innerHTML = textArr[arrCounter];
        arrCounter++;
    }
    this.addEventListener("animationend", addHide(this));
    //this.style.zIndex = "-1";
    Object.assign(this.style, {
        zIndex: "-1",
        position: "relative"
    });
}

function resetBeans() {
    counter = 0;
    document.querySelector("#headlines").className = 'headline remove';
    for (i = 0; i < x.length; i++) {
        x[i].className = 'bean_container';
        x[i].querySelector(".bean").className = 'bean';
    }
    sidenVises();
}

function fadeInBeans() {
    for (i = 0; i < x.length; i++) {
        x[i].className = 'bean_container';
        x[i].querySelector(".bean").className = 'bean fade_in_bean';
    }
}

function addHide(d) {
    d.classList.add("hide");
}


function desktop_subpage() {
    console.log("subpage");
    document.querySelector("#list1_sectionwrapper").className = 'sectionwrapper quick_fade_in';


    /*list1 = document.getElementsByClassName("container_list1");
    for (i = 0; i < list1.length; i++) {
        list1[i].addEventListener("mouseover", hideList1);
        list1[i].style.zIndex = "1";
    }*/
    if (!list1bool) {
        list1 = initiateBeans(list1, "container_list1", hideList1);
    }
    if (!list2bool) {
        list2 = initiateBeans(list2, "container_list2", hideList2);
    }
    if (!list3bool) {
        list3 = initiateBeans(list3, "container_list3", hideList3);
    }
    if (!list4bool) {
        list4 = initiateBeans(list4, "container_list4", hideList4);
    }
    if (!list5bool) {
        list5 = initiateBeans(list5, "container_list5", hideList5);
    }
    if (!list6bool) {
        list6 = initiateBeans(list6, "container_list6", hideList6);
    }
    if (!list7bool) {
        list7 = initiateBeans(list7, "container_list7", hideList7);
    }
    if (!list8bool) {
        list8 = initiateBeans(list8, "container_list8", hideList8);
    }
    if (!list9bool) {
        list9 = initiateBeans(list9, "container_list9", hideList9);
    }
    if (!list10bool) {
        list10 = initiateBeans(list10, "container_list10", hideList10);
    }
    if (!list11bool) {
        list11 = initiateBeans(list11, "container_list11", hideList11);
    }
    if (list3Counter == 3) {
        document.querySelector("#list2_sectionwrapper").className = 'sectionwrapper';
    } else {
        document.querySelector("#scroll_beans_sectionwrapper").className = 'sectionwrapper quick_fade_in';
    }

}

function initiateBeans(y, s, method) {
    console.log("initiate");
    y = document.getElementsByClassName(s);
    console.log("list = " + y);
    console.log(y.length);
    for (i = 0; i < y.length; i++) {
        y[i].addEventListener("mouseover", method);
        /*var temp = y[i];
        y[i].addEventListener("mouseover", function () {
            hideList(assign, listcounter, temp);
        });*/
        y[i].style.zIndex = "2";
        console.log("hello?" + y[i]);
    }

    return y;
}


function hideList1() {
    console.log("hideList1 hideList1");

    let randomNummer = Math.floor(Math.random() * 4);
    this.classList.add("fall" + randomNummer);

    let randomNummer2 = Math.floor(Math.random() * 4);
    this.querySelector(".bean_subpage").classList.add("rotate" + randomNummer2);

    this.removeEventListener("mouseover", hideList1);
    list1Counter++;

    if (list1Counter == list1.length) {
        document.querySelector("#assignment1").className = 'quick_fade_in';
        document.querySelector("#overlay_assignment1").className = '';
        document.querySelector("#overlay_assignment1").addEventListener("click", function () {
            openProject("http://beansprout.dk/kea/02-animation/spil/index.html");
        });
    }
    list1bool = true;
    this.addEventListener("animationend", addHide(this));
    //this.style.zIndex = "-1";
    Object.assign(this.style, {
        zIndex: "-1",
        position: "relative"
    });
}

function hideList2() {
    console.log("hideList1 hideList1");

    let randomNummer = Math.floor(Math.random() * 4);
    this.classList.add("fall" + randomNummer);

    let randomNummer2 = Math.floor(Math.random() * 4);
    this.querySelector(".bean_subpage").classList.add("rotate" + randomNummer2);

    this.removeEventListener("mouseover", hideList2);
    list2Counter++;

    if (list2Counter == list2.length) {
        document.querySelector("#assignment1_text").className = 'quick_fade_in';
        document.querySelector("#assignment1_text").addEventListener("click", function () {
            openProject("http://beansprout.dk/kea/02-animation/spil/index.html");
        });
        document.querySelector("#plus1").classList.remove("remove");
        document.querySelector("#plus1").addEventListener("click", function () {

            document.querySelector("#span1").classList.toggle("remove");
            document.querySelector("#span1").classList.toggle("quick_fade_ind");

        });
    }
    list2bool = true;
    this.addEventListener("animationend", addHide(this));
    //this.style.zIndex = "-1";
    Object.assign(this.style, {
        zIndex: "-1",
        position: "relative"
    });
}

function hideList3() {
    console.log("hideList1 hideList1");

    let randomNummer = Math.floor(Math.random() * 4);
    this.classList.add("fall" + randomNummer);

    let randomNummer2 = Math.floor(Math.random() * 4);
    this.querySelector(".bean_subpage").classList.add("rotate" + randomNummer2);

    this.removeEventListener("mouseover", hideList3);
    list3Counter++;

    if (list3Counter == list3.length) {
        document.querySelector("#list2_sectionwrapper").className = 'sectionwrapper quick_fade_in';
        document.querySelector("#scroll_beans_sectionwrapper").className = 'sectionwrapper remove_important';
        document.querySelector("#scroll_beans_sectionwrapper2").classList.remove("remove_important");

    }
    list3bool = true;
    this.addEventListener("animationend", addHide(this));
    //this.style.zIndex = "-1";
    Object.assign(this.style, {
        zIndex: "-1",
        position: "relative"
    });
}

function hideList4() {
    console.log("hideList1 hideList1");

    let randomNummer = Math.floor(Math.random() * 4);
    this.classList.add("fall" + randomNummer);

    let randomNummer2 = Math.floor(Math.random() * 4);
    this.querySelector(".bean_subpage").classList.add("rotate" + randomNummer2);

    this.removeEventListener("mouseover", hideList4);
    list4Counter++;

    if (list4Counter == list4.length) {
        document.querySelector("#assignment2_text").className = 'quick_fade_in';
        document.querySelector("#assignment2_text").addEventListener("click", function () {
            openProject("http://beansprout.dk/kea/01-web/04-responsive/01_04_02_responsive_site_v2/");
        });
        //document.querySelector("#overlay_assignment1_text").className = '';
    }
    list4bool = true;
    this.addEventListener("animationend", addHide(this));
    //this.style.zIndex = "-1";
    Object.assign(this.style, {
        zIndex: "-1",
        position: "relative"
    });
}

function hideList5() {
    console.log("hideList1 hideList1");

    let randomNummer = Math.floor(Math.random() * 4);
    this.classList.add("fall" + randomNummer);

    let randomNummer2 = Math.floor(Math.random() * 4);
    this.querySelector(".bean_subpage").classList.add("rotate" + randomNummer2);

    this.removeEventListener("mouseover", hideList5);
    list5Counter++;

    if (list5Counter == list5.length) {
        document.querySelector("#overlay_assignment2").className = '';
        document.querySelector("#assignment2").className = 'quick_fade_in';
        document.querySelector("#overlay_assignment2").addEventListener("click", function () {
            openProject("http://beansprout.dk/kea/01-web/04-responsive/01_04_02_responsive_site_v2/");
        });
        document.querySelector("#plus2").classList.remove("remove");
        document.querySelector("#plus2").addEventListener("click", function () {

            document.querySelector("#span2").classList.toggle("remove");
            document.querySelector("#span2").classList.toggle("quick_fade_ind");

        });

    }
    list5bool = true;
    this.addEventListener("animationend", addHide(this));
    //this.style.zIndex = "-1";
    Object.assign(this.style, {
        zIndex: "-1",
        position: "relative"
    });
}

function hideList6() {
    console.log("hideList1 hideList1");

    let randomNummer = Math.floor(Math.random() * 4);
    this.classList.add("fall" + randomNummer);

    let randomNummer2 = Math.floor(Math.random() * 4);
    this.querySelector(".bean_subpage").classList.add("rotate" + randomNummer2);

    this.removeEventListener("mouseover", hideList6);
    list6Counter++;

    if (list6Counter == list6.length) {
        document.querySelector("#list3_sectionwrapper").className = 'sectionwrapper quick_fade_in';
        document.querySelector("#scroll_beans_sectionwrapper2").className = 'sectionwrapper remove_important';
        document.querySelector("#scroll_beans_sectionwrapper3").classList.remove("remove_important");

    }
    list6bool = true;
    this.addEventListener("animationend", addHide(this));
    //this.style.zIndex = "-1";
    Object.assign(this.style, {
        zIndex: "-1",
        position: "relative"
    });
}

function hideList7() {
    console.log("hideList1 hideList1");

    let randomNummer = Math.floor(Math.random() * 4);
    this.classList.add("fall" + randomNummer);

    let randomNummer2 = Math.floor(Math.random() * 4);
    this.querySelector(".bean_subpage").classList.add("rotate" + randomNummer2);

    this.removeEventListener("mouseover", hideList7);
    list7Counter++;

    if (list7Counter == list7.length) {
        document.querySelector("#overlay_assignment3").className = '';
        document.querySelector("#assignment3").className = 'quick_fade_in';
        document.querySelector("#overlay_assignment3").addEventListener("click", function () {
            openProject("http://beansprout.dk/kea/03-content/03-redesign/03_02_08_redesign/");
        });
        /*document.querySelector("#plus2").classList.remove("remove");
        document.querySelector("#plus2").addEventListener("click", function () {

            document.querySelector("#span2").classList.toggle("remove");
            document.querySelector("#span2").classList.toggle("quick_fade_ind");

        });
        */
    }
    list7bool = true;
    this.addEventListener("animationend", addHide(this));
    //this.style.zIndex = "-1";
    Object.assign(this.style, {
        zIndex: "-1",
        position: "relative"
    });
}

function hideList8() {
    console.log("hideList1 hideList1");

    let randomNummer = Math.floor(Math.random() * 4);
    this.classList.add("fall" + randomNummer);

    let randomNummer2 = Math.floor(Math.random() * 4);
    this.querySelector(".bean_subpage").classList.add("rotate" + randomNummer2);

    this.removeEventListener("mouseover", hideList8);
    list8Counter++;

    if (list8Counter == list8.length) {


        document.querySelector("#assignment3_text").className = 'quick_fade_in';
        document.querySelector("#assignment3_headline").addEventListener("click", function () {
            openProject("http://beansprout.dk/kea/03-content/03-redesign/03_02_08_redesign/");
        });

        document.querySelector("#plus3").classList.remove("remove");
        document.querySelector("#plus3").addEventListener("click", function () {

            document.querySelector("#span3").classList.toggle("remove");
            document.querySelector("#span3").classList.toggle("quick_fade_ind");

        });

    }
    list8bool = true;
    this.addEventListener("animationend", addHide(this));
    //this.style.zIndex = "-1";
    Object.assign(this.style, {
        zIndex: "-1",
        position: "relative"
    });
}

function hideList9() {
    console.log("hideList1 hideList1");

    let randomNummer = Math.floor(Math.random() * 4);
    this.classList.add("fall" + randomNummer);

    let randomNummer2 = Math.floor(Math.random() * 4);
    this.querySelector(".bean_subpage").classList.add("rotate" + randomNummer2);

    this.removeEventListener("mouseover", hideList9);
    list9Counter++;

    if (list9Counter == list9.length) {
        document.querySelector("#list4_sectionwrapper").className = 'sectionwrapper quick_fade_in';
        document.querySelector("#scroll_beans_sectionwrapper3").className = 'sectionwrapper remove_important';


    }
    list9bool = true;
    this.addEventListener("animationend", addHide(this));
    //this.style.zIndex = "-1";
    Object.assign(this.style, {
        zIndex: "-1",
        position: "relative"
    });
}

function hideList10() {
    console.log("hideList1 hideList1");

    let randomNummer = Math.floor(Math.random() * 4);
    this.classList.add("fall" + randomNummer);

    let randomNummer2 = Math.floor(Math.random() * 4);
    this.querySelector(".bean_subpage").classList.add("rotate" + randomNummer2);

    this.removeEventListener("mouseover", hideList10);
    list10Counter++;

    if (list10Counter == list10.length) {
        document.querySelector("#assignment4_text").className = 'quick_fade_in';
        document.querySelector("#assignment4_headline").addEventListener("click", function () {
            openProject("https://xd.adobe.com/view/477c0e24-d543-4762-6894-6e9311cf9677-314d/?hints=off");
        });

        document.querySelector("#plus4").classList.remove("remove");
        document.querySelector("#plus4").addEventListener("click", function () {

            document.querySelector("#span4").classList.toggle("remove");
            document.querySelector("#span4").classList.toggle("quick_fade_ind");

        });


    }
    list10bool = true;
    this.addEventListener("animationend", addHide(this));
    //this.style.zIndex = "-1";
    Object.assign(this.style, {
        zIndex: "-1",
        position: "relative"
    });
}

function hideList11() {
    console.log("hideList1 hideList1");

    let randomNummer = Math.floor(Math.random() * 4);
    this.classList.add("fall" + randomNummer);

    let randomNummer2 = Math.floor(Math.random() * 4);
    this.querySelector(".bean_subpage").classList.add("rotate" + randomNummer2);

    this.removeEventListener("mouseover", hideList11);
    list11Counter++;

    if (list11Counter == list11.length) {
        document.querySelector("#overlay_assignment4").className = '';
        document.querySelector("#assignment4").className = 'quick_fade_in';
        document.querySelector("#overlay_assignment4").addEventListener("click", function () {
            openProject("https://xd.adobe.com/view/477c0e24-d543-4762-6894-6e9311cf9677-314d/?hints=off");
        });

    }
    list11bool = true;
    this.addEventListener("animationend", addHide(this));
    //this.style.zIndex = "-1";
    Object.assign(this.style, {
        zIndex: "-1",
        position: "relative"
    });
}
/*
function hideList(assignment, listCounter, ele) {
    listCounter++;

    console.log(ele + "hideList1");
    console.log(listCounter + "listCounter");
    let randomNummer = Math.floor(Math.random() * 4);
    ele.classList.add("fall" + randomNummer);

    let randomNummer2 = Math.floor(Math.random() * 4);
    ele.querySelector(".bean_subpage").classList.add("rotate" + randomNummer2);

    //this.removeEventListener("mouseover", hideList1);
    listCounter++;

    if (listCounter == list1.length) {
        document.querySelector(assignment).classList.remove("remove");
    }
    ele.addEventListener("animationend", addHide(ele));
    //this.style.zIndex = "-1";
    Object.assign(ele.style, {
        zIndex: "-1",
        position: "relative"
    });
}
*/

function mobile() {
    x = document.getElementsByClassName("bean_container");
    console.log(click);
    if (!click) {
        document.querySelector("#click_msg").classList.remove("remove");
    }

    /*for (i = 0; i < x.length; i++) {
    x[i].addEventListener("mouseover", hide);
    x[i].style.zIndex = "1";
}*/
    document.querySelector("#beans").addEventListener("click", hideAll);
}

function hideThis() {
    this.classList.add("hide");
    this.removeEventListener("animationend", hideThis);
}

function hideAll() {
    document.querySelector("#beans").removeEventListener("click", hideAll);
    for (i = 0; i < x.length; i++) {
        let randomNummer = Math.floor(Math.random() * 4);
        x[i].classList.add("fall" + randomNummer);

        let randomNummer2 = Math.floor(Math.random() * 4);
        x[i].querySelector(".bean").classList.add("rotate" + randomNummer2);
        x[i].addEventListener("animationend", hideThis);
    }
    if (arrCounter == 0) {
        console.log("hide click hide")
        document.querySelector("#click_msg").classList.add("remove");
        click = true;
    }
    if (arrCounter == 9) {
        Object.assign(document.querySelector("#headlines").style, {
            fontSize: "20vw"
        });
    }

    if (arrCounter == 10) {
        arrCounter = 0;
        Object.assign(document.querySelector("#headlines").style, {
            fontSize: "4vw"
        });
    }
    document.querySelector("#headlines").className = 'headline fade_in_mobile pos' + arrCounter;
    document.querySelector("#headlines").innerHTML = textArr[arrCounter];
    arrCounter++;
    setTimeout(hideMobile, 5000);
}

function hideMobile() {
    document.querySelector("#headlines").className = 'headline remove';
    for (i = 0; i < x.length; i++) {
        x[i].className = 'bean_container';
        x[i].querySelector(".bean").className = 'bean fade_in_bean';
    }
    setTimeout(resetBeansMobile, 1000);
}

function resetBeansMobile() {
    counter = 0;
    document.querySelector("#headlines").className = 'headline remove';
    for (i = 0; i < x.length; i++) {
        x[i].querySelector(".bean").className = 'bean';
    }
    sidenVises();
}

function mobile_subpage() {
    document.querySelector("#list1_sectionwrapper").className = 'sectionwrapper quick_fade_in';
    document.querySelector("#scroll_beans_sectionwrapper").className = 'sectionwrapper quick_fade_in';

    if (unfold1) {
        document.querySelector("#list2_sectionwrapper").className = 'sectionwrapper quick_fade_in';
    }

    if (unfold2) {
        document.querySelector("#list3_sectionwrapper").className = 'sectionwrapper quick_fade_in';
    }
    if (unfold3) {
        document.querySelector("#list4_sectionwrapper").className = 'sectionwrapper quick_fade_in';
    }


    document.querySelector("#list1_col1").addEventListener("click", function () {
        hideAllMobile("#list1_col1", "container_list1", "#assignment1", "http://beansprout.dk/kea/02-animation/spil/index.html", "#overlay_assignment1");
    });
    document.querySelector("#list1_col1").addEventListener("animationend", function () {
        spanMobile("1");
    });


    document.querySelector("#list1_col2").addEventListener("click", function () {
        hideAllMobile("#list1_col2", "container_list2", "#assignment1_text", "http://beansprout.dk/kea/02-animation/spil/index.html", "#assignment1_headline");
    });

    document.querySelector("#scroll_beans_sectionwrapper").addEventListener("click", function () {
        hideAllMobile("#scroll_beans_sectionwrapper", "container_list3", null, null, null);
        setTimeout(pageUnfoldMobile1, 2000);
    });



    //list1 = initiateBeans(list1, "container_list1", hideList1);
}

function pageUnfoldMobile1() {
    document.querySelector("#list2_sectionwrapper").className = 'sectionwrapper quick_fade_in';
    document.querySelector("#list2_col1").addEventListener("click", function () {
        hideAllMobile("#list2_col1", "container_list4", "#assignment2", "http://beansprout.dk/kea/01-web/04-responsive/01_04_02_responsive_site_v2/", "#assignment2_text");
    });


    document.querySelector("#list2_col2").addEventListener("click", function () {
        hideAllMobile("#list2_col2", "container_list5", "#assignment2_text", "http://beansprout.dk/kea/01-web/04-responsive/01_04_02_responsive_site_v2/", "#overlay_assignment2");
    });
    unfold1 = true;
    document.querySelector("#scroll_beans_sectionwrapper2").className = 'sectionwrapper quick_fade_in';
    document.querySelector("#scroll_beans_sectionwrapper2").addEventListener("click", function () {
        hideAllMobile("#scroll_beans_sectionwrapper2", "container_list6", null, null, null);
        setTimeout(pageUnfoldMobile2, 2000);
    });

    document.querySelector("#list2_col1").addEventListener("animationend", function () {
        spanMobile("2");
    });
}


function pageUnfoldMobile2() {
    console.log("pageUnfoldMobile2 pageUnfoldMobile2")
    document.querySelector("#list3_sectionwrapper").className = 'sectionwrapper quick_fade_in';
    document.querySelector("#list3_col1").addEventListener("click", function () {
        hideAllMobile("#list3_col1", "container_list7", "#assignment3", "http://beansprout.dk/kea/03-content/03-redesign/03_02_08_redesign/", "#assignment3_text");
    });


    document.querySelector("#list3_col2").addEventListener("click", function () {
        hideAllMobile("#list3_col2", "container_list8", "#assignment3_text", "http://beansprout.dk/kea/03-content/03-redesign/03_02_08_redesign/", "#overlay_assignment3");
    });
    unfold2 = true;
    document.querySelector("#scroll_beans_sectionwrapper3").className = 'sectionwrapper quick_fade_in';
    document.querySelector("#scroll_beans_sectionwrapper3").addEventListener("click", function () {
        hideAllMobile("#scroll_beans_sectionwrapper3", "container_list9", null, null, null);
        setTimeout(pageUnfoldMobile3, 2000);
    });

    document.querySelector("#list3_col1").addEventListener("animationend", function () {
        spanMobile("3");
    });
}

function pageUnfoldMobile3() {
    console.log("pageUnfoldMobile3 pageUnfoldMobile3")
    document.querySelector("#list4_sectionwrapper").className = 'sectionwrapper quick_fade_in';
    document.querySelector("#list4_col1").addEventListener("click", function () {
        hideAllMobile("#list4_col1", "container_list10", "#assignment4", "https://xd.adobe.com/view/477c0e24-d543-4762-6894-6e9311cf9677-314d/?hints=off", "#assignment4_text");
    });


    document.querySelector("#list4_col2").addEventListener("click", function () {
        hideAllMobile("#list4_col2", "container_list11", "#assignment4_text", "https://xd.adobe.com/view/477c0e24-d543-4762-6894-6e9311cf9677-314d/?hints=off/", "#overlay_assignment4");
    });
    unfold3 = true;
    document.querySelector("#list4_col1").addEventListener("animationend", function () {
        spanMobile("4");
    });

    /* document.querySelector("#scroll_beans_sectionwrapper").addEventListener("click", function () {
         hideAllMobile("#scroll_beans_sectionwrapper2", "container_list6", null, null, null);
         setTimeout(pageUnfoldMobile2, 2000);
     });*/
}


function hideAllMobile(idSection, idContainer, assignment, url, urlClick) {
    document.querySelector(idSection).removeEventListener("click", hideAll);
    y = document.getElementsByClassName(idContainer);
    for (i = 0; i < y.length; i++) {
        let randomNummer = Math.floor(Math.random() * 4);
        y[i].classList.add("fall" + randomNummer);

        let randomNummer2 = Math.floor(Math.random() * 4);
        y[i].querySelector(".bean_subpage").classList.add("rotate" + randomNummer2);
    }
    /* setTimeout(function () {
         removeMobile(idContainer, assignment);
     }, 1000);*/
    y[1].addEventListener("animationend", function () {
        removeMobile(idContainer, assignment, url, urlClick);
    });
}

function removeMobile(idContainer, assignment, url, urlClick) {
    if (assignment != null) {
        document.querySelector(assignment).className = 'quick_fade_in';
        if (!assignment.endsWith("text")) {
            document.querySelector("#overlay_" + assignment.substring(1, assignment.length)).className = '';
        }
    }

    y = document.getElementsByClassName(idContainer);
    for (i = 0; i < y.length; i++) {
        y[i].classList.add("remove");
    }

    /* document.querySelector("." + idContainer).addEventListener("click", function () {
         openProject(url);
     });*/
    if (url != null || urlClick != null) {
        document.querySelector(urlClick).addEventListener("click", function () {
            window.open(url, '_blank');
        });
    }
}

function spanMobile(s) {
    document.querySelector("#plus" + s).classList.remove("remove");
    document.querySelector("#plus" + s).addEventListener("click", function () {

        document.querySelector("#span" + s).classList.toggle("remove");
        document.querySelector("#span" + s).classList.toggle("quick_fade_ind");

    });
}

function square() {
    console.log("square");
    document.querySelector("#square").removeEventListener("click", square);
    document.querySelector("#beans_sectionwrapper").className = 'sectionwrapper quick_fade_out';


    document.querySelector("#burger").classList.add("remove_important");
    document.querySelector("#line5").classList.add("quick_fade_out");
    document.querySelector("#line6").classList.add("quick_fade_out");
    setTimeout(squarePageLoad, 500);

}

function squarePageLoad() {
    console.log("squarePageLoad");
    document.querySelector("#line5").className = "line remove";
    document.querySelector("#line6").className = "line remove";
    document.querySelector("#line3").className = "line line3 square_ani_1";
    document.querySelector("#line4").className = "line line4 square_ani_2";

    document.querySelector("#beans_sectionwrapper").classList.add("remove_important");
    document.querySelector("#cv").className = 'quick_fade_in';
    setTimeout(squareAnimationFinish, 500);
}

function squareAnimationFinish() {
    console.log("squareAnimationFinish");
    document.querySelector("#line3").className = "line square_ani_1_pos";
    document.querySelector("#line4").className = "line square_ani_2_pos";

    document.querySelector("#square").addEventListener("click", squareCross);

}

function squareCross() {
    console.log("squareCross");
    document.querySelector("#square").removeEventListener("click", squareCross);
    document.querySelector("#line3").className = "line square_ani_1_return";
    document.querySelector("#line4").className = "line square_ani_2_return";


    document.querySelector("#line5").className = "line quick_fade_in";
    document.querySelector("#line6").className = "line quick_fade_in";

    document.querySelector("#cv").className = 'quick_fade_out';
    document.querySelector("#burger").className = 'quick_fade_in';
    setTimeout(squareReturn, 500);
}

function squareReturn() {
    console.log("squareReturn");
    document.querySelector("#line3").className = "line line3";
    document.querySelector("#line4").className = "line line4";
    document.querySelector("#cv").className = 'remove_important';
    document.querySelector("#beans_sectionwrapper").className = 'sectionwrapper quick_fade_in';
    document.querySelector("#square").addEventListener("click", square);
}

function burger() {
    console.log("burger");
    //document.querySelector("#show_subpage").classList.remove("remove");
    document.querySelector("#show_subpage").className = 'quick_fade_in';
    document.querySelector("#beans_sectionwrapper").className = 'sectionwrapper quick_fade_out';
    document.querySelector("#burger").removeEventListener("click", burger);
    document.querySelector("#line1").className = 'line burger_ani_1';
    document.querySelector("#line2").className = 'line burger_ani_2';
    document.querySelector("#square").className = 'hide';
    document.querySelector("#click_msg").classList.add("remove");
    setTimeout(burgerSubpageLoad, 500);
}

function burgerSubpageLoad() {
    if (window.innerWidth <= 699) {

        console.log("mobile mobile");
        mobile_subpage();

    } else if (window.innerWidth > 699) {
        desktop_subpage();
    }
    console.log("burgerCross");
    document.querySelector("#beans_sectionwrapper").classList.add("remove_important");


    document.querySelector("#line1").className = 'line rotatePos1';
    document.querySelector("#line2").className = 'line rotatePos2';

    setTimeout(burgerCross, 500);
}

function burgerCross() {
    document.querySelector("#burger").addEventListener("click", burgerReturn);
}

function burgerReturn() {
    console.log("burgerReturn");
    //document.querySelector("#beans").className = 'quick_fade_in';
    /*document.querySelector("#list1_sectionwrapper").className = 'sectionwrapper quick_fade_out';
    if (list3Counter == 3) {
        document.querySelector("#list2_sectionwrapper").className = 'sectionwrapper quick_fade_out';
    } else {
        document.querySelector("#scroll_beans_sectionwrapper").className = 'sectionwrapper quick_fade_out';
    }
    if (unfold1) {
        document.querySelector("#list2_sectionwrapper").className = 'sectionwrapper quick_fade_out';
    } else {
        document.querySelector("#scroll_beans_sectionwrapper").className = 'sectionwrapper quick_fade_out';
    }*/

    document.querySelector("#burger").removeEventListener("click", burgerReturn);
    document.querySelector("#line1").className = 'line burger_ani_1_return';
    document.querySelector("#line2").className = 'line burger_ani_2_return';
    document.querySelector("#line1").addEventListener("animationend", burgerFrontpageLoad);
    //setTimeout(burgerFrontpageLoad, 500);
    document.querySelector("#show_subpage").className = 'quick_fade_out';
}

function burgerFrontpageLoad() {
    document.querySelector("#show_subpage").classList.add("remove_important");
    document.querySelector("#beans_sectionwrapper").className = 'sectionwrapper quick_fade_in';
    setTimeout(burgerStraight, 500);
}

function burgerStraight() {
    console.log("burgerStraight");
    document.querySelector("#burger").addEventListener("click", burger);
    document.querySelector("#line1").className = 'line';
    document.querySelector("#line2").className = 'line';
    document.querySelector("#square").className = '';
}

function openProject(url) {
    var project = window.open(url, '_blank');
    project.focus();
}
