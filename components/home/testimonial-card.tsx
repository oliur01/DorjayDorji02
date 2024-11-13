import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  image: string;
}

export function TestimonialCard({ name, role, content, image }: TestimonialCardProps) {
  return (
    <Card className="mx-auto max-w-xl">
      <CardContent className="pt-6">
        <div className="flex flex-col items-center text-center space-y-4">
          <Avatar className="h-16 w-16">
            <AvatarImage src={image} alt={name} />
            <AvatarFallback>{name[0]}</AvatarFallback>
          </Avatar>
          <blockquote className="text-lg italic text-muted-foreground">
            "{content}"
          </blockquote>
          <div>
            <div className="font-semibold">{name}</div>
            <div className="text-sm text-muted-foreground">{role}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}