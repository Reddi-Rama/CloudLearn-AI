export default function debounce<T extends (...args: any[]) => void>(
  callback: T,
  delay = 300
) {
  let timer: NodeJS.Timeout;

  return (...args: Parameters<T>) => {
    clearTimeout(timer);

    timer = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}