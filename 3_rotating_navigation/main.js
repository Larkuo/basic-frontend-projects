function moveMenuButtons(rotate){
    const menu_dict_arr = [
        {id: 'home-button', yes: 'home-yes-rotate', no: 'home-no-rotate'},
        {id: 'about-button', yes: 'about-yes-rotate', no: 'about-no-rotate'},
        {id: 'contact-button', yes: 'contact-yes-rotate', no: 'contact-no-rotate'}
    ]
    
    menu_dict_arr.map(dict => {
        let element = document.getElementById(dict.id);
        if(rotate) {
            element.className = "menu-label " + dict.yes;
        }else {
            element.className = "menu-label " + dict.no;
        }
    });
    
}

function onClickMenu() {
    let semi_circle = document.getElementById('rotate-div');
    let main_page = document.getElementById('white-div-main');

    if(semi_circle.className === 'yes-rotate'){
        semi_circle.className = 'no-rotate';
        main_page.className = 'no-rotate-white-div';
        moveMenuButtons(false);
    }else {
        semi_circle.className = 'yes-rotate';
        main_page.className = 'yes-rotate-white-div';
        moveMenuButtons(true);
    }

}