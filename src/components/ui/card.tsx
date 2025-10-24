import Text from "/src/components/ui/text";
import MotionCard from "/src/components/ui/motion-card";
import MaterialIcon from "/src/components/ui/material-icon";

interface ICardProps {
  title: string;
  description: string;
  icon?: string;
}

export default function Card({ title, description, icon }: ICardProps) {

  return (
    <MotionCard className="h-full flex flex-col items-start text-start space-y-3 p-4 bg-white dark:bg-primary rounded-lg shadow-lg hover:scale-105 transition-all duration-300">

      { icon &&
        <div className="flex items-center justify-center w-14 h-14 bg-primary dark:bg-white rounded-full shadow-sm">
          <MaterialIcon name={icon} className="text-white dark:text-primary"/>
        </div>
      }

      <Text type="h3" label={title}/>

      <Text label={description}/>
    </MotionCard>
  )
}