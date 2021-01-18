function updateCounter() {

    // https://api.countapi.xyz/update/Hritikg/github/?amount=1


    fetch('https://api.countapi.xyz/update/Hritikg/github/?amount=1')
        .then(res => res.json())
        .then(data => counterElement.innerHTML = data.value)
}

updateCounter()



counterElement = document.getElementsByClassName('count')[0];