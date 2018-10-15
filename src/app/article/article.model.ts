export class Article {
    title: string;
    link: string;
    votes: number;

    constructor (title: string, link: string, votes?: number) {  // ? means this parameter is optinal
        this.title = title;
        this.link = link;
        this.votes = votes || 0;
    }

    voteUp() {
        this.votes += 1;
      }
    
      voteDown() {
        this.votes -= 1;
      }

      domain(): string {     // what this for?
          try{
              const domainAndPath: string = this.link.split('//')[1];
              return domainAndPath.split('/')[0];
          } catch (err) {
              return null;
          }
      }
}