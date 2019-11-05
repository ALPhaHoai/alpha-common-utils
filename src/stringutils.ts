export function replaceAll(txt: string, find: string, replacement: string): string {
    return txt.replace(new RegExp(find, 'g'), replacement);
}