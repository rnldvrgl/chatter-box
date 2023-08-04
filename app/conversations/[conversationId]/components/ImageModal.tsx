"use client"

interface ImageModalProps {
    isOpen?: boolean;
    onClose: () => void;
    src?: string | null;
}

const ImageModal: React.FC<ImageModalProps> = ({
    isOpen,
    onClose,
    src
}) => {
    if (!src) {
        return null;
    }

    return (
        <div>
            <h1>ImageModal</h1>
        </div>
    );
}


export default ImageModal;