function onClickMenu() {
    let semi_circle = document.getElementById('rotate-div');
    let main_page = document.getElementById('white-div-main');

    if(semi_circle.className === 'yes-rotate'){
        semi_circle.className = 'no-rotate';
        main_page.className = 'no-rotate-white-div';
    }else {
        semi_circle.className = 'yes-rotate';
        main_page.className = 'yes-rotate-white-div';
    }

}