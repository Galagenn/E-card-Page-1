import "../style/style.scss";


//header
document.getElementById("copyText").addEventListener("click", function() {
    // Создаем временное текстовое поле
    var tempInput = document.createElement("input");
    tempInput.value = this.textContent;
    document.body.appendChild(tempInput);
  
    // Выделяем текст в текстовом поле
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); // Для мобильных устройств
  
    // Копируем выделенный текст в буфер обмена
    document.execCommand("copy");
  
    // Удаляем временное текстовое поле
    document.body.removeChild(tempInput);
  
    // Уведомление пользователя (можно кастомизировать)
    alert("Ссылка скопирована в буфер обмена!");
  });
  

  function toggleAll() {
    const buttonsWrapper = document.querySelector('.buttons-wrapper');
    if (buttonsWrapper.classList.contains('show')) {
        buttonsWrapper.style.maxHeight = null;
        buttonsWrapper.classList.remove('show');
    } else {
        buttonsWrapper.classList.add('show');
        buttonsWrapper.style.maxHeight = buttonsWrapper.scrollHeight + "px";
    }
}


// qr-section

  document.addEventListener('DOMContentLoaded', function() {
    // Обработчик для кнопки "Сохранить"
    const saveBtn = document.getElementById('save-btn');
    saveBtn.addEventListener('click', function(event) {
      event.preventDefault();  // Отключаем стандартное поведение ссылки
      
      // Создаем ссылку для скачивания файла
      const link = document.createElement('a');
      link.href = '/vcard.vcf';  // Замените на реальный путь к вашему .vcf файлу
      link.download = 'vcard.vcf';  // Имя файла при скачивании
      link.click();  // Программно кликаем по ссылке
    });

    // Обработчик для кнопки "Поделиться"
    const shareBtn = document.getElementById('share-btn');
    shareBtn.addEventListener('click', async function(event) {
      event.preventDefault();  // Отключаем стандартное поведение ссылки

      if (navigator.share) {
        try {
          await navigator.share({
            title: 'https://github.com/Galagenn',
            url: window.location.href,  // Ссылка на текущий сайт
          });
          console.log('Успешно поделились');
        } catch (error) {
          console.error('Ошибка при попытке поделиться', error);
        }
      } else {
        alert('Ваш браузер не поддерживает функцию поделиться.');
      }
    });
  });



