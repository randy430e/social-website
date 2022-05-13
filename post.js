const placeholder = document.querySelector('.placeholder');
const input = document.querySelector('.edit-input');
const counterLimit = document.querySelector('.counter-limit');
const postBtn = document.querySelector('.post-btn');

let limit = 300;

input.addEventListener('keyup',function(){
    const inputLength = input.textContent.length;
    if(inputLength > 0){
        placeholder.style.display = 'none';
        const limitNum = counterLimit.textContent = limit - inputLength;
        counterLimit.style.visibility = 'visible';
        postBtn.classList.add('active');

        if(limitNum < 0){
            counterLimit.style.color = 'red';
            postBtn.classList.remove('active');
        }else{
            counterLimit.style.color = '#000'
        }
    }else{
        placeholder.style.display = 'block';
        counterLimit.textContent = limit;
        counterLimit.style.visibility = 'hidden';
        postBtn.classList.remove('active');
    }
})

//Post button prevents user from sending a post
//When the limit counter is less than or equal to zero
postBtn.addEventListener('click',function(e){
    e.preventDefault();
    //Updates limit counter variable
    let counterVal = counterLimit.innerHTML;
    if(counterVal > 0){
        return true;
    }else{
        return false;
    }
})
