if (window.location.pathname !== `/blobj/404.html`) {
    fetch(window.location.href)
        .then(response => {
            if (response.status === 404) {
                window.location.replace(`/blobj/404.html`);
            }
        })
        .catch(() => {
            window.location.replace(`/blobj/404.html`);
        });
}