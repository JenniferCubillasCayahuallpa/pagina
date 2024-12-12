document.querySelector('form').addEventListener('submit', async function (event) {
  event.preventDefault();

  const formData = new FormData(this);

  try {
      const response = await fetch('/registro', {
          method: 'POST',
          body: JSON.stringify(Object.fromEntries(formData)),
          headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
          document.getElementById('confirmation-message').style.display = 'block';
          this.reset();
      } else {
          const data = await response.json();
          alert(data.message || 'Error al enviar el formulario');
      }
  } catch (err) {
      console.error('Error al enviar el formulario:', err);
      alert('Hubo un problema al enviar el formulario');
  }
});

const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});


