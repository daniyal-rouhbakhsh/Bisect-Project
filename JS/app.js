const formBtn = document.getElementById('form-btn')
const mainForm = document.getElementById('main-form')

formBtn.addEventListener('click',e => {
    e.preventDefault()
})

const isLogin = user => {
    if(user){
        return true
    }
    else{
        return false
    }
}

const registerFeatuer = reg => {
    if(reg){
        return true
    }
    else{
        return false
    }
}

const getmeApi = api => {
    if(api == 'OK'){
        return true
    }
    else{
        return false
    }
}

const likePost = like => {
    if(like){
        return true
    }
    else{
        return false
    }
}

const disLike = dislike => {
    if(dislike){
        return false
    }
    else{
        return true
    }
}