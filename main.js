// Thay đổi nội dung búc thư ở đây
var letterContent = "cao bằng mảnh đất trữ tình có anh tên ộ, rình rình trong bar mồm miệng thì bú i a lên stream khẩu hiệu bỏ nha mọi người lúc nào anh cũng tươi cười xây trường từ thiện mọi người noi theo lươn anh thì lại rất bèo đồng hồ hàng hiệu anh đeo thôi mà trung quân ái quốc từ cha có con trai cả tên là beomen đồng đội anh rất ngang tài hở ra anh kick, chẳng màng đúng sai mỗi năm đúng tháng 12 tiền anh vài tỷ, lai rai xây cầu fan anh thấy thế rất ngầu màu anh thích nhất, là màu sha shi anh tôi vốn rất thật thà tà anh thích nhất là tà bỏ chay"

// Tốc độ viết chữ. Số càng nhỏ tốc độ càng nhanh. 50 là tốc độ khá phù hợp
durationWrite = 50 

// Hiệu ứng gõ chữ

function effectWrite () {
    var boxLetter = document.querySelector(".letterContent")
    letterContentSplited = letterContent.split("")
    
    letterContentSplited.forEach((val, index) => {
        setTimeout(() => {
            boxLetter.innerHTML += val    
        }, durationWrite* index)
    })
}

window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".container").classList.add("active")
    }, 500)
})

var openBtn = document.querySelector(".openBtn")
openBtn.addEventListener("click", () => {
    document.querySelector(".cardValentine").classList.add("active")
    document.querySelector(".container").classList.add("close")
})

var cardValentine = document.querySelector(".cardValentine")

cardValentine.addEventListener("click", () => {
    cardValentine.classList.toggle("open")

    if(cardValentine.className.indexOf("open") != -1) {
        setTimeout(effectWrite, 500)
    } else {
        setTimeout(() => {
            document.querySelector(".letterContent").innerHTML = ""
        }, 1000)
    }
})
