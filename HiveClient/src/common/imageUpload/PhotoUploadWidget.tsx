// PhotoUploadWidget.tsx
import React, { useState, useEffect } from "react";
import { Button, Grid, Header } from "semantic-ui-react";
import { Cropper } from "react-cropper";
import "cropperjs/dist/cropper.css";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface Props {
  loading: boolean;
}

const dzStyles = {
  border: "dashed 3px #eee",
  borderColor: "#eee",
  borderRadius: "5px",
  paddingTop: "30px",
  textAlign: "center" as "center",
  height: 200,
};

const dzActive = {
  borderColor: "green",
};

function PhotoUploadWidget({ loading }: Props) {
  

  const [files, setFiles] = useState<any>([]);
  const [cropper, setCropper] = useState<Cropper>();
  const [description, setDescription] = useState<string>("");

  const navigate = useNavigate();

  const onDrop = (acceptedFiles: File[]) => {
    setFiles(
      acceptedFiles.map((file: any) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    );
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const onCrop = () => {
    if (cropper) {
      cropper.getCroppedCanvas().toBlob((blob) => {
        if (blob) {
          console.log("Blob created");
          const formData = new FormData();
          formData.append("file", blob);
          formData.append("description", description);

          axios
            .post("http://localhost:5000/api/photo/create-photo", formData)
            .then((response) => {
              console.log("API response:", response.data);
              if (response.data.success) {
                console.log("Photo upload successful!");
                navigate("/hive");
              } else {
                console.error("Photo upload failed:", response.data.error);
              }
            })
            .catch((error) => {
              console.error("Error uploading photo:", error);
            });
        }
      });
    }
  };

  useEffect(() => {
    return () => {
      files.forEach((file: any) => URL.revokeObjectURL(file.preview));
    };
  }, [files]);

  return (
    <>
      <Grid style={{ marginLeft: "50px" }}>
        <Grid.Column width={4}>
          <Header sub color="orange" content="Step 1 - Add Photo" />
          <div
            {...getRootProps()}
            style={isDragActive ? { ...dzStyles, ...dzActive } : dzStyles}
          >
            <input {...getInputProps()} />
            {isDragActive ? (
              <p>Drop files here</p>
            ) : (
              <p>Drag 'n' drop some files here, or click to select files</p>
            )}
          </div>
        </Grid.Column>
        <Grid.Column width={2} />

        <Grid.Column width={4}>
          <Header sub color="orange" content="Step 2 - Resize Photo" />
          {files && files.length > 0 && (
            <Cropper
              src={files[0].preview}
              style={{ height: 200, width: "100%" }}
              initialAspectRatio={1}
              aspectRatio={1}
              preview=".img-preview"
              guides={false}
              viewMode={1}
              autoCropArea={1}
              background={false}
              onInitialized={(cropper) => setCropper(cropper)}
            />
          )}
        </Grid.Column>
        <Grid.Column width={2} />

        <Grid.Column width={4}>
          <Header sub color="orange" content="Step 3 - Preview and upload" />
          {files && files.length > 0 && (
            <>
              <div
                className="img-preview"
                style={{ minHeight: 200, overflow: "hidden" }}
              />
              <input
                type="text"
                placeholder="Enter description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <Button.Group widths={2}>
                <Button
                  loading={loading}
                  onClick={onCrop}
                  color="orange"
                  icon="check"
                />
                <Button
                  disabled={loading}
                  onClick={() => setFiles([])}
                  icon="close"
                />
              </Button.Group>
            </>
          )}
        </Grid.Column>
      </Grid>
    </>
  );
}



export default PhotoUploadWidget;
