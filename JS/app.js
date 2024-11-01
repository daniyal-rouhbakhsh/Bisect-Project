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
