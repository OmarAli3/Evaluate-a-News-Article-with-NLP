
const handleSubmit = () =>{
    // check what text was put into the form field
    let formText = document.getElementById('name').value
    if(checkForUrl(formText)){
        console.log("::: Form Submitted :::")
        postData('http://localhost:3000/sentiment',formText).then(updateUI)
    }
    else 
        console.log('invalid url')
}

//Async function to post data
const postData = async (url = '', data = {}) => {
    const res = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    try {
        const newData = await res.json();
        return newData;
    }
    catch (error) {
        console.log('Error', error);
    }
}

//Update UI with the retrieved data 
export const updateUI = async () => {
    const request = await fetch('/all');
    try {
        const allData = await request.json();
        console.log(allData);
        document.querySelector('#sentence_count').innerHTML = allData.sentence_count;
        document.querySelector('#score_tag').innerHTML = allData.score_tag;
        document.querySelector('#agreement').innerHTML = allData.agreement;
        document.querySelector('#subjectivity').innerHTML = allData.subjectivity;
        document.querySelector('#confidence').innerHTML = allData.confidence;
        document.querySelector('#irony').innerHTML = allData.irony;
        
    } catch (error) {
        console.log("error", error);
    }
}
export { handleSubmit }
