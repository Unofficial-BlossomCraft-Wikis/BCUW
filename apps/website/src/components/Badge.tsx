import { Badge } from "@/components/ui/badge";

export default Badge;

interface ItemTypeBadgeProps {
  type:
    | "magic/infinite"
    | "weapon"
    | "armor"
    | "consumable"
    | "tool"
    | "key"
    | "other";
}

interface CrateTagBadgeProps {
  tag: "infinite crate" | "season" | "lt" | "holiday" | "other";
}

export function ItemTypeBadge({ type }: ItemTypeBadgeProps) {
  if (type === "magic/infinite") {
    return (
      <Badge className='no-underline' variant='immortal'>
        {type}
      </Badge>
    );
  } else if (type === "weapon") {
    return <Badge className='no-underline'>{type}</Badge>;
  } else if (type === "armor") {
    return <Badge className='no-underline'>{type}</Badge>;
  } else if (type === "consumable") {
    return <Badge className='no-underline'>{type}</Badge>;
  } else if (type === "tool") {
    return <Badge className='no-underline'>{type}</Badge>;
  } else if (type === "key") {
    return <Badge className='no-underline'>key</Badge>;
  }
  return (
    <Badge className='no-underline' variant='cherry'>
      {type}
    </Badge>
  );
}

export function CrateTagBadge({ tag }: CrateTagBadgeProps) {
  if (tag === "infinite crate") {
    return (
      <Badge className='no-underline' variant='immortal'>
        {tag}
      </Badge>
    );
  } else if (tag === "season") {
    return <Badge className='no-underline'>{tag}</Badge>;
  } else if (tag === "lt") {
    return <Badge className='no-underline'>{tag}</Badge>;
  } else if (tag === "holiday") {
    return <Badge className='no-underline'>{tag}</Badge>;
  }
  return <Badge className='no-underline'>{tag}</Badge>;
}
