
//DECLARE CONST

const nav_info_btn = document.getElementById("nav-info-btn");
const window_info_btn = document.getElementById("window-info-btn");
const info_window = document.getElementById("info-window");
const info_content = document.getElementById("window");

const left_section = document.getElementById("left-section");
const right_section = document.getElementById("right-section");

const left_input = document.querySelector(".left-input");
const right_input = document.querySelector(".right-input");

const swift_btn = document.getElementById("switch-btn");

const lightmode_btn = document.getElementById("light-mode");
const darkmode_btn = document.getElementById("dark-mode");

const root = document.documentElement;




// DECLARE FUNCTION

function RenderPLtoPJM(){
    
    left_section.innerHTML = "";
    left_section.innerHTML = `
    <input id="left_slide" class="left_slide" type="range" min="2" max="10" value="3">
    <textarea id="pl-input" class="pl-input" type="text" spellcheck="false" onkeypress="return /[a-z, ,ą,ę,ś,ć,ł,ó,ż,ź]/i.test(event.key)" placeholder="Język Polski"></textarea> 
    
    <div class="lernmode-section">
        <input id="check-box" class="check-box" type="checkbox">
        <div id="check-name" class="check-name">Tryb uczenia <i>(ukryj wprowadzany tekst)</i><div>
    </div>
    `;

    right_section.innerHTML = "";
    right_section.innerHTML = `
    <input id="right_slide" class="right_slide" type="range" min="2" max="25" value="5">
    <textarea readonly id="pjm-input" class="pjm-input" type="text" spellcheck="false" placeholder="pjm"></textarea>
    <div class="symetria"></div>
    `;


    var leftfontslider = document.getElementById("left_slide");
    leftfontslider.addEventListener('input', function(){
        leftfontslider.step = 0.1;
        var leftfont = leftfontslider.value;
        console.log(leftfont);
        document.getElementById("pl-input").style.fontSize = leftfont + "rem";
    })

    var rightfontslider = document.getElementById("right_slide");
    rightfontslider.addEventListener('input', function(){
        rightfontslider.step = 0.1;
        var rightfont = rightfontslider.value;
        console.log(rightfont);
        document.getElementById("pjm-input").style.fontSize = rightfont + "rem";
    })

    let checkbox = document.getElementById("check-box");

    checkbox.onclick = function(){
        if(checkbox.checked == false && lightmode_btn.classList.contains("light-mode-on")){
            document.getElementById("pl-input").style.color = "black";
        }
        else if(checkbox.checked == false && darkmode_btn.classList.contains("dark-mode-on")){
            document.getElementById("pl-input").style.color = "white";
        }

        if(checkbox.checked == true){
            document.getElementById("pl-input").style.color = "transparent";  
        }

    }

}


function RenderPJMtoPL(){

    left_section.innerHTML = "";
    left_section.innerHTML =`
    <input id="left_slide" class="right_slide" type="range" min="2" max="25" value="5">
    <textarea id="pjm-input" class="pjm-input" type="text" spellcheck="false" onkeypress="return /[a-z, ,ą,ę,ś,ć,ł,ó,ż,ź]/i.test(event.key)" placeholder="PJM"></textarea>
    <div class="symetria"></div>
    `; 

    right_section.innerHTML = "";
    right_section.innerHTML = `
    <input id="right_slide" class="right_slide" type="range" min="2" max="10" value="3">
    <textarea readonly id="pl-input" class="pl-input" type="text" spellcheck="false" placeholder="Język Polski"></textarea> 
    <div class="symetria"></div>
    `;

    var leftfontslider = document.getElementById("left_slide");
        leftfontslider.addEventListener('input', function(){
            leftfontslider.step = 0.1;
            var leftfont = leftfontslider.value;
            console.log(leftfont);
            document.getElementById("pjm-input").style.fontSize = leftfont + "rem";
        })

        var rightfontslider = document.getElementById("right_slide");
        rightfontslider.addEventListener('input', function(){
            rightfontslider.step = 0.1;
            var rightfont = rightfontslider.value;
            console.log(rightfont);
            document.getElementById("pl-input").style.fontSize = rightfont + "rem";
        })

}


//MAIN PROGRAM



window.onload = function(){

    RenderPLtoPJM();
}

window_info_btn.onclick = function(){
    if(info_window.classList.contains("info-window-on")){
        info_window.classList.remove("info-window-on")
        info_window.classList.toggle("info-window-off")
    }
}

nav_info_btn.onclick = function(){
    if(info_window.classList.contains("info-window-off")){
        info_window.classList.remove("info-window-off")
        info_window.classList.toggle("info-window-on")
    }
}

swift_btn.onclick = function(){
    if(swift_btn.classList.contains("button-pl-to-pjm")){
        swift_btn.classList.remove("button-pl-to-pjm");
        swift_btn.classList.toggle("button-pjm-to-pl"); 

        RenderPJMtoPL();   
    }

    else if(swift_btn.classList.contains("button-pjm-to-pl")){
        swift_btn.classList.remove("button-pjm-to-pl");
        swift_btn.classList.toggle("button-pl-to-pjm"); 

        RenderPLtoPJM();
    }
}

addEventListener('keyup', function(){
    var pl_input = document.getElementById("pl-input");
    var pjm_input = document.getElementById("pjm-input");

    if(swift_btn.classList.contains("button-pl-to-pjm")){
        pjm_input.value = pl_input.value;
    }
    else if(swift_btn.classList.contains("button-pjm-to-pl")){
        pl_input.value = pjm_input.value;
    }
    
});

lightmode_btn.onclick = function(){
    if(lightmode_btn.classList.contains("light-mode-off")){
        
        lightmode_btn.classList.remove("light-mode-off");
        lightmode_btn.classList.toggle("light-mode-on");
        
        darkmode_btn.classList.remove("dark-mode-on");
        darkmode_btn.classList.toggle("dark-mode-off");

        root.style.setProperty("--background-color", "white");
        root.style.setProperty("--input-color", "white");
        root.style.setProperty("--font-color", "black");
        root.style.setProperty("--hoover-color", "black");

        info_content.style.backgroundColor = "white";


        let checkbox = document.getElementById("check-box");

        if(checkbox.checked == false && lightmode_btn.classList.contains("light-mode-on")){
            document.getElementById("pl-input").style.color = "black";
        }
        else if(checkbox.checked == false && darkmode_btn.classList.contains("dark-mode-on")){
            document.getElementById("pl-input").style.color = "white";
        }

        if(checkbox.checked == true){
            document.getElementById("pl-input").style.color = "transparent";  
        }
    }
};

darkmode_btn.onclick = function(){
    if(darkmode_btn.classList.contains("dark-mode-off")){
        
        darkmode_btn.classList.remove("dark-mode-off");
        darkmode_btn.classList.toggle("dark-mode-on");  

        lightmode_btn.classList.remove("light-mode-on");
        lightmode_btn.classList.toggle("light-mode-off");

        root.style.setProperty("--background-color", "#393938");
        root.style.setProperty("--input-color", "#393938");
        root.style.setProperty("--font-color", "white");
        root.style.setProperty("--hoover-color", "white");

        info_content.style.backgroundColor = "#393938";


        let checkbox = document.getElementById("check-box");

        if(checkbox.checked == false && lightmode_btn.classList.contains("light-mode-on")){
            document.getElementById("pl-input").style.color = "black";
        }
        else if(checkbox.checked == false && darkmode_btn.classList.contains("dark-mode-on")){
            document.getElementById("pl-input").style.color = "white";
        }

        if(checkbox.checked == true){
            document.getElementById("pl-input").style.color = "transparent";  
        }

    }
};





