// Section 1
document.addEventListener('DOMContentLoaded', function(){
    let sec1Btn1 = document.getElementById('sec1-btn1');
    sec1Btn1.addEventListener('click', handleSec1Btn1);
});

function handleSec1Btn1(){
    let sec1Input = document.getElementById('sec1-input');
    if (sec1Input.value === '') {
        alert('No alert text has been entered!');
    } else {
        alert(sec1Input.value);
    }
}


// Section 2
document.addEventListener('DOMContentLoaded', function(){
    let sec2Btn1 = document.getElementById('sec2-btn1');
    sec2Btn1.addEventListener('click', handleSec2Btn1);
});

function handleSec2Btn1(){
    let sec2contentarea = document.getElementById('sec2-contentarea');

    let sec2headline = sec2contentarea.getElementsByTagName('h3')[0];
    sec2headline.textContent = 'Max Zhou';

    let sec2box = document.getElementById('sec2-box');
    sec2box.style.backgroundColor = '#888888';
    sec2box.style.width = '100%';
    sec2box.style.height = '20px';

    let sec2p = sec2contentarea.getElementsByTagName('p')[0];
    sec2p.style.fontWeight='bold';
    sec2p.style.fontStyle = 'italic';
    sec2p.style.fontSize = '12px';

    let sec2img = sec2contentarea.getElementsByTagName('img')[0];
    sec2img.src = './img/hamburger_color_icon.png';
    sec2img.alt = 'Color Hamburger Icon';
    sec2img.style.width = '100px';

    let sec2a = sec2contentarea.getElementsByTagName('a')[0];
    sec2a.href = 'http://www.iit.edu';
    sec2a.text = 'Illinois Tech Website';
    sec2a.style.color = '#cc0000';
    sec2a.style.textDecoration = 'underline';
}


// Section 3
document.addEventListener('DOMContentLoaded', function(){
    let sec3Btn1 = document.getElementById('sec3-btn1');
    let sec3Btn2 = document.getElementById('sec3-btn2');
    sec3Btn1.addEventListener('click', handleSec3Btn1);
    sec3Btn2.addEventListener('click', handleSec3Btn2);
});

function handleSec3Btn1(){
    let sec3input = document.getElementById('sec3-input');
    let sec3contentarea = document.getElementById('sec3-contentarea');
    let celsius = sec3input.value;
    if (celsius === '') {
        alert('No value has been entered!');
        return;
    }
    if (isNaN(celsius)) {
        alert('A non-numeric value was entered!');
        return;
    }
    let fahrenheit = parseFloat(celsius) * 1.8 + 32;
    let sec3p = document.createElement('p');
    sec3p.textContent = `${celsius} degress celsius is equal to  ${fahrenheit} degress fahrenheit`;
    sec3contentarea.appendChild(sec3p);
    sec3input.value = '';
}

function handleSec3Btn2(){
    let sec3contentarea = document.getElementById('sec3-contentarea');
    let sec3p = sec3contentarea.getElementsByTagName('p')[0];
    sec3contentarea.removeChild(sec3p);
}


// Section 4
document.addEventListener('DOMContentLoaded', function(){
    let sec4Btn1 = document.getElementById('sec4-btn1');
    let sec4Btn2 = document.getElementById('sec4-btn2');
    sec4Btn1.addEventListener('click', handleSec4Btn1);
    sec4Btn2.addEventListener('click', handleSec4Btn2);
});

function handleSec4Btn1(){
    let sec4input1 = document.getElementById('sec4-input1');
    if (sec4input1.value === '') {
        alert('No value has been entered!');
        return;
    }
    if (isNaN(sec4input1.value)) {
        alert('A non-numeric value was entered!');
        return;
    }
    let sec4select1 = document.getElementById('sec4-select1');
    let color = sec4select1.options[sec4select1.selectedIndex].value;
    let sec4contentarea = document.getElementById('sec4-contentarea');
    for (let i = 0; i < parseInt(sec4input1.value); i++) {
        let box = document.createElement('div');
        box.style.margin = '5px';
        box.style.background = color;
        box.style.display = 'inline-block';
        box.style.width = '60px';
        box.style.height = '60px';
        box.onmouseover = function() {
            box.style.background = 'grey';
        }
        box.onmouseleave = function() {
            box.style.background = color;
        }
        box.addEventListener('click', function(){
            sec4contentarea.removeChild(box);
        });
        sec4contentarea.appendChild(box);
    }
}

function handleSec4Btn2(){
    let sec4contentarea = document.getElementById('sec4-contentarea');
    let sec4boxes = sec4contentarea.getElementsByTagName('div');
    console.log(sec4boxes.length);
    for (let i = 0; i < sec4contentarea.length; i++) {
        sec4contentarea.removeChild(sec4boxes[i]);
    }
}





// Section 5









// Section 6











// Section 7
