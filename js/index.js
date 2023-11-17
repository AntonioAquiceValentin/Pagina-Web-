import { socialMedia } from '../utils/data.js';

const items = document.getElementById('items');

socialMedia.forEach(element => {
  const { id, href, title, content } = element;
  items.innerHTML += `
    <li key="${id}">
      <a
        href="=${href}"
        target="_blank"
        title="${title}"
        class="link"
      >
        ${content}
      </a>
    </li>
  `;
});
