/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) =>{
   const toggle = document.getElementById(toggleId),
         nav = document.getElementById(navId)

   toggle.addEventListener('click', () =>{
       // Add show-menu class to nav menu
       nav.classList.toggle('show-menu')

       // Add show-icon to show and hide the menu icon
       toggle.classList.toggle('show-icon')
   })
}

showMenu('nav-toggle','nav-menu')



function calculateTotal() {
    // Lấy giá trị từ các input và chuyển đổi thành số nguyên
    const corn1k = parseInt(document.getElementById('corn1k').value) || 0;
    const corn10k = parseInt(document.getElementById('corn10k').value) || 0;
    const corn50k = parseInt(document.getElementById('corn50k').value) || 0;
    const corn150k = parseInt(document.getElementById('corn150k').value) || 0;
    const corn500k = parseInt(document.getElementById('corn500k').value) || 0;
    const corn1m = parseInt(document.getElementById('corn1m').value) || 0;
    const corn5m = parseInt(document.getElementById('corn5m').value) || 0;

    // Tính toán tổng số ngô và chuyển thành triệu
    const totalCornInMillions = (
        (corn1k * 1_000) +
        (corn10k * 10_000) +
        (corn50k * 50_000) +
        (corn150k * 150_000) +
        (corn500k * 500_000) +
        (corn1m * 1_500_000) +
        (corn5m * 5_000_000)
    ) / 1_000_000;

    // Hiển thị kết quả
    document.getElementById('result').innerText = `Tổng ngô sau khi quy đổi: ${totalCornInMillions.toFixed(3)} triệu`;
}
