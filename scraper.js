var imgList = [];
// site must have jquery, or just traverse the dom with vanilla JS
$('.photo-list-photo-view').each((indx,ele)=>{
    const imgUrl = ele.style.backgroundImage.replace('url("','').replace('")','')
    console.log(imgUrl)
    imgList.push(imgUrl)
});
const newButton = $('<a href="#" class="js-download-button" style="position:fixed;top:50%;left:50%;z-index:900;">download</a>')[0]
document.body.appendChild(newButton);
let contentBlob;
function saveAsJson(fileName, data) {
    jsonString = JSON.stringify(data, null, 2);

    // resetting if you do this more than once, or you'll get a memory leak
    if (contentBlob) {
        window.URL.revokeObjectURL(contentBlob);
        contentBlob = undefined;
    }

    // populate the download button
    const downloadButton = document.querySelector('.js-download-button');
    contentBlob = new Blob([jsonString], {type : 'application/json'});
    downloadButton.href = window.URL.createObjectURL(contentBlob);
    downloadButton.download = fileName + (new Date().getTime()) + '.json';
}
saveAsJson('list-of-files', imgList)