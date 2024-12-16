import { Separator } from "./ui/separator";

interface HeadingProps {
  title: string;
  description?: string;
}

const Heading: React.FC<HeadingProps> = ({ title, description }) => {
  return (
    <>
      <div className="px-8">
        <h2 className="text-3xl font-bold tracking-tighter">{title}</h2>
        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
      </div>

      <Separator />
    </>
  );
};

export { Heading };