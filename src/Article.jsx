import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { addDoc, collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import db from './firebase';

export default class Post extends Component {
  constructor() {
    super();
    this.state = {
      filePicked: null,
      title: '',
      abstract: '',
      text: '',
      image: '',
      tags: '',
      articles: [],
    };
    this.storage = getStorage(); // Initialize Firebase Storage
  }

  async componentDidMount() {
    const articlesRef = collection(db, 'articles');
    const articlesSnapshot = await getDocs(articlesRef);
    const articles = articlesSnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    this.setState({ articles });
  }

  updateInput = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onFileChange = (e) => {
    this.setState({ filePicked: e.target.files[0] });
  };

  onFileUpload = async () => {
    if (!this.state.filePicked) {
      console.log("No file selected for upload.");
      return;
    }
    
    const file = this.state.filePicked;
    const storageRef = ref(this.storage, `images/${file.name}`);
    
    try {
      await uploadBytes(storageRef, file); // Upload the file
      const downloadURL = await getDownloadURL(storageRef); // Get the download URL
      this.setState({ image: downloadURL }); // Update state with the image URL
      console.log("File uploaded successfully:", downloadURL);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  CreateNewArticle = async () => {
    const date = new Date();
    const collectionRef = collection(db, 'articles');
    const payload = {
      title: this.state.title,
      abstract: this.state.abstract,
      text: this.state.text,
      image: this.state.image, // Use the uploaded image URL
      tags: this.state.tags,
      creationDate: `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`,
    };

    await addDoc(collectionRef, payload);

    this.setState({
      filePicked: null,
      title: '',
      abstract: '',
      text: '',
      image: '',
      tags: '',
    });

    console.log('Successfully Added Article');
  };

  async deleteArticle(id) {
    await deleteDoc(doc(db, 'articles', id));
    window.location.reload(false);
  }

  render() {
    return (
      <Form className="SelectedForm">
        <div className="formField">
          <h4 style={{ marginRight: "10px" }}>Title</h4>
          <input
            value={this.state.title}
            name="title"
            onChange={this.updateInput}
            placeholder="Enter a descriptive title"
          />
        </div>

        <div className="imageUploader">
          <h3>Add an Image</h3>
          <input
            style={{ width: "300px", marginRight: "20px", marginLeft: "20px" }}
            type="file"
            onChange={this.onFileChange}
          />
          <button type="button" onClick={this.onFileUpload}>Upload Image</button>
        </div>

        <Form.Field style={{ marginTop: "10px" }}>
          <h4 style={{ marginBottom: "10px" }}>Abstract</h4>
          <textarea
            value={this.state.abstract}
            onChange={this.updateInput}
            name="abstract"
            placeholder="Enter a 1 paragraph abstract"
          />
        </Form.Field>
        <Form.Field style={{ marginTop: "10px" }}>
          <h4 style={{ marginBottom: "10px" }}>Article Text</h4>
          <textarea
            value={this.state.text}
            name="text"
            onChange={this.updateInput}
            placeholder="Enter the body of your article"
          />
        </Form.Field>
        <div className="formField">
          <h4 style={{ marginBottom: "10px", marginRight: "10px", marginTop: "10px" }}>Tags</h4>
          <input
            value={this.state.tags}
            name="tags"
            onChange={this.updateInput}
            placeholder="Please add up to 3 tags to describe what your article is about e.g., Java"
          />
        </div>
        <Button
          style={{ marginTop: "20px", float: "right", width: "170px" }}
          onClick={this.CreateNewArticle}
        >
          Post
        </Button>
      </Form>
    );
  }
}
