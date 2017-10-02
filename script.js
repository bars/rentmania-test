function getData() {
    let title = document.querySelector('.n-title__text h1').textContent,
        featuresList = Array.from(document.querySelectorAll('.n-product-spec-list__item')),
        price = document.querySelector('.n-product-default-offer__price-value span').textContent,
        photos = Array.from(document.querySelectorAll('.n-gallery__thumbs-item img'));

    featuresList = featuresList.map(feature => {
        let featureFields = feature.textContent.split(':')
        return {name: featureFields[0].trim(), quantity: featureFields[1].trim()}
    })
    
    photos = photos.map(photo => {
        return photo.src.slice(0, photo.src.lastIndexOf('/')) + '/orig'
    })
    
    price = parseInt(price.replace(' ', ''));
    
    return JSON.stringify({
        name: title,
        features: featuresList,
        price: price,
        photos: photos    
    })
}
getData()