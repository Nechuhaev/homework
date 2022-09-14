fetch('https://pixabay.com/api/?key=29905727-ba938f57a9499389ab5e34ef4&q=yellow+flowers&image_type=photo')
    .then(respons => {

    return respons.json();
}).then(photo => {
    console.log(photo);
})
.catch(error => {
    console.log(error);
});