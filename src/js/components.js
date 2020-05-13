import '../css/components.css';
export const greet = (name) => {
  console.log('Create Element h1 ');
  const element = document.createElement('h1');
  element.innerText = `Hello, ${name}`;
  document.body.appendChild(element);
};
