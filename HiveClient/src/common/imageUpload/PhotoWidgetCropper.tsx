import React from 'react';
import { Cropper } from 'react-cropper';
import 'cropperjs/dist/cropper.css';

interface Props{
    imagePreview: string;
    setCropper: (cropper: Cropper) => void;
}

/**
 * A React component for image cropping using the Cropper library.
 * @component
 * @param {Props} props - The component properties.
 * @param {string} props.imagePreview - The URL of the image to be cropped.
 * @param {(cropper: Cropper) => void} props.setCropper - Callback function to set the cropper instance.
 */
function PhotoWidgetCropper({imagePreview, setCropper}: Props) {
  return (
    <>
        <Cropper
            src={imagePreview}
            style={{height: 200, width: '100%'}}
            initialAspectRatio={1}
            aspectRatio={1}
            preview='.img-preview'
            guides={false}
            viewMode={1}
            autoCropArea={1}
            background={false}
            onInitialized={cropper => setCropper(cropper)}
        
        
        />
    </>
  )
}

export default PhotoWidgetCropper
