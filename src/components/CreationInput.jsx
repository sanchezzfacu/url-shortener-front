import { useState } from 'react'
import axios from 'axios'

import '../styles/css/CreationInput.css'

function CreationInput() {
    const [input, setInput] = useState('')
    const [urlInfo, setUrlInfo] = useState([])

    async function generateUrl(e) {
        e.preventDefault()
        let urlObj = {fullUrlVersion: input}
        const postUrl = await axios.post('/createUrl', urlObj )
        setUrlInfo(postUrl.data)
        console.log(axios.defaults.baseURL + '/' + urlInfo.shortUrlVersion)
    }

    function handleInputChange(e) {
        setInput(e.target.value)
    }

    return (
        <div className='form-container'>
            <form onSubmit={generateUrl}>
                <input onChange={handleInputChange} type="url" required/>
                <button type="submit">Generate URL</button>
            </form>
            <div >
                <div className={Object.entries(urlInfo).length ? 'url-info-container' : 'url-info-none'}>
                    <h4>{urlInfo.fullUrlVersion}</h4>
                    <h4><a href={urlInfo.shortUrlVersion}>{axios.defaults.baseURL + '/' + urlInfo.shortUrlVersion}</a></h4>
                    <h4>{urlInfo.clicks}</h4>
                </div>
            </div>
        </div>
    )
}

export default CreationInput
