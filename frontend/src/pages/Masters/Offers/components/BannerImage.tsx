import { CiImageOn } from 'react-icons/ci'
import ToggleSwitch from '../../../../utils/ToggleSwitch'
import { ImageDropzone } from './ImageDropzone';
import { useState } from 'react';

function BannerImage({ formData, setformData }) {
    const [selectedImage, setSelectedImage] = useState<File | null>(null);

    const handleBannerToggle = (value: boolean) => {
        setformData((prev) => ({
            ...prev,
            Bannerimage: value,
        }));
    };

    return (
        <div className='border border-gray-200 bg-white rounded-xl'>
            <div className="flex items-center justify-between border-gray-200 border-b p-3">
                <div className="flex items-center gap-2">
                    <div className="bg-blue-200 p-2 rounded-lg"><CiImageOn size={20} /></div>
                    <div>
                        <div className="font-medium">Banner Image</div>
                        <div className="text-sm text-gray-300">optional - adds a visual to the offer card</div>
                    </div>
                </div>
                <ToggleSwitch enabled={formData.Bannerimage} setEnabled={handleBannerToggle} />
            </div>

            {formData.Bannerimage && (
                <div className="p-3">
                    <ImageDropzone image={selectedImage} setImage={setSelectedImage} />
                </div>
            )}
        </div>
    )
}

export default BannerImage
