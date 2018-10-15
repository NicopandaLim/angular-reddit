import { Component } from '@angular/core';
import { Article } from './article/article.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Article[];   // or Array<Article>

  constructor () {
    this.articles = [
      new Article ('Angular', 'http://angular.io', 10),
      new Article ('fullstack', 'http://fullstack.io', 2),
      new Article ('depaul', 'http://depaul.edu', 12)
    ]
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    this.articles.push(new Article(title.value, link.value, 0));
    //title.value = '';
    //link.value = '';
    return false;
  }

  // sort the article based on the votes.
  sortedArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }


}
