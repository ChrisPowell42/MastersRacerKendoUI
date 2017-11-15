import { ArticleTypeModel } from './article-type-model.type';

export class NewsItemModel {
    id: string;

    title: string;
    articleText: string;
    postedOn: Date;
    postedBy: string;
    articleType: ArticleTypeModel;
}