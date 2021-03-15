import { checkForURL } from './URLchecker'

const handleSubmit = async (event) =>{
    event.preventDefault()
    // check what text was put into the form field
    let formText = ''
    try{
        formText = document.getElementById('article-url').value
    }
    catch(error){
        console.log(error)
    }
    
    if(checkForURL(formText)){
        console.log("::: Form Submitted :::")
        postData('http://localhost:3000/sentiment',{url:formText}).then(updateUI)
    }
    else 
        console.log('invalid url')
}

//Async function to post data
const postData = async (url = '', data = {}) => {
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    try {
        const newData = await res.json()
        return newData
    }
    catch (error) {
        console.log('Error', error)
    }
}

//Update UI with the retrieved data 
const updateUI = async (data) => {
    try {
        console.log(data);
        document.querySelector('#model').innerHTML = `model = ${data.model}`
        document.querySelector('#score_tag').innerHTML = `score_tag = ${data.score_tag}`
        document.querySelector('#agreement').innerHTML = `agreement = ${data.agreement}`
        document.querySelector('#subjectivity').innerHTML = `subjectivity = ${data.subjectivity}`
        document.querySelector('#confidence').innerHTML = `confidence = ${data.confidence}`
        document.querySelector('#irony').innerHTML = `irony = ${data.irony}`
        document.querySelector('#sentence_count').innerHTML = `sentence_count = ${data.sentence_count}`
        
    } catch (error) {
        console.log("error", error);
    }
}
export { handleSubmit }
