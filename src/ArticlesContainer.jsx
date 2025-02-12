import React from 'react';
import { Card } from 'semantic-ui-react';
import Articlebox from './Articlebox';

import db from './firebase';
import { collection, query, getDocs, deleteDoc, doc } from 'firebase/firestore';

class ArticlesContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      articles: [],
    };
    this.gatherArticles();
  }

  gatherArticles = async () => {
    const search = query(collection(db, 'articles'));
    const snapshot = await getDocs(search);

    const articleList = snapshot.docs.map((doc, index) => (
      <Articlebox
        key={index}
        id={doc.id} // Pass the ID of the article
        name={doc.data().title}
        img={doc.data().image}
        abstract={doc.data().abstract}
        text={doc.data().text}
        tags={doc.data().tags}
        deleteArticle={this.deleteArticle} // Pass the deleteArticle function
      />
    ));

    this.setState({ articles: articleList });
  };

  deleteArticle = async (articleId) => {
    try {
      // Delete the article with the given ID from Firebase Firestore
      await deleteDoc(doc(db, 'articles', articleId));
      // Reload the articles after deletion
      this.gatherArticles();
      console.log(`Deleted article with ID: ${articleId}`);
    } catch (error) {
      console.error('Error deleting article:', error);
    }
  };

  render() {
    return (
      <Card.Group className="centered">
        {this.state.articles}
      </Card.Group>
    );
  }
}

export default ArticlesContainer;