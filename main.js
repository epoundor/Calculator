const spans =[...document.querySelectorAll('body span')];
const keyCodes=spans.map(span=>span.dataset.key);
const input=document.querySelector('input');

document.addEventListener('click',(e)=>{
    const val=e.target.dataset.key
    operation(val)
})

document.addEventListener('keydown',(e)=>{
    const val=e.keyCode.toString()
    operation(val)
})

function operation(value) {
    if (keyCodes.includes(value)) {
        switch (value) {
            case '13':
                input.value=eval(input.value)
                console.log('object');
            break;
            case '67':
            input.value=""
            break;
            default:

                input.value+=spans[keyCodes.indexOf(value)].textContent
                break;
        }

    }else if (value='8')
    {
        [...input.value].splice(-1)
    }
}


window.addEventListener('error',(e)=>{
    input.value=''
    alert(e)
})