export const render = () => {
  const app = document.querySelector<HTMLDivElement>('#app')!
  app.innerHTML = `
    <h1>Hello e!!!！</h1>
    <p target="_blank">This is hmr test.123</p>
  `
}
