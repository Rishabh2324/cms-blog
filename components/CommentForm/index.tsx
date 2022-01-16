import React, { useEffect, useState } from 'react'
import { submitComment } from '../../services';
import styles from './Form.module.scss';

const CommentForm = ({slug}:any) => {
    const [error, setError] = useState(false);
    const [localStorage, setLocalStorage] = useState<any>(null);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [formData, setFormData] = useState<any>({ name: null, email: null, comment: null, storeData: false });

    useEffect(() => {
        setLocalStorage(window.localStorage);
        const initalFormData = {
          name: window.localStorage.getItem('name'),
          email: window.localStorage.getItem('email'),
          storeData: window.localStorage.getItem('name') || window.localStorage.getItem('email'),
        };
        setFormData(initalFormData);
      }, []);

      
  const onInputChange = (e:any) => {
      
    const { target } = e;
    if (target.type === 'checkbox') {
      setFormData((prevState:any) => ({
        ...prevState,
        [target.name]: target.checked,
      }));
    } else {
      setFormData((prevState:any) => ({
        ...prevState,
        [target.name]: target.value,
      }));
    }
  };

  const handlePostSubmission = () => {
    setError(false);
    const { name, email, comment, storeData } = formData;
    if (!name || !email || !comment) {
      setError(true);
      return;
    }
    const commentObj = {
      name,
      email,
      comment,
      slug 
    };

    if (storeData) {
      localStorage.setItem('name', name);
      localStorage.setItem('email', email);
    } else {
      localStorage.removeItem('name');
      localStorage.removeItem('email');
    }

    submitComment(commentObj)
      .then((res) => {
        if (res.createComment) {
          if (!storeData) {
            formData.name = '';
            formData.email = '';
          }
          formData.comment = '';
          setFormData((prevState:any) => ({
            ...prevState,
            ...formData,
          }));
          setShowSuccessMessage(true);
          setTimeout(() => {
            setShowSuccessMessage(false);
          }, 3000);
        }
      });
  };



    return (
        <div className={styles.CommentForm}>
        <h3 className={styles.CommentForm__formHeading}>Leave a Reply</h3>
        <div className={styles.CommentForm__commentTextArea}>
          <textarea value={formData.comment} onChange={onInputChange} name="comment" placeholder="Comment" />
        </div>
        <div className={styles.CommentForm__detailTextArea}>
          <input type="text" value={formData.name} onChange={onInputChange}  placeholder="Name" name="name" />
          <input type="email" value={formData.email} onChange={onInputChange}  placeholder="Email" name="email" />
        </div>
        <div className={styles.CommentForm__CheckBox}>
          <div>
            <input checked={formData.storeData} onChange={onInputChange} type="checkbox" id="storeData" name="storeData" value="true" />
            <label  htmlFor="storeData"> Save my name, email in this browser for the next time I comment.</label>
          </div>
        </div>
        {error && <p className={styles.CommentForm__error}>All fields are mandatory</p>}
        <div className={styles.CommentForm__submitComment}>
          <button type="button" onClick={handlePostSubmission} >Post Comment</button>
          {showSuccessMessage && <span className={styles.CommentForm__success}>Comment submitted for review</span>}
        </div>
      </div>
    )
}

export default CommentForm
