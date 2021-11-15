const baseUrl = " http://localhost:7300"

export function latestNews(){
    const output = fetch(`${baseUrl}/articles?_end=3`,{method: 'GET'})
    .then((data) => data.json())

    return{
        type:'LATEST_NEWS',
        payload: output
    }
}

export function articleNews(){
    const output = fetch(`${baseUrl}/articles?_start=3&_end=10`,{method: 'GET'})
    .then((data) => data.json())

    return{
        type:'ARTICLE_NEWS',
        payload: output
    }
}

export function galleryNews(){
    const output = fetch(`${baseUrl}/galleries?_limit=2`,{method: 'GET'})
    .then((data) => data.json())

    return{
        type:'GALLERY_NEWS',
        payload: output
    }
}

export function selectedNews(id){
    const output = fetch(`${baseUrl}/articles?id=${id}`,{method: 'GET'})
    .then((data) => data.json())

    return{
        type:'SELECTED_NEWS',
        payload: output
    }
}