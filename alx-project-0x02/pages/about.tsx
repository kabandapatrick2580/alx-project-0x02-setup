import Button from "@/components/common/Button";

const About: React.FC = () => {
    const handleClick = (size: string, shape: string) => {
        alert(`Button size: ${size}, Button shape: ${shape}`);
    }
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">
                About Page
            </h1>
            <div className="space-y-4">
                <Button
                    size="small"
                    shape="rounded-sm"
                    label="Small Rounded Button"
                    onClick={() => handleClick('small', 'rounded-sm')}
                />

                <Button
                    size="medium"
                    shape="rounded-md"
                    label="Medium Rounded Button"
                    onClick={() => handleClick('medium', 'rounded-md')}
                />
                <Button
                    size="large"
                    shape="rounded-full"
                    label="Large Rounded Button"
                    onClick={() => handleClick('large', 'rounded-full')}
                />
            </div>
        </div>
    );
};
export default About;