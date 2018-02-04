import { ArticleTypeModel } from './article-type-model.type';
import { basemodel } from './base-model.type';

export class NewsItemModel extends basemodel {
    
    title: string;
    articleText: string;
    postedOn: Date;
    postedBy: string;
    articleType: ArticleTypeModel;

    constructor() {
        super();
        
        this.title = "";
        this.articleText = "";
        this.postedOn = null;
        this.postedBy = null;
        this.articleType = null;

    }

}