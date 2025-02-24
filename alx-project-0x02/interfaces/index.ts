export interface LayoutProps {
    children: React.ReactNode;
}

export interface CardProps {
    title: string;
    content: string;
}

export interface PostModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmmit: (title: string, content: string) => void;
}

export interface Post {
    title: string;
    content: string;
}

export interface ButtonProps {
    size?: "small" | "medium" | "large";
    shape?: "rounded-sm" | "rounded-md" | "rounded-full";
    label: string;
    onClick?: () => void;
    className?: string; // Optional for additional customization
}
export interface PostProps {
    title: string;
    content: string;
    userId: number;
    id: number;
}

export interface getStaticProps {
    posts: PostProps[];
}

export interface UserProps {
    id: number;
    name: string;
    email: string;
    address: {
      street: string;
      city: string;
      zipcode: string;
    };
  }
  