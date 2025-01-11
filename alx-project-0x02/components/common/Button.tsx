import { ButtonProps } from '@/interfaces';

const Button: React.FC<ButtonProps> = ({ size = 'medium', shape = 'rounded-md', label, onClick, className }) => {

    // define size classes for the purpose of styling
    const sizeClasses = {
        small: 'px-2 py-1 text-sm',
        medium: 'px-4 py-2 text-base',
        large: 'px-6 py-3 text-lg',
    };

    // combine classes dynamically for the purpose of styling and customization
    const baseClass = `bg-slate-200 border-solid border-2 border-slate-400 text-black hover:bg-slate-800 text-white focus:ring focus:ring-blue-300 transition-all`;
    const combinedClass = `${baseClass} ${sizeClasses[size]} ${shape} ${className}`;

    return (
        <button className={combinedClass} onClick={onClick}>
            {label}
        </button>
    );
};

export default Button;