import articleStyles from '../styles/Article.module.css';
import Articleitem from './Articleitem';

const ArticleList = ({ articles }) => {
    return (
        <div>  
        <div className={articleStyles.grid}>
        {
            articles.map(article => (
            <Articleitem key={article.id} article={article} />
            ))
        }
        </div>
        </div>
    );
};

export default ArticleList;