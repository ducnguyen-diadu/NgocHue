document.addEventListener("DOMContentLoaded", function() {
    const background = document.getElementById("background");
    const typingEffect = document.getElementById("typingEffect");
    const fireworks = document.getElementById("fireworks");
    const btnContainer = document.getElementById("btnContainer");
    const btnNo = document.getElementById("btnNo");
    const btnOk = document.getElementById("btnOk");
    const textCamon = document.getElementById("textCamon");


    const textToType = "Hi Bạn, Hình như ngày hôm ni là 8/3 thì phải, hí hí,Trên thiên đường có 10 thiên thần: 5 thiên thần đang chơi đùa, 4 thiên thần đang nói chuyện và 1 thiên thần đang đọc tin nhắn chúc mừng ngày 8/3 này.... hí hí";
    const typeSpeed = 50;
    const numberOfSteps = textToType.length;

    // Tính toán thời gian cần để đánh hết chuỗi
    const typingTime = numberOfSteps * typeSpeed; //+ 5000

    // Set up Typed.js
    const options = {
        strings: [textToType],
        typeSpeed: typeSpeed,
        fadeOut: false, // Disable fade out
        onComplete: function() {
            // Wait for the calculated time before fading out typingEffect
            setTimeout(function() {
                // Use Anime.js for a smooth transition
                anime({
                    targets: typingEffect,
                    opacity: 0,
                    duration: 1000,
                    easing: "easeOutQuad",
                    complete: function() {
                        // After fade out, hide and reset visibility
                        typingEffect.style.opacity = 1;
                        typingEffect.style.visibility = "hidden";

                        // Show fireworks and buttons
                        background.style.animation = "fireworksBackground 5s forwards";
                        fireworks.classList.remove("hidden");
                        btnContainer.classList.remove("hidden");
                    },
                });
            }, typingTime); // Wait for the calculated time
        },
    };

    const typed = new Typed("#typedText", options);

    // Button actions
    // btnNo.addEventListener("click", function() {
    //     btnNo.style.animation = "none";
    //     btnOk.style.animation = "bounce 2s infinite";
    //     setTimeout(function() {
    //         swapButtons();
    //     }, 2000);
    // });

    btnOk.addEventListener("click", function() {
        btnContainer.classList.add("hidden");

        // Hiển thị và thay đổi nội dung trong textCamon
        textCamon.innerText = "Tôi biết mà, hí hí...";
        textCamon.style.opacity = 1;

        setTimeout(function() {
            textCamon.innerText = "Cảm ơn bé!!";
        }, 5000);

        setTimeout(function() {
            textCamon.innerText = "Hình như hết rồi, à chưa đợi tí nữa chưa xong";
            // Chuyển hướng sau 5 giây
            setTimeout(function() {
                window.location.href = "/tim/index.html"; // Thay thế bằng URL bạn muốn chuyển hướng
            }, 5000);
        }, 10000);
    });

    function swapButtons() {
        const temp = btnNo.style.transform;
        btnNo.style.transform = btnOk.style.transform;
        btnOk.style.transform = temp;
    }
});

function noHover() {
    var btnNo = document.getElementById("btnNo");
    var btnWidth = btnNo.offsetWidth;
    var btnHeight = btnNo.offsetHeight;

    // Tính toán giới hạn cho vị trí mới
    var maxX = window.innerWidth - btnWidth;
    var maxY = window.innerHeight - btnHeight;

    var s = Math.random();
    var x = Math.floor(s * (maxX / 2)); // Nửa nằm trong màn hình
    var y = Math.floor(Math.random() * maxY * 0.5); // Giảm giá trị y đi 50%

    btnNo.style.left = x + "px";
    btnNo.style.top = y + "px";
}