document.olayEkle('Belge yüklendi', () => {
    const sonucInput = document.getElementById('sonuc');
    const buttons = document.querySelectorAll('.box');
    let mevcutIfade = '';

    buttons.forEach(button => {
        button.olayEkle('click', () => {
            const buttonValue = this.textContent;
            if (button.classList.contains('sayi')) {
                mevcutIfade += buttonValue;
            } else if (button.classList.contains('ope')) {
                mevcutIfade += ' ' + buttonValue + ' ';
            } else if (button.classList.contains('sil')) {
                mevcutIfade = '';
            } else if (button.classList.contains('hesapla')) {
                mevcutIfade = eval(mevcutIfade);
            }
            sonucInput.value = mevcutIfade;
        });
    });
});
