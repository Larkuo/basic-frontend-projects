function onClickImage (input_id) {
    const divs = ['i-1', 'i-2', 'i-3', 'i-4', 'i-5']
    const btns = ['a-1', 'a-2', 'a-3', 'a-4', 'a-5']

    divs.map((id, index) => {
        if(input_id === id){
            document.getElementById(id).className = 'img-lg'
            document.getElementById(btns[index]).style.display = 'block'
        }else{
            document.getElementById(id).className = 'img-sm'
            document.getElementById(btns[index]).style.display = 'none'
        }
    });
}