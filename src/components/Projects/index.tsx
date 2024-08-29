import { Project } from '../../types';
import './index.less';
import {handleBolderText} from '../utils'

type Props = {
  projects: Project[];
};

export default function Projects(props: Props) {
  const { projects } = props;

  return (
    <div className="projects">
      <h2>项目经验</h2>
      {projects.map((project, index) => (
        // 根据排版决定是否添加 page2 类名
        // 
        <div key={index} className={`project`}>
          <div className="icon-wrapper">
            <img src={project.icon} />
            <div className="fs-17 font-bold project-proName">{project.name}</div>
          </div>
          <div className="project-content">
            <div className="project-detail">
              <div className="project-detail-title">项目介绍</div>
              <div className="project-detail-content">
              {project.description.map((description, index) => {
                const  formattedItem = handleBolderText(description,project.boldWords);
                  return (
                    <p key={index} dangerouslySetInnerHTML={{ __html: formattedItem }}>
                    </p>
                  );
                })}
              </div>
            </div>
            <div className="project-detail">
              <div className="project-detail-title">技术栈</div>
              <div className="project-detail-stack">
                {project.stack.map((item, index) => {
                  return (
                    <div key={index} className="project-detail-stack-item">
                      {item}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="project-detail">
              <div className="project-detail-title">工作内容</div>
              <ul>
                {project.details.map((description, index) => {
                const  formattedItem = handleBolderText(description,project.boldWords);
                  return (
                    <li key={index} dangerouslySetInnerHTML={{ __html: formattedItem }}>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
