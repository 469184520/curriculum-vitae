import { PersonalSkill } from '../../types';
import './index.less';

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
        let formattedItem = description;
        boldWords?.forEach(word => {
          const regex = new RegExp(`(${word})`, 'gi'); // 使用正则表达式匹配需要加粗的词
          formattedItem = formattedItem.replace(regex, '<strong>\$1</strong>'); // 替换为加粗
        });
        return (
          <li key={index} dangerouslySetInnerHTML={{ __html: formattedItem }}>
          </li>
        );
      })}
      </ul>
    </div>
  );
}
