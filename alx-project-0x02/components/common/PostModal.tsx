import { PostModalProps } from '@/interfaces';
import { useState } from 'react';

const PostModal: React.FC<PostModalProps> = ({ isOpen, onClose, onSubmmit }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmmit(title, content);
        setTitle('');
        setContent('');
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded shadow-lg w-96">
                <h2 className="text-xl font-bold mb-4">Create Post</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-4'>
                        <label className='block text-gray-700 mb-2' htmlFor='title'>Title</label>
                        <input type="text" id='title' value={title}
                        onChange={(e) => setTitle(e.target.value)} className='w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:border-indigo-500' required
                        />
                    </div>
                    <div className='mb-4'>
                        <label className='block text-gray-700 mb-2' htmlFor='content'>Content</label>
                        <textarea id='content' value={content}
                        onChange={(e) => setContent(e.target.value)} className='w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:border-indigo-500' rows={4} required
                        />
                    </div>
                    <div className='flex justify-end'>
                        <button type='button' onClick={onClose} className='px-4 py-2 bg-red-500 text-white rounded mr-2'>Cancel</button>
                        <button type='submit' className='px-4 py-2 bg-indigo-500 text-white rounded'>Create</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PostModal;