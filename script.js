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

document.querySelectorAll('.product-tabs a').forEach((tab) => {
  tab.addEventListener('click', () => {
    tab.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  });
});

async function handleSubmit(event) {
  event.preventDefault();
  const note = document.querySelector('#formNote');
  const form = event.target;
  const submitButton = form.querySelector('button[type="submit"]');
  const formData = new URLSearchParams(new FormData(form));

  note.textContent = '正在提交，请稍候...';
  submitButton.disabled = true;

  try {
    const response = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: formData.toString()
    });

    if (!response.ok) throw new Error('Form submission failed');

    note.textContent = '提交成功，我们会尽快与您联系。';
    form.reset();
  } catch (error) {
    note.textContent = '自动提交暂时不可用，请直接发送需求至 chengdushunyao@163.com。';
  } finally {
    submitButton.disabled = false;
  }

  return false;
}
