import { handleSubmit } from './js/formHandler'

import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'

window.addEventListener('DOMContentLoaded',()=>{
    const submitButton = document.querySelector('#btn-submit')
    submitButton.addEventListener('click',handleSubmit)
})

export { handleSubmit }