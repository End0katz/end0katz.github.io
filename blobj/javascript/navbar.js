const iframe = document.createElement('iframe');

iframe.src = `/blobj/navbar.html`;
iframe.style.width = '100%';
iframe.style.border = 'none';
document.body.prepend(iframe);
iframe.onload = () => {
    const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
    const links = iframeDocument.querySelectorAll('a');

    links.forEach(link => {
        const img = link.querySelector('img');
        if (!img) {
            const linkURL = new URL(link.href, window.location.origin);
            const currentPath = window.location.pathname;
            if (linkURL.href === `/blobj/index.html`) {
                if (currentPath === `/blobj/index.html`) {
                    link.classList.add('selected');
                }
            } else if (currentPath.startsWith(linkURL.pathname)) {
                link.classList.add('selected');
            }
        }

        // Ensure clicking a link works like in a normal page
        link.addEventListener('click', event => {
            if (link.target === '_blank') {
                // Allow default behavior for links that open in a new tab
                return;
            }
            event.preventDefault();
            window.location.href = link.href; // Navigate to the link's href
        });
    });

    // Make the navbar sticky to the top if no other sticky-to-top components exist
    const existingStickyElements = document.querySelectorAll('[style*="position: sticky"], [style*="position: fixed"]');
    if (existingStickyElements.length === 0) {
        iframe.style.position = 'sticky';
        iframe.style.top = '0';
        iframe.style.zIndex = '1000'; // Ensure it appears above other elements
    }

    // Ensure the iframe and its parent document have no margin or padding
    iframeDocument.body.style.margin = '0';
    iframeDocument.body.style.padding = '0';
    iframe.style.display = 'block'; // Ensure the iframe behaves like a block element
    iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px'; // Set height based on content

    // Remove padding for the navbar
    iframe.style.padding = '0';
    iframe.style.margin = '0';

};