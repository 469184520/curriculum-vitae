import { Experience } from '../../types';
import './index.less';

type Props = {
  experiences: Experience[];
};

export default function Experiences(props: Props) {
  const { experiences } = props;

  return (
    <div>
      {experiences.some((experience) => experience.type === 'company') && (
        <div>
          <h2>工作经历</h2>
          {experiences.map((experience, index) => {
            if (experience.type === 'company') {
              return (
                <div key={index} className="experience">
                  <div className="experience-title">
                    <div className="icon-wrapper">
                      {experience.icon ? <img src={experience.icon} alt="" /> : null}
                      <div className="fs-17 font-bold">{experience.company}</div>
                    </div>
                    <div>{experience.time}</div>
                  </div>
                  <div className="mb-8">{experience.position}</div>
                  <ul>
                    {experience?.descriptions.map((description, index) => {
                      let formattedItem = description;
                      experience?.boldWords?.forEach(word => {
                        const regex = new RegExp(`(${word})`, 'gi'); // 使用正则表达式匹配需要加粗的词
                        formattedItem = formattedItem.replace(regex, '<strong>\$1</strong>'); // 替换为加粗
                      });
                      console.log('formattedItem', formattedItem);

                      return (
                        <li key={index} dangerouslySetInnerHTML={{ __html: formattedItem }}>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            }
          })}
        </div>
      )}
      {experiences.some((experience) => experience.type === 'education') && (
        <div>
          <h2>教育经历</h2>
          {experiences.map((experience, index) => {
            if (experience.type === 'education') {
              return (
                <div key={index} className="experience">
                  <div className="experience-title">
                    <div className="icon-wrapper">
                      <img src={experience.icon} alt="" />
                      <div className="fs-17 font-bold">{experience.school}</div>
                    </div>
                    <div>{experience.time}</div>
                  </div>
                  <div className="font-bold mb-8">{experience.major}</div>
                  <ul>
                    {experience.descriptions.map((description, index) => (
                      <li key={index}>{description}</li>
                    ))}
                  </ul>
                </div>
              );
            }
          })}
        </div>
      )}
    </div>
  );
}
