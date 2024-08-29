import { PersonalSkill } from '../../types';
import './index.less';
import { handleBolderText } from '../utils';

type Props = {
  skills: PersonalSkill;
};

export default function Skills(props: Props) {
  const { icons = [], descriptions = [], boldWords = [] } = props.skills;

  return (
    <div className="skill">
      <h2>掌握技能</h2>
      {icons.length > 0 && (
        <div className="skill-icons">
          {icons.map((icon, index) => (
            <img key={index} src={icon} className="skill-icon" />
          ))}
        </div>
      )}
      <ul>
        {descriptions.map((description, index) => {
          const formattedItem = handleBolderText(description, boldWords);
          return (
            <li key={index} dangerouslySetInnerHTML={{ __html: formattedItem }}>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
