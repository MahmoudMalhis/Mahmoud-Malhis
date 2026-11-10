// Images live in public/images. BASE_URL is relative ("./"), so this works from a sub-path.
export function imageUrl(file) {
  return `${import.meta.env.BASE_URL}images/${file}`;
}
