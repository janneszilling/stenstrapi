export const fileNotFound = () => {
  const metaTag = document.createElement('meta');
  metaTag.setAttribute('http-equiv', 'status');
  metaTag.setAttribute('content', '404');
  document.head.appendChild(metaTag);
};
