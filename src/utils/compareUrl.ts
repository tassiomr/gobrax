export default function(route: string, path: string) {
  return route === path.replace('/', '');
}