// Функція, яка буде викликана при переміщенні мишкою
function handleMouseMove(event) {
  // Опрацювання руху миші тут
  // Наприклад, зміщення об'єкту відносно координат миші
  const box = document.getElementById("box");
  box.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
}

// Використання debounce для затримки виклику функції handleMouseMove
const debouncedMouseMove = _.debounce(handleMouseMove, 100);

// Додавання події для виклику debouncedMouseMove при переміщенні мишкою
document.addEventListener("mousemove", debouncedMouseMove);
console.log(handleMouseMove);
