const socialMedia = [
    {
    id: 1,
    href: '#',
    title: 'Ingresar usuario',
    content: '<i class="bi bi-person-fill"></i>'
    },
    {
    id: 2,
    href: '#',
    title: 'Carrito de compras',
    content: '<i class="bi bi-cart"></i>'
    }
];

const socialMediaList = document.getElementById('socialMediaList');
console.log(socialMediaList);

socialMedia.forEach(element => {
    const { id, href, title, content } = element;
    socialMediaList.innerHTML += `
    <li key=${id}
        class="link">
        <a
            href="=${href}"
            target="_blank"
            rel="noopener noreferrer
            title="${"title"}"
            ${content}
        </a>
    </li>
    `;
});
