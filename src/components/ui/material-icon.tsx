interface IMaterialIcon{
  className?: string;
  variant?: string;
  name: string;
}

export default function MaterialIcon({ name, className, variant }: IMaterialIcon) {

  let variantName = "material-symbols-";

  switch (variant) {
    case "outline":
      variantName = variantName + "outlined";
      break;
    case "rounded":
      variantName = variantName + "rounded";
      break;
    case "sharp":
      variantName = variantName + "sharp";
      break;
    default:
      variantName = variantName + "outlined";
      break;
  }

  return (
    <span className={className + " " + variantName}>{name}</span>
  )
}