// Import the 'clsx' library to conditionally apply CSS classes
import clsx from "clsx";

// Define the props interface for Button component
interface ButtonProps {
    type?: "button" | "submit" | "reset" | undefined; // Type of the button (default is "button")
    fullWidth?: boolean; // Whether the button should take the full width of its container
    children?: React.ReactNode; // The content of the button (e.g., text or other React components)
    onClick?: () => void; // Click event handler for the button
    secondary?: boolean; // Whether the button should have a secondary style (e.g., different text color)
    danger?: boolean; // Whether the button should have a danger style (e.g., red background)
    disabled?: boolean; // Whether the button should be disabled and non-clickable
}

// Button component
const Button: React.FC<ButtonProps> = ({
    type = "button",
    fullWidth,
    children,
    onClick,
    secondary,
    danger,
    disabled,
}) => {
    return (
        <button
            onClick={onClick} // Set the click event handler
            type={type} // Set the button type
            disabled={disabled} // Set the disabled state of the button
            className={clsx(`
        flex 
        justify-center 
        rounded-md 
        px-3 
        py-2 
        text-sm 
        font-semibold 
        focus-visible:outline 
        focus-visible:outline-2 
        focus-visible:outline-offset-2 
        `,
                // Conditionally apply CSS classes based on the props
                disabled && 'opacity-50 cursor-default',
                fullWidth && 'w-full',
                secondary ? 'text-gray-900' : 'text-white',
                danger && 'bg-rose-500 hover:bg-rose-600 focus-visible:outline-rose-600',
                !secondary && !danger && 'bg-sky-500 hover:bg-sky-600 focus-visible:outline-sky-600'
            )}
        >
            {children} {/* Render the content of the button */}
        </button>
    );
}

export default Button;
