import { useState } from "react";
import css from "../Upload/Upload.module.css";
import { UseAppContext } from "../../appContext";
import { config } from "../../libs/config";
import { backendurl } from "../../libs/backendurl";

const Upload = ({ hideModal }) => {
  const [selectedFile, setSelectedFile] = useState();
  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");
  const [dateDue, setDateDue] = useState("");

  const { refreshSwitch, setRefreshSwitch, s3 } = UseAppContext();

  const browseClick = (event) => {
    setSelectedFile(event.target.files[0]);
  };




  async function uploadClick() {
    config.dirName = `homework/${Date.now()}`;

    const uploadedImage = await s3.upload({
      Bucket: config.bucketName,
      ContentType: selectedFile.type,
      ACL: 'public-read',
      Key: `${config.dirName}/${selectedFile.name}`,
      Body: selectedFile,
    }).promise();

    postToSQL(uploadedImage.Location);
  
    setRefreshSwitch(!refreshSwitch);
    hideModal();
  };

  // Upload to SQL...
  async function postToSQL(url) {
    // Create our object to POST (Insert) into Homework on SQL
    const homework = {
      name: title,
      image: url,
      datedue: dateDue,
      comment: comment,
    };
    // Make the POST request (INSERT)
    await postHomework("POST", homework);
  }

  async function postHomework(method, body) {
    await fetch(backendurl, {
      method,
      headers: { "content-type": "application/json" },
      body: JSON.stringify(body),
    });
  }
  // end upload to SQL

  return (
    <div className={css.uploadBox}>
      <h2 className={css.upload}>Upload</h2>
      <p>Enter title</p>
      <input
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      ></input>
      <p>Comment:</p>
      <textarea
        className={css.commentBox}
        rows="3"
        name="comment"
        form="usrform"
        value={comment}
        onChange={(event) => setComment(event.target.value)}
      >
        Enter text here...
      </textarea>
      <p>Due date: </p>
      <input
        value={dateDue}
        onChange={(event) => setDateDue(event.target.value)}
      ></input>
      <br />
      <input type="file" name="file" onChange={browseClick} title="" />
      <br />
      <button onClick={uploadClick} disabled={(selectedFile === undefined)||(title.length < 1)}>
        Submit
      </button>
    </div>
  );
};

export default Upload;
