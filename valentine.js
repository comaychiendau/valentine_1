let clickCounter = 0;



function no_button(){
    clickCounter = clickCounter + 1;

    if (clickCounter == 1) {
        let para = document.createElement('h3');
        para.id = 'para'; 
        let text_1 = document.createTextNode('Cậu vừa bấm chọn cái gì vậy??? Chọn lại ik');

        para.style.color = 'Black';
        para.style.fontFamily = 'Merriweather, serif';
        para.style.fontSize = '30px';

        para.style.textAlign = 'center';
        para.appendChild(text_1);
        document.body.appendChild(para);

        let picture_1 = document.getElementById('pic');
        picture_1.src = 'vuluc.jpeg';

        let first_click_no = document.getElementById('no');
        first_click_no.style.padding = '15px 30px';

        let first_click_yes = document.getElementById('yes');
        first_click_yes.style.padding = '30px 50px';
    } else if (clickCounter == 2){
        let text_1 = document.getElementById('para'); 
        text_1.parentNode.removeChild(text_1);
        let para_1 = document.createElement('h3');
        para_1.id = 'para';
        let text_2 = document.createTextNode('Hình như có gì đây hơi sai sai nhỉ :)');

        para_1.style.color = 'Black';
        para_1.style.fontFamily = 'Merriweather, serif';
        para_1.style.fontSize = '30px';
        para_1.style.textAlign = 'center';
        para_1.appendChild(text_2);
        document.body.appendChild(para_1);

        let picture_2 = document.getElementById('pic');
        picture_2.src = 'vuluc2.jpg';

        let first_click_no = document.getElementById('no');
        first_click_no.style.padding = '10px 25px';

        let first_click_yes = document.getElementById('yes');
        first_click_yes.style.padding = '35px 55px';
    } else if (clickCounter == 3){
        let text_2 = document.getElementById('para');
        text_2.parentNode.removeChild(text_2);
        let para_2 = document.createElement('h3');
        para_2.id = 'para';
        let text_3 = document.createTextNode('Cái gì vậy má!!!!!');

        para_2.style.color = 'Black';
        para_2.style.fontFamily = 'Merriweather, serif';
        para_2.style.fontSize = '30px';
        para_2.style.textAlign = 'center';
        para_2.appendChild(text_3);
        document.body.appendChild(para_2);

        let picture_3 = document.getElementById('pic');
        picture_3.src = 'danh.jpg';

        let first_click_no = document.getElementById('no');
        first_click_no.style.padding = '5px 20px';

        let first_click_yes = document.getElementById('yes');
        first_click_yes.style.padding = '40px 60px';
    } else if (clickCounter == 4){
        let text_3 = document.getElementById('para');
        text_3.parentNode.removeChild(text_3);
        let para_3 = document.createElement('h3');
        para_3.id = 'para';
        let text_4 = document.createTextNode('Khôy roi` rac.?')

        para_3.style.color = 'Black';
        para_3.style.fontFamily = 'Merriweather, serif';
        para_3.style.fontSize = '30px';
        para_3.style.textAlign = 'center';
        para_3.appendChild(text_4);
        document.body.appendChild(para_3);

        let picture_4 = document.getElementById('pic');
        picture_4.src = 'roirac.jpg';

        let first_click_no = document.getElementById('no');
        first_click_no.style.padding = '3px 15px';

        let first_click_yes = document.getElementById('yes');
        first_click_yes.style.padding = '45px 65px';

    } else if (clickCounter == 5) {
        let text_5 = document.getElementById('para');
        text_5.parentNode.removeChild(text_5);
        let button_noo = document.getElementById('no');
        button_noo.remove();
        let para_4= document.createElement('h3');
        para_4.id = 'para';
        let text_6 = document.createTextNode('OMG, mất tiêu luôn rồi!?!?!?');


        para_4.style.color = 'Black';
        para_4.style.fontFamily = 'Merriweather, serif';
        para_4.style.fontSize = '20px';
    
   
        para_4.style.textAlign = 'center';
        para_4.appendChild(text_6);
        document.body.appendChild(para_4);

        let picture_5 = document.getElementById('pic');
        picture_5.src = 'bienmat.gif';

    }
}

function yes_button(){
    let picture = document.getElementById('pic');
    var new_text = 'hehe tớ cảm ơn Nhím nhé!!!';

    var new_text_1 ='Tớ mong là món quà nhỏ này sẽ khiến cậu cảm thấy vui lên sau những ngày tiêu cực vừa qua. Tớ đã chuẩn bị một vài món quà nhỏ ở bên này rồi, chỉ chờ ngày cậu về nhé. Nhím trong tui hehe'
    new_text_1.style.textAlign = 'center';
    document.getElementById('final_text').innerText = new_text;
    document.getElementById('text_2').innerText = new_text_1;
    picture.src ='Toothless Dragon Dancing Gif Sticker - Toothless dragon Toothless Dancing gif - Discover & Share GIFs.gif';

    let button_yes = document.getElementById('yes');
    button_yes.remove();


    let h3_ele  = document.getElementById('para');
    if (h3_ele){
        h3_ele.parentNode.removeChild(h3_ele);
    }

    let div_fw = document.createElement('div');
    div_fw.id = 'firework';
    div_fw.classList.add('firework');
    document.body.appendChild(div_fw);
    
    let button_no = document.getElementById('no');
    button_no.remove();



}
