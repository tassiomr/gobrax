export default function (route: string, path: string): boolean {
  return route === path.replace('/', '');
}
