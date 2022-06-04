export class Recensione {
  title: string;
  link: string;
  image: string;
  voti: number = 0;

  constructor(title: string, link: string, image: string) {
    this.title = title;
    this.link = link;
    this.image = image;
  }

  like(): void {
    this.voti += 1;
  }

  dislike(): void {
    this.voti -= 1;
  }
}
