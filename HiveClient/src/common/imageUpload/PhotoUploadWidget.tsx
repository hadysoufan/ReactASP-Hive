import React, { useState, useEffect } from "react";
import { Button, Grid, Header} from "semantic-ui-react";
import PhotoWdigetDropZone from "./PhotoWdigetDropZone.tsx";
import PhotoWidgetCropper from "./PhotoWidgetCropper.tsx";

interface Props{
    loading: boolean;
    uploadPhoto: (file: Blob) => void;
}

/**
 * A React component for handling photo uploads with cropping functionality.
 * @component
 * @param {Props} props - The component properties.
 * @param {boolean} props.loading - Indicates whether the component is in a loading state.
 * @param {(file: Blob) => void} props.uploadPhoto - Callback function to upload the cropped photo.
 */
function PhotoUploadWidget({loading, uploadPhoto}: Props) {
  const [files, setFiles] = useState<any>([]);
  const [cropper, setCropper] = useState<Cropper>();

  function onCrop() {
    if (cropper) {
      cropper.getCroppedCanvas().toBlob((blob) => uploadPhoto(blob!));
    }
  }

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
          <PhotoWdigetDropZone setFiles={setFiles} />
        </Grid.Column>
        <Grid.Column width={2} />

        <Grid.Column width={4}>
          <Header sub color="orange" content="Step 2 - Resize Photo" />
          {files && files.length > 0 && (
            <PhotoWidgetCropper
              setCropper={setCropper}
              imagePreview={files[0].preview}
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
              <Button.Group widths={2}>
                <Button loading={loading} onClick={onCrop} color="orange" icon="check" />
                <Button disabled={loading} onClick={() => setFiles([])} icon="close" />
              </Button.Group>
            </>
          )}
        </Grid.Column>
      </Grid>
    </>
  );
}

export default PhotoUploadWidget;
