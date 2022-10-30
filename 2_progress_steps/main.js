function handleNext () {
    const num_ids = ['num-1', 'num-2', 'num-3', 'num-4'];
    const bar_ids = ['bar-1', 'bar-2', 'bar-3'];

    let active_arr  = document.getElementsByClassName('num-active');
    let arr_len = active_arr.length;

    let next_button = document.getElementById('next-btn');
    let prev_button = document.getElementById('prev-btn');

    if(arr_len < 4){
        let next_num = document.getElementById(num_ids[arr_len]);
        let next_bar = document.getElementById(bar_ids[arr_len-1]);

        next_bar.style.width = '5rem';
        next_num.className = 'num-active';
    }

    active_arr = document.getElementsByClassName('num-active');
    arr_len = active_arr.length;

    if(arr_len < 4 && arr_len > 1){
        prev_button.disabled = false;
    }else if(arr_len === 4){
        next_button.disabled = true;
        prev_button.disabled = false;
    }
}

function handlePrev () {
    const num_ids = ['num-1', 'num-2', 'num-3', 'num-4'];
    const bar_ids = ['bar-1', 'bar-2', 'bar-3'];

    let active_arr  = document.getElementsByClassName('num-active');
    let arr_len = active_arr.length;

    let next_button = document.getElementById('next-btn');
    let prev_button = document.getElementById('prev-btn');

    if(arr_len < 4 && arr_len > 1){
        prev_button.disabled = false;
    }

    if(arr_len > 1){
        let prev_num = document.getElementById(num_ids[arr_len-1]);
        let prev_bar = document.getElementById(bar_ids[arr_len - 2]);

        prev_bar.style.width = '0rem';
        prev_num.className = 'num-inactive';
    }

    active_arr = document.getElementsByClassName('num-active');
    arr_len = active_arr.length;

    if(arr_len < 4 && arr_len > 1){
        next_button.disabled = false;
    }else if(arr_len === 1){
        next_button.disabled = false;
        prev_button.disabled = true;
    }
}