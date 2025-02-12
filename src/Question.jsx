import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';

import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css';

import db from "./firebase";
import { addDoc, collection } from 'firebase/firestore';

export default class Question extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      problem: "",
      tags: "",
      code: `function add(a, b) {\n  return a + b;\n}`
    };
  }

  CreateNewQuestion = async () => {
    var date = new Date();
    const collectionRef = collection(db, 'Questions');
    const payload = {
      title: this.state.title,
      problem: this.state.problem,
      tags: this.state.tags,
      code: this.state.code, // Storing code from the editor
      creationDate: `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
    };

    try {
      await addDoc(collectionRef, payload);
      this.setState({
        title: "",
        problem: "",
        tags: "",
        code: `function add(a, b) {\n  return a + b;\n}` // Reset code after posting
      });
      console.log('Successfully Added Question');
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  }

  updateInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleCodeChange = code => {
    this.setState({ code });
  }

  render() {
    return (
      <Form className="SelectedForm">
        <div className="formField">
          <h4 style={{ marginRight: "10px" }}>Title</h4>
          <input value={this.state.title} name="title" onChange={this.updateInput} placeholder='Enter a descriptive title' />
        </div>
        <Form.Field style={{ marginTop: "10px" }}>
          <h4 style={{ marginBottom: "10px" }}>Describe your problem</h4>
          <textarea value={this.state.problem} name="problem" onChange={this.updateInput} placeholder='' />
        </Form.Field>
        <div className="formField">
          <h4 style={{ marginBottom: "10px", marginRight: "10px", marginTop: "10px" }}>Code editor</h4>
          <Editor
            value={this.state.code}
            onValueChange={this.handleCodeChange}
            highlight={code => highlight(code, languages.js)}
            padding={10}
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: 12,
              border: '1px solid #ccc',
              borderRadius: '4px',
              marginBottom: '10px',
              minHeight: '100px',
              minWidth: '400px',
            }}
          />
        </div>
        <div className="formField">
          <h4 style={{ marginBottom: "10px", marginRight: "10px", marginTop: "10px" }}>Tags</h4>
          <input value={this.state.tags} name="tags" onChange={this.updateInput} placeholder='Please add up to 3 tags to describe what your article is about e.g., Java' />
        </div>
        <Button style={{ marginTop: "20px", float: "right", width: "170px" }} onClick={this.CreateNewQuestion}>Post</Button>
      </Form>
    );
  }
}
