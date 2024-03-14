import './App'

new EventSource('/esbuild').addEventListener('change', () => {
  location.reload();
});
