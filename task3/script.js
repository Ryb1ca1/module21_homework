if(localStorage.getItem('userName') && localStorage.getItem('lastVisit')) {

    const userName = localStorage.getItem('userName');
    const lastVisit = localStorage.getItem('lastVisit');

    alert(`Добрый день, ${userName}! Давно не виделись. В последний раз вы были у нас ${lastVisit}`);

    const currentDate = new Date();

    const formatAlert = currentDate.toLocaleString("ru-RU", {
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
    })

    localStorage.setItem('lastVisit', formatAlert);

} else {

    const userName = prompt("Добро пожаловать! Назовите, пожалуйста, ваше имя");

    if(userName) {
        const currentDate = new Date();

        const formattedDate = currentDate.toLocaleString("ru-RU", {
            day: "numeric",
            month: "long",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit"
        });

        localStorage.setItem('userName', userName);
        localStorage.setItem('lastVisit', formattedDate);
    }
}