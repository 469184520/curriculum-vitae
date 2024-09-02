import { Others } from '../../types';
import './index.less';

type Props = {
  others: Others[];
};

export default function Other(props: Props) {
  const { others } = props;

  return (
    <div className="others">
      <h4>其他项目经验</h4>
      {others.map((other, index) => (
        // 根据排版决定是否添加 page2 类名
        // 
        <div key={index} className={`other`}>
          <div className="icon-wrapper">
            <img src={other.icon} />
            <div className="fs-14 font-bold other-proName">{other.name}</div>
          </div>
          <div className="other-content">
            <div className="other-detail">
              {/* <div className="fs-14 other-detail-title">技术栈</div> */}
              <div className="fs-14 other-detail-stack">
                {other.stack.map((item, index) => {
                  return (
                    <div key={index} className="other-detail-stack-item">
                      {item}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
