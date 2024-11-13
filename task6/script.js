const messageDiv = document.getElementById('message');
const imageContainer = document.getElementById('imageContainer');

document.getElementById('fetchImagesButton').addEventListener('click', () => {
    const page = document.getElementById('pageInput').value;
    const limit = document.getElementById('limitInput').value;

    messageDiv.textContent = '';
    imageContainer.textContent = '';
    
    const isPageValid = page => 1 && page <= 10;
    const isLimitValid = limit => 1 && limit <= 10;

    if (!isPageValid && !isLimitValid) {
        messageDiv.textContent = 'Номер страницы и лимит вне диапазона от 1 до 10';
        return;
    } else if (!isPageValid) {
        messageDiv.textContent = 'Номер страницы вне диапазона от 1 до 10';
        return;
    } else if (!isLimitValid) {
        messageDiv.textContent = 'Лимит вне диапазона от 1 до 10';
        return;
    }

    // Запрос изображений
    fetch(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`)
        .then(response => response.json())
        .then(images => {
            displayImages(images);
            saveImagesToLocalStorage(images);
        })
        .catch(error => {
            messageDiv.textContent = 'Ошибка при получении данных.';
            console.error(error);
        });
});

// Функция для отображения изображений
function displayImages(images) {
    imageContainer.innerHTML = '';
    images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image.download_url;
        imgElement.alt = image.author;
        imageContainer.appendChild(imgElement);
    });
}

// Функция для сохранения изображений в localStorage
function saveImagesToLocalStorage(images) {
    localStorage.setItem('lastImages', JSON.stringify(images));
}

// Проверка на наличие сохраненных изображений в localStorage при загрузке страницы
function loadImagesFromLocalStorage() {
    const savedImages = localStorage.getItem('lastImages');
    if (savedImages) {
        const images = JSON.parse(savedImages);
        displayImages(images);
    }
}

// Загрузка изображений из localStorage при загрузке страницы
loadImagesFromLocalStorage();