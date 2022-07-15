document.addEventListener('DOMContentLoaded', function(){
    // Section 1
    let sec1Btn1 = document.getElementById('sec1-btn1');
    let sec1Input = document.getElementById('sec1-input');
    sec1Btn1.addEventListener('click', function(){
        if (sec1Input.value === '') {
            alert('No alert text has been entered!');
        } else {
            alert(sec1Input.value);
        }
    });
    // End Section 1


    // Section 2
    let sec2Btn1 = document.getElementById('sec2-btn1');
    let sec2contentarea = document.getElementById('sec2-contentarea');
    sec2Btn1.addEventListener('click', function(){
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
    });
    // End Section 2


    // Section 3
    let sec3Btn1 = document.getElementById('sec3-btn1');
    let sec3Btn2 = document.getElementById('sec3-btn2');
    let sec3input = document.getElementById('sec3-input');
    let sec3contentarea = document.getElementById('sec3-contentarea');
    let sec3p = document.createElement('p');
    sec3contentarea.appendChild(sec3p);
    sec3Btn1.addEventListener('click', function(){
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
        sec3p.textContent = `${celsius} degress celsius is equal to  ${fahrenheit} degress fahrenheit`;
        sec3input.value = '';
    });
    sec3Btn2.addEventListener('click', function(){
        sec3p.textContent = '';
    });
    // End Section 3


    // Section 4
    let sec4Btn1 = document.getElementById('sec4-btn1');
    let sec4Btn2 = document.getElementById('sec4-btn2');
    let sec4input1 = document.getElementById('sec4-input1');
    let sec4select1 = document.getElementById('sec4-select1');
    let sec4contentarea = document.getElementById('sec4-contentarea');
    sec4Btn1.addEventListener('click', function(){
        if (sec4input1.value === '') {
            alert('No value has been entered!');
            return;
        }
        if (isNaN(sec4input1.value)) {
            alert('A non-numeric value was entered!');
            return;
        }
        let color = sec4select1.options[sec4select1.selectedIndex].value;
        for (let i = 0; i < parseInt(sec4input1.value); i++) {
            let box = document.createElement('div');
            box.style.margin = '5px';
            box.style.background = color;
            box.style.display = 'inline-block';
            box.style.width = '60px';
            box.style.height = '60px';
            box.onmouseover = function() {
                box.style.cursor = 'pointer';
            }
            box.addEventListener('click', function(){
                sec4contentarea.removeChild(box);
            });
            sec4contentarea.appendChild(box);
        }
    });
    sec4Btn2.addEventListener('click', function(){
        let sec4boxes = sec4contentarea.getElementsByTagName('div');
        for (let i = sec4boxes.length - 1; i >= 0; i--) {
            console.log(i);
            sec4contentarea.removeChild(sec4boxes[i]);
        }
    });
    // End Section 4


    // Section 5
    let sec5input = document.getElementById('sec5-input');
    let sec5contentarea = document.getElementById('sec5-contentarea');
    let span = document.createElement('span');
    span.style.fontWeight='bold';
    span.style.fontSize = '60px';
    sec5contentarea.appendChild(span);
    sec5input.addEventListener('keydown', (event) => {
        const keyName = event.key;
        span.textContent = keyName;
    }, false);
    sec5input.addEventListener('keyup', (event) => {
        sec5input.value = '';
    }, false);
    // End Section 5


    // Section 6
    let sec6btn1 = document.getElementById('sec6-btn1');
    let sec6btn2 = document.getElementById('sec6-btn2');
    let sec6contentarea = document.getElementById('sec6-contentarea');
    sec6btn1.addEventListener('click', function(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(function(resp){
                return resp.json();
            })
            .then(function(json){
                let sec6ui = document.createElement('ui');
                for(let i = 0; i < json.length; i++) {
                    let li = document.createElement('li');
                    let textName = json[i].name;
                    let textEmail = json[i].email;
                    li.textContent = `${textName}, ${textEmail}`;
                    sec6ui.appendChild(li);
                }
                sec6contentarea.appendChild(sec6ui);
                sec6btn1.disabled = true;
            });
    });
    sec6btn2.addEventListener('click', function(){
        let sec6ui = sec6contentarea.getElementsByTagName('ui')[0];
        sec6contentarea.removeChild(sec6ui);
        sec6btn1.disabled = false;
    });
    // End Section 6


    // Section 7
    let sec7btn1 = document.getElementById('sec7-btn1');
    let sec7btn2 = document.getElementById('sec7-btn2');
    let sec7contentarea = document.getElementById('sec7-contentarea');
    sec7btn1.addEventListener('click', function(){
        let ajaxReq = new XMLHttpRequest();
        ajaxReq.onreadystatechange = function(){
            if (ajaxReq.readyState === 4 && ajaxReq.status === 200) {
                let resp = JSON.parse(ajaxReq.responseText);
                let sec7ui = document.createElement('ui');
                for(var i = 0; i < resp.length; i++) {
                    let li = document.createElement('li');
                    let textName = resp[i].name;
                    let textEmail = resp[i].email;
                    li.textContent = `${textName}, ${textEmail}`;
                    sec7ui.appendChild(li);
                }
                sec7contentarea.appendChild(sec7ui);
            }
        }
        ajaxReq.open('GET', 'https://jsonplaceholder.typicode.com/users');
        ajaxReq.send();
        sec7btn1.disabled = true;
    });
    sec7btn2.addEventListener('click', function(){
        let sec7ui = sec7contentarea.getElementsByTagName('ui')[0];
        sec7contentarea.removeChild(sec7ui);
        sec7btn1.disabled = false;
    });
    // End Section 7
});