import React, { useState, useRef } from 'react';
import './style.css'
import { useDispatch } from 'react-redux';
import { songsOp } from '../../store/songs/operations';
import UploadIcon from '../../assets/images/upload-file.png';

export const MusicUploadForm = () => {
  const dispatch = useDispatch();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const uploadInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = async () => {
    if (selectedFile) {
      try {
        setUploading(true);

        // Simulating network latency with a timeout
        setTimeout(async () => {
          // Simulate a successful upload
          console.log('Uploading file:', selectedFile.name);

          // Assuming you want to store the File object
          const newSong = {
            id: Date.now(),
            songName: selectedFile.name.replace(/\.[^/.]+$/, ''),
            artistName: 'Unknown',
            trackNumber: 0,
            file: selectedFile, // Store the File object
          };

          // Dispatch an action to add the new song to the list
          await dispatch(songsOp.uploadSong(newSong));

          // Reset state and input value after successful upload
          setSelectedFile(null);
          setUploading(false);
          if (uploadInputRef.current) {
            uploadInputRef.current.value = '';
          }
        }, 2000); // Simulating a 2-second upload process
      } catch (error) {
        console.error('Error uploading file:', error);
        // Handle error state or display an error message to the user
      }
    }
  };

  return (
    <div className="music-upload-form">
      <h2>Upload Music:</h2>
      <label className="filebutton">
        <img src={UploadIcon} alt="" />
        <span>
        <input
        className='upload-input'
        type="file"
        accept=".mp3, .wav"
        onChange={handleFileChange}
        ref={uploadInputRef}
      />
        </span>
        </label>
      {selectedFile && <p><strong>Selected File:</strong> {selectedFile.name}</p>}
      <button
        className='upload-btn'
        onClick={handleUpload}
        disabled={!selectedFile || uploading}
      >
        {uploading ? 'Uploading...' : 'Upload'}
      </button>
    </div>
  );
};
