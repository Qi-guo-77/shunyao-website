const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');
const year = document.querySelector('#year');

year.textContent = new Date().getFullYear();

toggle.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});

links.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    links.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  });
});

function handleSubmit(event) {
  event.preventDefault();
  const note = document.querySelector('#formNote');
  note.textContent = '已收到您的填写示例。正式上线时可接入后端接口或邮箱发送功能。';
  event.target.reset();
  return false;
}
