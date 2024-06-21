export function isCompleteUrl(url: string): boolean {
  const urlPattern = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
  return urlPattern.test(url);
}

export function isValidUrl(url: string): boolean {
  if (!url) {
    throw new Error('链接必传');
  }

  if (!isCompleteUrl(url)) {
    throw new Error('提供的链接不是完整的URL');
  }

  return true;
}