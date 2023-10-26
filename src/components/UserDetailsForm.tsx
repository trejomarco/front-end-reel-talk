import React, { useState } from 'react';
import styled from 'styled-components';

// Define the component's props interface here if needed
interface UserDetailsFormProps {
    // Define props here
}

// Define the component's state interface
interface UserDetailsFormState {
    displayName: string;
    location: string;
    selectedPhoto: File | null;
}

// Define styled components for your styling
const FormContainer = styled.div`
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: 0 auto;
`;

const Label = styled.label`
  font-weight: bold;
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 15px;
`;

const FileInput = styled.input`
  display: none;
`;

const UploadButton = styled.label`
  background-color: #0070f3;
  color: #fff;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  display: inline-block;
`;

const UploadedImage = styled.img`
  max-width: 100%;
  margin-top: 10px;
`;

const Button = styled.button`
  background-color: #0070f3;
  color: #fff;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

function UserDetailsForm(props: UserDetailsFormProps) {
    // Use the state type
    const [formData, setFormData] = useState<UserDetailsFormState>({
        displayName: '',
        location: '',
        selectedPhoto: null,
    });

    // Function to handle the photo upload
    function handlePhotoUpload(event: React.ChangeEvent<HTMLInputElement>) {
        if (event.target.files && event.target.files[0]) {
            const selectedPhoto = event.target.files[0];
            setFormData({ ...formData, selectedPhoto });
        }
    }

    // Function to handle form submission
    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        // Implement form data validation and submission here
    }

    // Function to handle changes in the display name input field
    function handleDisplayNameChange(event: React.ChangeEvent<HTMLInputElement>) {
        setFormData({
            ...formData,
            displayName: event.target.value,
        });
    }

    // Function to handle changes in the location input field
    function handleLocationChange(event: React.ChangeEvent<HTMLInputElement>) {
        setFormData({
            ...formData,
            location: event.target.value,
        });
    }

    return (
        <FormContainer>
            <form onSubmit={handleSubmit}>
                <Label htmlFor="displayName">Display Name</Label>
                <Input
                    type="text"
                    id="displayName"
                    name="displayName"
                    value={formData.displayName}
                    onChange={handleDisplayNameChange}
                />

                <Label htmlFor="location">Location</Label>
                <Input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleLocationChange}
                />

                <Label htmlFor="photoUpload">Profile Photo</Label>
                <FileInput
                    type="file"
                    id="photoUpload"
                    name="photoUpload"
                    accept="image/*"
                    onChange={handlePhotoUpload}
                />
                {formData.selectedPhoto && (
                    <UploadedImage src={URL.createObjectURL(formData.selectedPhoto)} alt="Selected Profile" />
                )}

                {/* Error messages can be added here */}
                {/* {errors.displayName && <div className="error">{errors.displayName}</div>} */}
                {/* {errors.location && <div className="error">{errors.location}</div>} */}

                <Button type="submit">Submit</Button>
            </form>
        </FormContainer>
    );
}

export default UserDetailsForm;
