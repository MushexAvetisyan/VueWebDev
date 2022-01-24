export default function truncate(str) {
  if (str !== '') {
    return `${str.slice(0, 15)}...`
  }

}
