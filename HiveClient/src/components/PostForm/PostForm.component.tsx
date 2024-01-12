import React, { useState, useEffect } from "react";
import { Segment, Form, Button } from "semantic-ui-react";
import { useStore } from "../../app/stores/store.ts";
import { observer } from "mobx-react-lite";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../Loader/Loader.component.jsx";

function PostForm() {
  const { photoStore } = useStore();
  const { selectedPhoto, loadPhoto, editPhoto } = photoStore;
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [description, setDescription] = useState<string>("");

  useEffect(() => {
    if (id) {
      loadPhoto(id).then(() => {
        setDescription(selectedPhoto?.description || "");
      });
    }
  }, [id, loadPhoto, selectedPhoto]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };

  const handleFormSubmit = () => {
    if (id && selectedPhoto) {
      const updatedPhoto = { ...selectedPhoto, description };
      editPhoto(updatedPhoto).then(() => {
        navigate(`/hive/photo-details/${id}`);
      });
    }
  };

  const handleCancel = () => {
    navigate(`/hive/photo-details/${id}`);
  };

  const buttonStyle = {
    float: "right" as "right",
    marginTop: "10px" as "10px",
  };

  if (!selectedPhoto) {
    return <Loader />;
  }

  return (
    <>
      <Segment clearing>
        <Form autoComplete="off">
          <Form.Input
            placeholder="Description"
            name="description"
            value={description}
            onChange={handleInputChange}
          />

          <div style={buttonStyle}>
            <Button positive type="button" content="Submit" onClick={handleFormSubmit} />
            <Button positive type="button" content="Cancel" onClick={handleCancel} />
          </div>
        </Form>
      </Segment>
    </>
  );
}

export default observer(PostForm);
