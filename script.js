const insert = document.getElementById('insert')

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `<div class="key">
        ${e.key === ' ' ? 'Space' : e.key}
        <small>你按的鍵是</small>
      </div>
      <div class="key">
        ${e.keyCode}
        <small>對應的keyCode是</small>
      </div>
      <div class="key">
        ${e.code}
        <small>event.code</small>`
})
