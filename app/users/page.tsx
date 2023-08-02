// Import necessary modules and components
"use client";
import EmptyState from '@/components/EmptyState';

// People component
const People = () => {
    return (
        <div
            // Styling classes for the div element
            className="hidden h-full lg:block lg:pl-80"
        >
            {/* Render the EmptyState component */}
            <EmptyState />
        </div>
    );
}

export default People;
