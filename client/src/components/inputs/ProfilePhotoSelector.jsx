import React, { useRef, useState, useEffect } from 'react';
import { LuUser, LuUpload, LuTrash } from "react-icons/lu";

function ProfilePhotoSelector({ image, setImage }) {
    const inputRef = useRef(null);
    const [previewUrl, setPreviewUrl] = useState(null);

    // Debug: Log whenever image prop changes
    useEffect(() => {
        console.log('=== Image prop changed ===');
        console.log('Current image:', image);
        console.log('Image type:', typeof image);
        console.log('Image is null:', image === null);
        console.log('========================');
    }, [image]);

    // Debug: Check if setImage function is actually a function
    useEffect(() => {
        console.log('=== setImage function check ===');
        console.log('setImage is function:', typeof setImage === 'function');
        console.log('setImage:', setImage);
        console.log('============================');
    }, []);

    const handleImageChange = (event) => {
        console.log('=== handleImageChange called ===');
        console.log('Event:', event);
        console.log('Event target:', event.target);
        console.log('Files:', event.target.files);
        console.log('Files length:', event.target.files?.length);
        
        const file = event.target.files[0];
        console.log('Selected file:', file);
        console.log('File name:', file?.name);
        console.log('File size:', file?.size);
        console.log('File type:', file?.type);
        
        if (file) {
            console.log('About to call setImage with:', file);
            
            // Try calling setImage and see if it throws any error
            try {
                setImage(file);
                console.log('setImage called successfully');
            } catch (error) {
                console.error('Error calling setImage:', error);
            }
            
            // Create preview
            try {
                const preview = URL.createObjectURL(file);
                setPreviewUrl(preview);
                console.log('Preview URL created:', preview);
            } catch (error) {
                console.error('Error creating preview URL:', error);
            }
        } else {
            console.log('No file selected');
        }
        console.log('=== End handleImageChange ===');
    }

    const handleRemoveImage = () => {
        console.log('=== handleRemoveImage called ===');
        setImage(null);
        setPreviewUrl(null);
        if (inputRef.current) {
            inputRef.current.value = '';
        }
        console.log('=== End handleRemoveImage ===');
    }

    const onChooseFile = () => {
        console.log('=== onChooseFile called ===');
        console.log('Input ref current:', inputRef.current);
        inputRef.current?.click();
    }

    return (
        <div className='flex justify-center mb-6'>
            <input 
                type="file" 
                accept="image/*" 
                ref={inputRef}
                onChange={handleImageChange}
                className='hidden'
            />   


            {!image && !previewUrl ? (
                <div className='w-20 h-20 flex items-center justify-center bg-blue-100/50 rounded-full relative cursor-pointer'>
                    <LuUser className='text-4xl text-primary' />
                    <button type='button' onClick={onChooseFile} className='w-8 h-8 flex items-center justify-center bg-primary rounded-full text-white absolute -bottom-1 -right-1 cursor-pointer' >
                        <LuUpload />
                    </button>
                </div>   
            ) : (
                <div className='relative'>
                    {previewUrl && (
                        <img 
                            src={previewUrl} 
                            alt="profile photo"
                            className='w-20 h-20 object-cover rounded-full'
                        />
                    )}
                    <button type='button' onClick={handleRemoveImage} className='w-8 h-8 flex items-center justify-center bg-red-500 rounded-full text-white absolute -bottom-1 -right-1 cursor-pointer'>
                        <LuTrash />
                    </button>
                </div>
            )}     
        </div>
    )
}

export default ProfilePhotoSelector