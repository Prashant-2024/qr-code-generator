document.addEventListener("DOMContentLoaded", () => {
    if (document.querySelector(".input-link")) {
        const form = document.querySelector(".input-link");
        const urlInput = document.querySelector(".url-input");

        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const url = urlInput.value;

            const urlPattern =
                /^(https?:\/\/)?([\w\d\-_]+\.)+[a-z]{2,6}([\/\w\d\-_]*)*\/?$/i;

            if (urlPattern.test(url)) {
                window.location.href = `qr-code.html?url=${encodeURIComponent(
                    url
                )}`;
            } else {
                alert("Enter valid URL");
            }
        });
    } else if (document.querySelector(".display-qr")) {
        const qrCodeDiv = document.querySelector(".display-qr");
        const downloadQR = document.querySelector(".download-qr");
        const shareQR = document.querySelector("share-qr");

        const urlParams = new URLSearchParams(window.location.search);
        const url = urlParams.get("url");

        qrCodeDiv.innerHTML = "";

        let myQR = new QRCode(qrCodeDiv, {
            text: url,
            width: 220,
            height: 220,
            correctLevel: QRCode.CorrectLevel.L,
        });

        downloadQR.addEventListener("click", () => {
            const qrCodeCanvas = qrCodeDiv.querySelector("canvas");
            if (qrCodeCanvas) {
                const imageURL = qrCodeCanvas.toDataURL("image/png");
                const link = document.createElement("a");
                link.href = imageURL;
                link.download = "qrCode.png";
                link.click();
            } else {
                alert("QR Code not generated");
            }
        });

        shareQR.addEventListener("click", () => {
            const qrCodeCanvas = qrCodeDiv.querySelector("canvas");
            if (qrCodeCanvas) {
                const imageURL = qrCodeCanvas.toDataURL("image/png");
                const shareURL = `https://example.com/share?url=${encodeURIComponent(
                    imageURL
                )}`;
                navigator.clipboard.writeText(shareURL);
                
            } else {
                alert("QR Code not shared");
            }
        });
    }
});
