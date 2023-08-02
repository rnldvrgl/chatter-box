// Import necessary modules and components
import clsx from 'clsx';
import Link from "next/link";

// Define the props interface for DesktopItem component
interface DesktopItemProps {
    label: string; // Label or text of the navigation item
    icon: any; // Icon component to display next to the label
    href: string; // URL to navigate when the item is clicked
    onClick?: () => void; // Optional click event handler for the item
    active?: boolean; // Whether the item is currently active (for styling)
}

// DesktopItem component
const DesktopItem: React.FC<DesktopItemProps> = ({
    label,
    href,
    icon: Icon,
    active,
    onClick
}) => {
    // Define a click event handler to call the provided onClick function (if any)
    const handleClick = () => {
        if (onClick) {
            return onClick();
        }
    };

    return (
        <li onClick={handleClick} key={label}>
            {/* Render the link using Next.js Link component */}
            <Link
                href={href}
                // Conditionally apply CSS classes based on the active prop
                className={clsx(`
            group 
            flex 
            gap-x-3 
            rounded-md 
            p-3 
            text-sm 
            leading-6 
            font-semibold 
            text-gray-500 
            hover:text-black 
            hover:bg-gray-100
          `,
                    active && 'bg-gray-100 text-black'
                )}
            >
                {/* Render the icon next to the label */}
                <Icon className="w-6 h-6 shrink-0" aria-hidden="true" />
                {/* Use a span with sr-only class to provide accessibility for screen readers */}
                <span className="sr-only">{label}</span>
            </Link>
        </li>
    );
}

export default DesktopItem;
