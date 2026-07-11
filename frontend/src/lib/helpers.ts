export function sleep(ms: number) {
  return new Promise((resolve) =>
    setTimeout(resolve, ms)
  );
}

export function initials(name: string) {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

export function fullName(
  firstName: string,
  lastName: string
) {
  return `${firstName} ${lastName}`;
}

export async function copyText(text: string) {
  await navigator.clipboard.writeText(text);
}

export function downloadFile(
  url: string,
  fileName: string
) {
  const link = document.createElement("a");

  link.href = url;

  link.download = fileName;

  document.body.appendChild(link);

  link.click();

  document.body.removeChild(link);
}