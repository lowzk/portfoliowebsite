import './proficiencies.css'

interface ProfProps {
    children: React.ReactNode;
    prof_list: string[];
}

function ProficienciesBubble({children, prof_list}: ProfProps) {
    return (
        <div className="proficiency-container">
          <div className="proficiency-header">{children}</div>
          <div className="proficiency-list">
            {prof_list.map((proficiency, index) => (
              <div key={index} className="proficiency-item">
                {proficiency}
              </div>
            ))}
          </div>
        </div>
      );   
}

export default ProficienciesBubble