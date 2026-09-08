// Fachada de vídeo: carga el iframe de YouTube solo al hacer clic (rendimiento, privacidad y SEO).
// Usa youtube-nocookie.com y delegación de eventos para funcionar con cualquier número de tarjetas.
document.addEventListener('click', function (event) {
  var media = event.target.closest('.video-card__media[data-video-id]');
  if (!media || media.querySelector('iframe')) return;

  var id = media.getAttribute('data-video-id');
  if (!id) return;

  var iframe = document.createElement('iframe');
  iframe.src = 'https://www.youtube-nocookie.com/embed/' + id + '?autoplay=1&rel=0';
  iframe.title = media.getAttribute('data-title') || 'Vídeo de YouTube';
  iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
  iframe.setAttribute('allowfullscreen', '');

  media.innerHTML = '';
  media.appendChild(iframe);
});
