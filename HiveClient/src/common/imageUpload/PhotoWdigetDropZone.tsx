import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Icon, Header } from 'semantic-ui-react';

interface Props {
  setFiles: (files: any) => void;
}

/**
 * A React component for handling image drops.
 * @component
 * @param {Props} props - The component properties.
 * @param {(files: any) => void} props.setFiles - Callback function to set the dropped files.
 */
function PhotoWdigetDropZone({ setFiles }: Props) {
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

  const onDrop = useCallback(
    (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file: any) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
    [setFiles]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div
      {...getRootProps()}
      style={isDragActive ? { ...dzStyles, ...dzActive } : dzStyles}
    >
      <input {...getInputProps()} />
      <Icon name='upload' size='huge' />
      <Header content='Drop image here' />
    </div>
  );
}

export default PhotoWdigetDropZone;
