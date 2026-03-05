document.getElementById('generate-btn').addEventListener('click', () => {
    const ssid = document.getElementById('ssid').value;
    const password = document.getElementById('password').value;
    const encryption = document.getElementById('encryption').value;
    const qrcodeContainer = document.getElementById('qrcode');

    qrcodeContainer.innerHTML = '';

    if (!ssid) {
        alert('SSIDを入力してください。');
        return;
    }

    let wifiString;
    if (encryption === 'nopass') {
        wifiString = `WIFI:T:nopass;S:${ssid};;`;
    } else {
        if (!password) {
            alert('パスワードを入力してください。');
            return;
        }
        wifiString = `WIFI:T:${encryption};S:${ssid};P:${password};;`;
    }

    new QRCode(qrcodeContainer, {
        text: wifiString,
        width: 256,
        height: 256,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });
});
